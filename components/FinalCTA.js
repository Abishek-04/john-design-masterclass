'use client';
import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { useBreakpoint } from '../hooks/useBreakpoint';

export default function FinalCTA() {
  const [hov, setHov] = useState(false);
  const { isMobile } = useBreakpoint();

  return (
    <section style={{ textAlign: 'center', padding: isMobile ? '60px 20px' : '100px 40px', maxWidth: '700px', margin: '0 auto', position: 'relative' }}>
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '500px', height: '500px', pointerEvents: 'none',
        background: 'radial-gradient(circle, rgba(254,203,4,0.06), transparent 60%)',
      }} />

      <ScrollReveal>
        <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', fontWeight: 700, letterSpacing: '3px', color: 'var(--cyan)', textTransform: 'uppercase', marginBottom: '20px' }}>DON'T MISS THE FOUNDING BATCH</div>

        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '16px', marginBottom: '8px', flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'var(--mono)', fontSize: isMobile ? '22px' : '28px', fontWeight: 700, color: 'var(--white-30)', textDecoration: 'line-through', textDecorationColor: 'var(--red)', textDecorationThickness: '3px', letterSpacing: '-0.5px' }}>₹9,999</span>
          <span style={{ fontFamily: 'var(--mono)', fontSize: 'clamp(48px, 14vw, 72px)', fontWeight: 700, color: 'var(--gold)', lineHeight: 1, letterSpacing: '-3px' }}>₹999</span>
        </div>

        <div style={{ fontSize: '15px', color: 'var(--red)', fontWeight: 700, marginBottom: '32px', animation: 'pulse 2s ease infinite' }}>
          🔥 Only 47 seats remaining — Batch closes soon
        </div>

        <a
          href="#"
          onMouseEnter={() => setHov(true)}
          onMouseLeave={() => setHov(false)}
          style={{
            display: 'inline-block',
            padding: isMobile ? '16px 40px' : '20px 64px',
            background: 'var(--gold)', color: '#000',
            fontSize: isMobile ? '16px' : '18px', fontWeight: 800, borderRadius: '14px',
            textDecoration: 'none', transition: 'all 0.25s',
            letterSpacing: '0.5px', marginBottom: '16px',
            transform: hov ? 'translateY(-3px)' : '',
            boxShadow: hov ? '0 12px 40px rgba(254,203,4,0.35)' : '',
            width: isMobile ? '100%' : 'auto',
            boxSizing: 'border-box',
          }}
        >
          ENROLL NOW — ₹999 →
        </a>

        <div style={{ fontSize: '13px', color: 'var(--white-30)' }}>
          Secure payment · Instant batch group access · Lifetime course access
        </div>
      </ScrollReveal>
    </section>
  );
}
