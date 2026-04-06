'use client';
import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { Lock } from './Icons';
import { useBreakpoint } from '../hooks/useBreakpoint';

const includes = [
  '8 structured phases — zero to portfolio-ready',
  '54+ videos · 20+ hours of content',
  'Design Brief System — blank screen fear gone',
  'Figma, Photoshop & Illustrator mastered',
  'Live brand project — Comorin Travel identity',
  'Founding batch community + direct access to Johnson',
  'Lifetime access to all course content',
];

export default function Enrollment() {
  const [slots] = useState(47);
  const { isMobile } = useBreakpoint();

  return (
    <section id="enroll" style={{ maxWidth: '1100px', margin: '0 auto', padding: isMobile ? '52px 20px' : '80px 40px', textAlign: 'center' }}>
      <ScrollReveal>
        <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', fontWeight: 700, letterSpacing: '3px', color: 'var(--cyan)', textTransform: 'uppercase', marginBottom: '10px' }}>
          JOIN THE FOUNDING BATCH
        </div>
        <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 400, lineHeight: 1.15, marginBottom: '16px' }}>
          Start your design journey <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>today</em>
        </h2>
        <p style={{ fontSize: '16px', color: 'var(--white-50)', maxWidth: '560px', margin: '0 auto 40px', lineHeight: 1.7 }}>
          75 seats. One batch. Founding price that won't come back. Everything you need to go from zero to portfolio-ready designer.
        </p>
      </ScrollReveal>

      <ScrollReveal className="reveal-scale">
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 340px',
          borderRadius: isMobile ? '16px' : '20px',
          overflow: 'hidden',
          border: '1px solid var(--border-accent)',
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'left',
        }}>

          {/* ── Left: what's included ── */}
          <div style={{ padding: isMobile ? '28px 24px' : '40px', background: 'var(--card)', position: 'relative' }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '10px', fontWeight: 700, letterSpacing: '2.5px', color: 'var(--white-30)', textTransform: 'uppercase', marginBottom: '20px' }}>
              EVERYTHING INCLUDED
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {includes.map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '14px', color: 'var(--white-70)', lineHeight: 1.5 }}>
                  <span style={{
                    width: '20px', height: '20px', borderRadius: '50%',
                    background: 'var(--green-dim)', color: 'var(--green)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '11px', flexShrink: 0, marginTop: '1px',
                  }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Bottom tag */}
            <div style={{
              marginTop: '24px', paddingTop: '18px',
              borderTop: '1px solid var(--border)',
              display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap',
            }}>
              <span style={{
                display: 'inline-block', background: 'var(--green-dim)', color: 'var(--green)',
                fontSize: '12px', fontWeight: 700, padding: '4px 12px', borderRadius: '5px',
              }}>
                SAVE ₹9,000
              </span>
              <span style={{ fontSize: '13px', color: 'var(--white-30)' }}>Founding batch price only</span>
            </div>
          </div>

          {/* ── Right: pricing + CTA ── */}
          <div style={{
            padding: isMobile ? '28px 24px' : '40px 32px',
            background: 'var(--bg2)',
            borderLeft: isMobile ? 'none' : '1px solid var(--border)',
            borderTop: isMobile ? '1px solid var(--border)' : 'none',
            display: 'flex', flexDirection: 'column',
            justifyContent: 'center', gap: '18px',
          }}>
            {/* Price */}
            <div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: '10px', fontWeight: 700, letterSpacing: '2px', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '10px' }}>
                FOUNDING PRICE
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '4px' }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '18px', fontWeight: 700, color: 'var(--white-30)', textDecoration: 'line-through', textDecorationColor: 'var(--red)', letterSpacing: '-0.5px' }}>₹9,999</span>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 'clamp(36px, 10vw, 56px)', fontWeight: 700, color: 'var(--gold)', lineHeight: 1, letterSpacing: '-2px' }}>
                  ₹999
                </span>
              </div>
              <div style={{ fontSize: '13px', color: 'var(--white-30)' }}>one-time · lifetime access</div>
            </div>

            {/* Seats */}
            <div style={{
              background: 'rgba(255,71,87,0.08)', border: '1px solid rgba(255,71,87,0.18)',
              borderRadius: '10px', padding: '12px 16px',
              display: 'flex', alignItems: 'center', gap: '10px',
            }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--red)', animation: 'pulse 1.5s ease infinite', flexShrink: 0, display: 'inline-block' }} />
              <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--red)' }}>
                {slots} seats left
                <span style={{ color: 'var(--white-50)', fontWeight: 400 }}> of 75</span>
              </span>
            </div>

            <EnrollButton />

            <div style={{ fontSize: '11px', color: 'var(--white-30)', textAlign: 'center', lineHeight: 1.6 }}>
              <Lock size={12} color="var(--white-30)" style={{ display: 'inline', verticalAlign: 'middle', marginRight: '5px', marginBottom: '1px' }} />
            Secure via UPI / Card<br />Instant access on enrollment
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

function EnrollButton() {
  const [hov, setHov] = useState(false);
  return (
    <a
      href="#"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'block', width: '100%', padding: '16px',
        background: 'var(--gold)', color: '#000',
        fontFamily: 'var(--sans)', fontSize: '15px', fontWeight: 800,
        borderRadius: '12px', textAlign: 'center', textDecoration: 'none',
        letterSpacing: '0.5px', transition: 'all 0.25s',
        transform: hov ? 'translateY(-2px)' : '',
        boxShadow: hov ? '0 8px 28px rgba(254,203,4,0.35)' : '',
      }}
    >
      ENROLL NOW — ₹999 →
    </a>
  );
}
