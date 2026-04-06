'use client';
import dynamic from 'next/dynamic';
import { useEffect, useState, useRef } from 'react';
import { useBreakpoint } from '../hooks/useBreakpoint';

const HeroCanvas = dynamic(() => import('./HeroCanvas'), { ssr: false });

const stats = [
  { target: 8,  suffix: '+',   label: 'Phases' },
  { target: 54, suffix: '+',   label: 'Videos' },
  { target: 20, suffix: 'hrs', label: 'Content' },
  { target: 75, suffix: '',    label: 'Seats Only' },
];

function useCountUp(target, active, duration = 900) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const raf = (now) => {
      const p = Math.min((now - start) / duration, 1);
      // easeOutExpo
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setCount(Math.round(eased * target));
      if (p < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [active, target, duration]);
  return count;
}

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const { isMobile } = useBreakpoint();

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section style={{
      position: 'relative',
      padding: isMobile ? '60px 20px 40px' : '80px 40px 60px',
      textAlign: 'center',
      overflow: 'hidden',
      minHeight: '88vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      {/* Three.js canvas */}
      <HeroCanvas />

      {/* Radial gradient overlays */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(254,203,4,0.07) 0%, transparent 65%)',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
        width: '600px', height: '300px',
        background: 'radial-gradient(ellipse, rgba(0,212,255,0.05) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '900px', margin: '0 auto' }}>

        {/* Eyebrow */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          fontFamily: 'var(--mono)', fontSize: '12px', fontWeight: 600,
          letterSpacing: '2px', color: 'var(--gold)',
          background: 'var(--gold-dim)', padding: '8px 16px',
          borderRadius: '6px', marginBottom: '32px',
          textTransform: 'uppercase',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold)', animation: 'pulse 2s ease infinite', display: 'inline-block' }} />
          FOUNDING BATCH 1 — TAMIL
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: 'var(--serif)',
          fontSize: 'clamp(40px, 7.5vw, 82px)',
          fontWeight: 700,
          lineHeight: 1.05,
          letterSpacing: '-2px',
          marginBottom: '8px',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
        }}>
          How to{' '}
          <WordReveal visible={visible} />{' '}
          Like a Designer
        </h1>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: '14px', marginBottom: '24px',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.7s ease 0.18s, transform 0.7s ease 0.18s',
        }}>
          {!isMobile && <span style={{ flex: 1, maxWidth: '80px', height: '1px', background: 'linear-gradient(to right, transparent, var(--border-accent))' }} />}
          <span style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(14px, 2vw, 22px)',
            fontWeight: 600,
            color: 'var(--white-70)',
            letterSpacing: '0.01em',
          }}>Graphic Design Masterclass</span>
          <span style={{
            fontFamily: 'var(--mono)',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '1.5px',
            color: '#000',
            background: 'var(--gold)',
            padding: '3px 10px',
            borderRadius: '4px',
            textTransform: 'uppercase',
            flexShrink: 0,
          }}>Tamil</span>
          {!isMobile && <span style={{ flex: 1, maxWidth: '80px', height: '1px', background: 'linear-gradient(to left, transparent, var(--border-accent))' }} />}
        </div>

        {/* Sub */}
        <p style={{
          fontSize: '17px',
          color: 'var(--white-50)',
          lineHeight: 1.7,
          maxWidth: '580px',
          margin: '0 auto 40px',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.7s ease 0.26s, transform 0.7s ease 0.26s',
        }}>
          20+ hours of structured learning. From design thinking to Photoshop, Illustrator &amp; real client work. Not a tool tutorial — a decision-making system.
        </p>

        {/* CTAs */}
        <div style={{
          display: 'flex', gap: '12px', justifyContent: 'center',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'stretch' : 'center',
          flexWrap: 'wrap', marginBottom: '48px',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.7s ease 0.34s, transform 0.7s ease 0.34s',
        }}>
          <CTAPrimary href="#enroll">Enroll Now — ₹999 →</CTAPrimary>
          <CTASecondary href="#course-preview">
            <span style={{
              width: '32px', height: '32px', borderRadius: '50%',
              background: 'var(--white-10)', display: 'inline-flex',
              alignItems: 'center', justifyContent: 'center',
              marginRight: '8px', flexShrink: 0,
            }}>
              <svg viewBox="0 0 24 24" width="11" height="11" fill="var(--gold)"><polygon points="8 5 20 12 8 19"/></svg>
            </span>
            Watch Preview
          </CTASecondary>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex', justifyContent: 'center',
          gap: isMobile ? '24px' : '48px', flexWrap: 'wrap',
          paddingTop: '32px',
          borderTop: '1px solid var(--border)',
          maxWidth: '640px', margin: '0 auto',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.7s ease 0.5s',
        }}>
          {stats.map((s, i) => (
            <StatItem key={i} stat={s} active={visible} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Stroke palette per theme
const STRIKE_PALETTE = {
  teal:   { glow1: 'rgba(255,60,172,0.15)', glow2: 'rgba(255,60,172,0.30)', core: [255, 60, 172] },
  yellow: { glow1: 'rgba(255,0,50,0.18)',   glow2: 'rgba(255,0,50,0.38)',   core: [255, 10, 50]  },
};

function WordReveal({ visible }) {
  // phases: 0=reset 1=Design appears 2=strike draws 3=Think reveals
  const [phase, setPhase] = useState(0);
  const timers = useRef([]);
  const strikeRef = useRef(null);
  const getTheme = () => {
    if (typeof window === 'undefined') return 'teal';
    // Read localStorage directly — available instantly on client before any effects
    return localStorage.getItem('dev-theme') === 'yellow' ? 'yellow' : 'teal';
  };
  const strikeThemeRef = useRef(getTheme());
  const [themeState, setThemeState] = useState(getTheme);

  useEffect(() => {
    if (!visible) return;
    const clear = () => { timers.current.forEach(clearTimeout); timers.current = []; };
    const t = (fn, d) => timers.current.push(setTimeout(fn, d));
    const loop = () => {
      clear();
      setPhase(0);
      t(() => setPhase(1), 80);
      t(() => setPhase(2), 1050);
      t(() => setPhase(3), 1850);
      t(() => loop(),       4600);
    };
    const init = setTimeout(loop, 500);
    return () => { clearTimeout(init); clear(); };
  }, [visible]);

  // Watch theme changes for strike color
  useEffect(() => {
    const obs = new MutationObserver(() => {
      const t = document.documentElement.getAttribute('data-theme') === 'yellow' ? 'yellow' : 'teal';
      strikeThemeRef.current = t;
      setThemeState(t);
    });
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => obs.disconnect();
  }, []);

  // Canvas pen-stroke strikethrough
  useEffect(() => {
    const canvas = strikeRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    if (phase !== 2) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const cssW = canvas.offsetWidth;
    const cssH = canvas.offsetHeight;
    canvas.width  = cssW * dpr;
    canvas.height = cssH * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const W = cssW, H = cssH;
    const pal = STRIKE_PALETTE[strikeThemeRef.current];
    const [cr, cg, cb] = pal.core;

    // Slash geometry — slight diagonal, like a real sword cut
    const x0 = W * 0.01, y0 = H * 0.36;
    const x1 = W * 0.99, y1 = H * 0.64;

    const CUT_MS   = 175; // ultra-fast cut
    const FLASH_MS = 300; // impact flash + settle
    const start = performance.now();
    let stage = 'cut'; // 'cut' → 'flash'
    let rafId;

    const strokeLine = (fromX, fromY, toX, toY, width, style) => {
      ctx.beginPath();
      ctx.lineCap = 'round';
      ctx.lineWidth = width;
      ctx.strokeStyle = style;
      ctx.moveTo(fromX, fromY);
      ctx.lineTo(toX, toY);
      ctx.stroke();
    };

    const drawFrame = (now) => {
      const elapsed = now - start;
      ctx.clearRect(0, 0, W, H);

      if (stage === 'cut') {
        const t  = Math.min(elapsed / CUT_MS, 1);
        const e  = t * t * t; // ease-in cubic — accelerates hard like a blade swing

        const hx = x0 + (x1 - x0) * e;
        const hy = y0 + (y1 - y0) * e;

        // ── Motion-blur wake (3 ghost trails behind blade) ──
        [
          { lag: 0.26, w: 52, a: 0.13 },
          { lag: 0.16, w: 30, a: 0.22 },
          { lag: 0.08, w: 14, a: 0.34 },
        ].forEach(({ lag, w, a }) => {
          const te = Math.max(0, e - lag);
          const tx = x0 + (x1 - x0) * te;
          const ty = y0 + (y1 - y0) * te;
          const g = ctx.createLinearGradient(x0, y0, tx, ty);
          g.addColorStop(0,   `rgba(${cr},${cg},${cb},0)`);
          g.addColorStop(0.5, `rgba(${cr},${cg},${cb},${a * 0.35 * t})`);
          g.addColorStop(1,   `rgba(${cr},${cg},${cb},${a * t})`);
          strokeLine(x0, y0, tx, ty, w, g);
        });

        // ── Outer glow of drawn slash ──
        const og = ctx.createLinearGradient(x0, y0, hx, hy);
        og.addColorStop(0,   `rgba(${cr},${cg},${cb},0.06)`);
        og.addColorStop(0.7, `rgba(${cr},${cg},${cb},0.45)`);
        og.addColorStop(1,   `rgba(${cr},${cg},${cb},0.95)`);
        strokeLine(x0, y0, hx, hy, 22, og);

        // ── Mid glow layer ──
        const mg = ctx.createLinearGradient(x0, y0, hx, hy);
        mg.addColorStop(0,   `rgba(${cr},${cg},${cb},0.04)`);
        mg.addColorStop(0.7, `rgba(${cr},${cg},${cb},0.65)`);
        mg.addColorStop(1,   `rgba(255,255,255,0.9)`);
        strokeLine(x0, y0, hx, hy, 7, mg);

        // ── Core slash — bright white tip ──
        const cg2 = ctx.createLinearGradient(x0, y0, hx, hy);
        cg2.addColorStop(0,    `rgba(${cr},${cg},${cb},0.08)`);
        cg2.addColorStop(0.65, `rgba(${cr},${cg},${cb},0.95)`);
        cg2.addColorStop(1,    `rgba(255,255,255,1)`);
        strokeLine(x0, y0, hx, hy, 2.5, cg2);

        // ── Blade-tip spark ──
        const tr = 16 + e * 22;
        const tg = ctx.createRadialGradient(hx, hy, 0, hx, hy, tr);
        tg.addColorStop(0,   `rgba(255,255,255,${0.98 * t})`);
        tg.addColorStop(0.2, `rgba(${cr},${cg},${cb},${0.85 * t})`);
        tg.addColorStop(1,   'rgba(0,0,0,0)');
        ctx.fillStyle = tg;
        ctx.fillRect(hx - tr, hy - tr, tr * 2, tr * 2);

        if (t < 1) { rafId = requestAnimationFrame(drawFrame); return; }
        stage = 'flash';
      }

      if (stage === 'flash') {
        const ft = Math.min((elapsed - CUT_MS) / FLASH_MS, 1);
        // Spike up fast (0–20%) then decay (20–100%)
        const fp = ft < 0.2 ? ft / 0.2 : Math.pow(1 - (ft - 0.2) / 0.8, 1.6);

        // ── Settled wide glow (always present) ──
        const base = 0.30 + fp * 0.35;
        const sg = ctx.createLinearGradient(x0, y0, x1, y1);
        sg.addColorStop(0,   `rgba(${cr},${cg},${cb},${base * 0.20})`);
        sg.addColorStop(0.5, `rgba(${cr},${cg},${cb},${base})`);
        sg.addColorStop(1,   `rgba(${cr},${cg},${cb},${base * 0.20})`);
        strokeLine(x0, y0, x1, y1, 22, sg);

        // ── Mid glow settled ──
        strokeLine(x0, y0, x1, y1, 7,
          `rgba(${cr},${cg},${cb},${0.55 + fp * 0.35})`);

        // ── Core slash settled ──
        strokeLine(x0, y0, x1, y1, 2.5,
          `rgba(255,255,255,${0.65 + fp * 0.35})`);

        // ── Impact flash at exit end ──
        if (fp > 0.01) {
          const fr = 52 * fp;
          const fg = ctx.createRadialGradient(x1, y1, 0, x1, y1, fr);
          fg.addColorStop(0,   `rgba(255,255,255,${fp * 0.95})`);
          fg.addColorStop(0.25, `rgba(${cr},${cg},${cb},${fp * 0.80})`);
          fg.addColorStop(1,   'rgba(0,0,0,0)');
          ctx.fillStyle = fg;
          ctx.fillRect(x1 - fr, y1 - fr, fr * 2, fr * 2);

          // Entry spark
          const fr2 = 28 * fp;
          const fg2 = ctx.createRadialGradient(x0, y0, 0, x0, y0, fr2);
          fg2.addColorStop(0,   `rgba(255,255,255,${fp * 0.7})`);
          fg2.addColorStop(0.4, `rgba(${cr},${cg},${cb},${fp * 0.5})`);
          fg2.addColorStop(1,   'rgba(0,0,0,0)');
          ctx.fillStyle = fg2;
          ctx.fillRect(x0 - fr2, y0 - fr2, fr2 * 2, fr2 * 2);
        }

        if (ft < 1) rafId = requestAnimationFrame(drawFrame);
        // After flash, the settled glow remains (canvas not cleared)
      }
    };

    rafId = requestAnimationFrame(drawFrame);
    return () => cancelAnimationFrame(rafId);
  }, [phase]);

  // Design: slow blur-fade-up, then fade up & out at phase 3
  const designStyle = (() => {
    if (phase === 0) return { opacity: 0, transform: 'translateY(14px)', filter: 'blur(6px)', transition: 'none' };
    if (phase === 1 || phase === 2) return { opacity: 1, transform: 'translateY(0)', filter: 'blur(0)', transition: 'opacity 0.7s ease, transform 0.7s ease, filter 0.7s ease' };
    return { opacity: 0, transform: 'translateY(-8px)', filter: 'blur(5px)', transition: 'opacity 0.4s ease, transform 0.4s ease, filter 0.4s ease' };
  })();

  // Think: springs in with a slight overshoot + glow
  const thinkStyle = (() => {
    if (phase < 3) return { opacity: 0, transform: 'translateY(12px) scale(0.94)', filter: 'blur(8px)', transition: phase === 0 ? 'none' : 'opacity 0.2s ease' };
    return {
      opacity: 1, transform: 'translateY(0) scale(1)', filter: 'blur(0)',
      transition: 'opacity 0.55s ease, transform 0.6s cubic-bezier(0.34,1.56,0.64,1), filter 0.55s ease',
      textShadow: themeState === 'yellow'
        ? '0 0 50px rgba(255,229,0,0.65), 0 0 18px rgba(255,229,0,0.40)'
        : '0 0 50px rgba(16,232,208,0.55), 0 0 18px rgba(16,232,208,0.30)',
    };
  })();

  return (
    <span style={{ display: 'inline-grid', verticalAlign: 'baseline' }}>

      {/* ── Design + canvas pen-stroke ── */}
      <span style={{ gridArea: '1/1', position: 'relative', color: 'var(--white)', userSelect: 'none', ...designStyle }}>
        Design
        <canvas ref={strikeRef} style={{
          position: 'absolute',
          left: '-10px', top: '10%',
          width: 'calc(100% + 20px)', height: '80%',
          pointerEvents: 'none', display: 'block',
        }} />
      </span>

      {/* ── Think ── */}
      <em style={{ gridArea: '1/1', fontStyle: 'italic', color: 'var(--gold)', paddingRight: '0.08em', ...thinkStyle }}>
        Think
      </em>
    </span>
  );
}

function StatItem({ stat, active, delay }) {
  const [started, setStarted] = useState(false);
  useEffect(() => {
    if (!active) return;
    const t = setTimeout(() => setStarted(true), delay + 500);
    return () => clearTimeout(t);
  }, [active, delay]);
  const count = useCountUp(stat.target, started, 900);
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{
        fontFamily: 'var(--mono)', fontSize: 'clamp(22px, 6vw, 34px)',
        fontWeight: 700, color: 'var(--white)', lineHeight: 1,
        letterSpacing: '-1px',
        marginBottom: '4px',
      }}>
        {count}<span style={{ color: 'var(--gold)' }}>{stat.suffix}</span>
      </div>
      <div style={{
        fontFamily: 'var(--mono)', fontSize: '11px',
        color: 'var(--white-30)', letterSpacing: '2px',
        textTransform: 'uppercase',
      }}>{stat.label}</div>
    </div>
  );
}

function CTAPrimary({ href, children }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={href} style={{
      display: 'inline-flex', alignItems: 'center',
      padding: '18px 40px', background: 'var(--gold)', color: '#000',
      fontFamily: 'var(--sans)', fontSize: '16px', fontWeight: 800,
      borderRadius: '12px', textDecoration: 'none',
      transition: 'all 0.25s', letterSpacing: '0.5px',
      transform: hov ? 'translateY(-2px)' : '',
      boxShadow: hov ? '0 8px 30px rgba(254,203,4,0.35)' : '',
    }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >{children}</a>
  );
}

function CTASecondary({ href, children }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={href} style={{
      display: 'inline-flex', alignItems: 'center',
      padding: '18px 32px', background: hov ? 'var(--white-05)' : 'transparent',
      color: 'var(--white-90)', fontFamily: 'var(--sans)', fontSize: '15px',
      fontWeight: 600, border: `1px solid ${hov ? 'var(--white-30)' : 'var(--border-accent)'}`,
      borderRadius: '12px', textDecoration: 'none', transition: 'all 0.25s',
    }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >{children}</a>
  );
}
