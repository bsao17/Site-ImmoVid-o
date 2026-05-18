// Main App for the ACN hi-fi site.

const ACN_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "orange",
  "density": "standard",
  "showTweaks": true
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(ACN_DEFAULTS);
  const [brand, brandSoft, brandText] = palettes[t.palette] || palettes.orange;
  const D = densityTokens[t.density] || densityTokens.standard;

  // Inject CSS vars for density tokens
  const styleVars = {
    '--pad-y': `${D.padY}px`,
    '--pad-x': `${D.padX}px`,
    '--gap': `${D.gap}px`,
    '--brand': brand,
    '--brand-soft': brandSoft,
    '--brand-text': brandText,
  };

  return (
    <div style={{
      background: '#fafaf7',
      color: '#0a0a0a',
      fontFamily: 'Inter, sans-serif',
      minHeight: '100vh',
      ...styleVars,
    }}>
      <Nav brand={brand} />
      <Hero brand={brand} brandSoft={brandSoft} brandText={brandText} />
      <Marquee brand={brand} />
      <Services brand={brand} brandSoft={brandSoft} brandText={brandText} />
      <FeaturePAP brand={brand} brandSoft={brandSoft} brandText={brandText} />
      <Stats brand={brand} />
      <Portfolio brand={brand} brandSoft={brandSoft} brandText={brandText} />
      <Process brand={brand} brandSoft={brandSoft} brandText={brandText} />
      <Pricing brand={brand} brandSoft={brandSoft} brandText={brandText} />
      <Testimonials brand={brand} brandSoft={brandSoft} brandText={brandText} />
      <Zone brand={brand} brandSoft={brandSoft} brandText={brandText} />
      <Blog brand={brand} brandSoft={brandSoft} brandText={brandText} />
      <CTAFooter brand={brand} brandSoft={brandSoft} brandText={brandText} />
      <StickyCTA brand={brand} />

      <TweaksPanel title="Tweaks ACN">
        <TweakSection label="Palette de marque" />
        <TweakColor
          label="Couleur"
          value={t.palette}
          options={[
            ['#ff5a1f', '#fafaf7', '#0a0a0a'],
            ['#2563eb', '#fafaf7', '#0a0a0a'],
            ['#10b981', '#fafaf7', '#0a0a0a'],
            ['#dc2626', '#fafaf7', '#0a0a0a'],
            ['#f59e0b', '#fafaf7', '#0a0a0a'],
          ]}
          onChange={(arr) => {
            // arr is the palette array — match to a named preset
            const hex = arr[0];
            const name =
              hex === '#ff5a1f' ? 'orange' :
              hex === '#2563eb' ? 'blue' :
              hex === '#10b981' ? 'green' :
              hex === '#dc2626' ? 'red' : 'amber';
            setTweak('palette', name);
          }}
        />

        <TweakSection label="Densité de la page" />
        <TweakRadio
          label="Espacement"
          value={t.density}
          options={['compact', 'standard', 'comfy']}
          onChange={(v) => setTweak('density', v)}
        />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
