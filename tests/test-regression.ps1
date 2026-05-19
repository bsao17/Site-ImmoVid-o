$root = "C:\Users\decli\OneDrive\Bureau\ACN\Site-ImmoVid-o"
$pass = 0
$fail = 0

function Pass($msg) { Write-Host "  [PASS] $msg" -ForegroundColor Green; $global:pass++ }
function Fail($msg) { Write-Host "  [FAIL] $msg" -ForegroundColor Red;   $global:fail++ }

# Resolve relative href to absolute path
function Resolve-Href($baseDir, $href) {
    if ($href -match '^https?://' -or $href -match '^//' -or $href -match '^mailto:' -or $href -match '^#' -or $href -match '^javascript:') { return $null }
    $pathOnly = $href -replace '#.*$', ''
    if ([string]::IsNullOrWhiteSpace($pathOnly)) { return $null }
    if ($pathOnly.StartsWith('/')) {
        return Join-Path $root $pathOnly.TrimStart('/')
    }
    return [System.IO.Path]::GetFullPath((Join-Path $baseDir $pathOnly))
}

# Extract all IDs from a file
function Get-Ids($filePath) {
    $content = Get-Content $filePath -Raw -ErrorAction SilentlyContinue
    if (-not $content) { return @() }
    $ids = @()
    $matches = [regex]::Matches($content, 'id="([^"]+)"')
    foreach ($m in $matches) { $ids += $m.Groups[1].Value }
    $matches = [regex]::Matches($content, "id='([^']+)'")
    foreach ($m in $matches) { $ids += $m.Groups[1].Value }
    return $ids | Select-Object -Unique
}

# Extract hash-only links from a file
function Get-HashLinks($filePath) {
    $content = Get-Content $filePath -Raw -ErrorAction SilentlyContinue
    if (-not $content) { return @() }
    $hashes = @()
    $matches = [regex]::Matches($content, 'href="#([^"]+)"')
    foreach ($m in $matches) { $hashes += $m.Groups[1].Value }
    $matches = [regex]::Matches($content, "href='#([^']+)'")
    foreach ($m in $matches) { $hashes += $m.Groups[1].Value }
    return $hashes | Select-Object -Unique
}

Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "     TESTS ANTI-REGRESSION - ACN ImmoVideo"                -ForegroundColor Cyan
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host ""


# ===== 1. EXPECTED HTML FILES =====
Write-Host "--- 1. Fichiers HTML ---" -ForegroundColor Yellow

$expectedFiles = @(
    "index.html",
    "articles\5-erreurs-photo-qui-font-fuir-les-acheteurs\index.html",
    "articles\comment-estimer-son-bien-sans-agence\index.html",
    "articles\quand-le-drone-change-vraiment-la-donne\index.html",
    "articles\vendre-sans-agence-methode-2026\index.html",
    "articles\vendre-sans-agence-methode-2026\checklist.html",
    "mentions-legales\index.html",
    "politique-confidentialite\index.html",
    "cgv\index.html"
)

foreach ($f in $expectedFiles) {
    $path = Join-Path $root $f
    if (Test-Path $path) { Pass "$f" } else { Fail "$f - MANQUANT" }
}

$htmlFiles = $expectedFiles | ForEach-Object { Join-Path $root $_ }
Write-Host ""


# ===== 2. INTERNAL LINKS =====
Write-Host "--- 2. Liens internes ---" -ForegroundColor Yellow

$totalLinks = 0
$brokenLinks = 0

foreach ($file in $htmlFiles) {
    $content = Get-Content $file -Raw -ErrorAction SilentlyContinue
    if (-not $content) { continue }
    $baseDir = Split-Path $file -Parent

    $matches = [regex]::Matches($content, 'href="([^"]+)"')
    foreach ($m in $matches) {
        $href = $m.Groups[1].Value
        if ([string]::IsNullOrWhiteSpace($href)) { continue }
        $resolved = Resolve-Href $baseDir $href
        if (-not $resolved) { continue }
        $totalLinks++
        if (-not (Test-Path $resolved)) {
            $rel = $file.Replace($root, "").TrimStart("\")
            Fail "$rel -> $href"
            $brokenLinks++
        }
    }
    $matches = [regex]::Matches($content, "href='([^']+)'")
    foreach ($m in $matches) {
        $href = $m.Groups[1].Value
        if ([string]::IsNullOrWhiteSpace($href)) { continue }
        $resolved = Resolve-Href $baseDir $href
        if (-not $resolved) { continue }
        $totalLinks++
        if (-not (Test-Path $resolved)) {
            $rel = $file.Replace($root, "").TrimStart("\")
            Fail "$rel -> $href"
            $brokenLinks++
        }
    }
}

if ($brokenLinks -eq 0) { Pass "Aucun lien interne casse ($totalLinks verifies)" }
else                    { Fail "$brokenLinks lien(s) casse(s) sur $totalLinks" }
Write-Host ""


# ===== 3. HASH ANCHORS =====
Write-Host "--- 3. Ancres #id ---" -ForegroundColor Yellow

$totalHashes = 0
$brokenHashes = 0

foreach ($file in $htmlFiles) {
    $ids = Get-Ids $file
    $hashLinks = Get-HashLinks $file
    $rel = $file.Replace($root, "").TrimStart("\")

    foreach ($h in $hashLinks) {
        $totalHashes++
        if ($ids -notcontains $h) {
            Fail "$rel -> #$h introuvable"
            $brokenHashes++
        }
    }
}

if ($brokenHashes -eq 0) { Pass "Toutes les ancres #id valides ($totalHashes verifiees)" }
else                    { Fail "$brokenHashes ancre(s) cassee(s) sur $totalHashes" }
Write-Host ""


# ===== 4. FORMS =====
Write-Host "--- 4. Formulaires ---" -ForegroundColor Yellow

$totalForms = 0
$formErrors = 0

foreach ($file in $htmlFiles) {
    $content = Get-Content $file -Raw -ErrorAction SilentlyContinue
    if (-not $content) { continue }
    $rel = $file.Replace($root, "").TrimStart("\")

    $forms = [regex]::Matches($content, '<form\s[^>]*>', [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)
    foreach ($f in $forms) {
        $totalForms++
        $tag = $f.Value
        $hasAction = $tag -match 'action\s*=\s*"([^"]+)"' -or $tag -match "action\s*=\s*'([^']+)'"
        $hasMethod = $tag -match 'method\s*=\s*"([^"]+)"' -or $tag -match "method\s*=\s*'([^']+)'"
        $issues = @()
        if (-not $hasAction) { $issues += "action manquant" }
        if (-not $hasMethod) { $issues += "method manquant" }
        if ($issues.Count -gt 0) { Fail "$rel - formulaire: $($issues -join ', ')"; $formErrors++ }
    }
}

if ($formErrors -eq 0) { Pass "Tous les formulaires ont action + method ($totalForms verifies)" }
else                   { Fail "$formErrors formulaire(s) problematique(s) sur $totalForms" }
Write-Host ""


# ===== 5. SEO META TAGS (articles only) =====
Write-Host "--- 5. Meta SEO (articles) ---" -ForegroundColor Yellow

$articleFiles = $htmlFiles | Where-Object { $_ -match '\\articles\\' }
$seoErrors = 0

foreach ($file in $articleFiles) {
    $content = Get-Content $file -Raw -ErrorAction SilentlyContinue
    if (-not $content) { continue }
    $rel = $file.Replace($root, "").TrimStart("\")

    $checks = @(
        @{ name = "<title>"       ; pattern = '<title>' }
        @{ name = "description"   ; pattern = 'name="description"' }
        @{ name = "og:title"      ; pattern = 'property="og:title"' }
        @{ name = "og:description"; pattern = 'property="og:description"' }
        @{ name = "og:image"      ; pattern = 'property="og:image"' }
        @{ name = "viewport"      ; pattern = 'name="viewport"' }
        @{ name = "robots"        ; pattern = 'name="robots"' }
        @{ name = "canonical"     ; pattern = 'rel="canonical"' }
    )

    $missing = @()
    foreach ($c in $checks) {
        if ($content -notmatch $c.pattern) { $missing += $c.name }
    }

    if ($missing.Count -gt 0) {
        Fail "$rel - manquant: $($missing -join ', ')"
        $seoErrors++
    } else {
        Pass "$rel - tous les tags SEO presents"
    }
}

Write-Host ""


# ===== 6. NAV STRUCTURE (articles) =====
Write-Host "--- 6. Structure nav (articles) ---" -ForegroundColor Yellow

$navErrors = 0

foreach ($file in $articleFiles) {
    $content = Get-Content $file -Raw -ErrorAction SilentlyContinue
    if (-not $content) { continue }
    $rel = $file.Replace($root, "").TrimStart("\")

    # Skip checklist.html - different header
    if ($rel -match 'checklist') { continue }

    $hasAccueil = $content -match '<a[^>]*>[Aa]ccueil</a>' -and $content -match 'href="/"'
    $hasContact = $content -match 'href="#contact"' -and $content -match '[Cc]ontact'

    $missingNav = @()
    if (-not $hasAccueil) { $missingNav += "Accueil" }
    if (-not $hasContact) { $missingNav += "Contact" }

    if ($missingNav.Count -gt 0) {
        Fail "$rel - nav manque: $($missingNav -join ', ')"
        $navErrors++
    } else {
        Pass "$rel - nav correcte"
    }
}

if ($navErrors -eq 0) { Pass "Tous les articles ont la nav standard" }

Write-Host ""


# ===== 7. FORM SUBMISSION FEEDBACK =====
Write-Host "--- 7. Feedback envoi formulaire ---" -ForegroundColor Yellow

# ----- 7a. Landing page (React formStatus) -----
$idx = Get-Content (Join-Path $root "index.html") -Raw
$idxRel = "index.html"

if ($idx -match "\[formStatus,\s*setFormStatus\]\s*=\s*React\.useState\('idle'\)") {
    Pass "$idxRel - React.useState('idle') present"
} else { Fail "$idxRel - React.useState('idle') manquant" }

if ($idx -match "setFormStatus\('loading'\)") {
    Pass "$idxRel - setFormStatus('loading') present"
} else { Fail "$idxRel - setFormStatus('loading') manquant" }

if ($idx -match "setFormStatus\('success'\)") {
    Pass "$idxRel - setFormStatus('success') present"
} else { Fail "$idxRel - setFormStatus('success') manquant" }

if ($idx -match "setFormStatus\('error'\)") {
    Pass "$idxRel - setFormStatus('error') present"
} else { Fail "$idxRel - setFormStatus('error') manquant" }

if ($idx -match 'onSubmit\s*=\s*\{?\s*handleSubmit\s*\}?') {
    Pass "$idxRel - onSubmit={handleSubmit} present"
} else { Fail "$idxRel - onSubmit={handleSubmit} manquant" }

if ($idx -match 'action\s*=\s*"https://api\.web3forms\.com/submit"') {
    Pass "$idxRel - action web3forms correct"
} else { Fail "$idxRel - action web3forms incorrect/manquant" }

if ($idx -match 'access_key') {
    Pass "$idxRel - champ access_key present"
} else { Fail "$idxRel - champ access_key manquant" }

if ($idx -match 'Merci') {
    Pass "$idxRel - message succes present"
} else { Fail "$idxRel - message succes manquant" }

if ($idx -match "Envoi en cours") {
    Pass "$idxRel - texte chargement present"
} else { Fail "$idxRel - texte chargement manquant" }

if ($idx -match 'Erreur d') {
    Pass "$idxRel - message erreur present"
} else { Fail "$idxRel - message erreur manquant" }

if ($idx -match 'contact@acn-studio\.fr') {
    Pass "$idxRel - email contact dans erreur present"
} else { Fail "$idxRel - email contact dans erreur manquant" }


# ----- 7b. Non-React pages (IIFE script) -----
$nonReactFiles = @(
    "articles\5-erreurs-photo-qui-font-fuir-les-acheteurs\index.html",
    "articles\comment-estimer-son-bien-sans-agence\index.html",
    "articles\quand-le-drone-change-vraiment-la-donne\index.html",
    "articles\vendre-sans-agence-methode-2026\index.html",
    "mentions-legales\index.html",
    "politique-confidentialite\index.html",
    "cgv\index.html"
)

foreach ($f in $nonReactFiles) {
    $path = Join-Path $root $f
    $content = Get-Content $path -Raw -ErrorAction SilentlyContinue
    if (-not $content) { Fail "$f - fichier introuvable"; continue }
    $rel = $f

    # Check IIFE exists (unique pattern: querySelectorAll targeting web3forms)
    if ($content -match "querySelectorAll\('form\[action\*=""web3forms""\]'") {
        Pass "$rel - script feedback present"
    } else {
        Fail "$rel - script feedback IIFE manquant"; continue
    }

    # Check loading state
    if ($content -match "btn\.disabled\s*=\s*true") {
        Pass "$rel - btn.disabled = true present"
    } else { Fail "$rel - btn.disabled = true manquant" }

    if ($content -match "Envoi en cours") {
        Pass "$rel - texte 'Envoi en cours...' present"
    } else { Fail "$rel - texte 'Envoi en cours...' manquant" }

    # Check success message
    if ($content -match "Merci") {
        Pass "$rel - message succes present"
    } else { Fail "$rel - message succes manquant" }

    if ($content -match "sous 24h") {
        Pass "$rel - delai reponse present"
    } else { Fail "$rel - delai reponse manquant" }

    # Check error recovery
    if ($content -match "btn\.disabled\s*=\s*false") {
        Pass "$rel - btn.disabled = false present (recuperation erreur)"
    } else { Fail "$rel - btn.disabled = false manquant" }

    # Check error message
    if ($content -match 'Erreur d') {
        Pass "$rel - message erreur present"
    } else { Fail "$rel - message erreur manquant" }

    if ($content -match 'contact@acn-studio\.fr') {
        Pass "$rel - email contact dans erreur present"
    } else { Fail "$rel - email contact dans erreur manquant" }

    # Check form action and access_key
    if ($content -match 'action\s*=\s*"https://api\.web3forms\.com/submit"') {
        Pass "$rel - action web3forms correct"
    } else { Fail "$rel - action web3forms incorrect/manquant" }

    if ($content -match 'access_key') {
        Pass "$rel - champ access_key present"
    } else { Fail "$rel - champ access_key manquant" }
}

Write-Host ""
Write-Host "========================================================" -ForegroundColor Cyan
if ($fail -eq 0) {
    Write-Host "  RESULTAT : $pass PASSE(S) / $fail ECHEC(S)" -ForegroundColor Green
} else {
    Write-Host "  RESULTAT : $pass PASSE(S) / $fail ECHEC(S)" -ForegroundColor Red
}
Write-Host "========================================================" -ForegroundColor Cyan
