'use client';
import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { Star } from './Icons';
import { useBreakpoint } from '../hooks/useBreakpoint';

const testimonials = [
  { text: '"Tamil-la design course irukku-nu nambave illa. Thinking first approach was mind-blowing."', name: '— Founding Batch Student', role: 'Placeholder for Batch 1 testimonial' },
  { text: '"I used to open Figma and stare at the screen for 30 minutes. After Phase 2, I start designing in under 10."', name: '— Founding Batch Student', role: 'Placeholder for Batch 1 testimonial' },
  { text: '"The Comorin Travel project alone is worth more than the course price. Real client work, real portfolio."', name: '— Founding Batch Student', role: 'Placeholder for Batch 1 testimonial' },
];

export default function SocialProof() {
  const { isMobile, isTablet } = useBreakpoint();
  const cols = isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)';

  return (
    <div style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: isMobile ? '52px 20px' : '80px 40px' }}>
        <ScrollReveal>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', fontWeight: 700, letterSpacing: '3px', color: 'var(--cyan)', textTransform: 'uppercase', marginBottom: '10px' }}>FOUNDING BATCH</div>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 400, lineHeight: 1.15, marginBottom: '16px' }}>
            Taught on Classory — an <em style={{ fontStyle: 'italic', color: 'var(--gold)' }} className="gold-underline">AI-powered</em> learning platform
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--white-50)', maxWidth: '560px', lineHeight: 1.7, marginBottom: '40px' }}>
            Not just videos. Classory gives you AI-assisted learning, progress tracking, and structured module unlocks.
          </p>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: cols, gap: '16px' }}>
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} className="reveal" delay={i * 100}>
              <TestimonialCard t={t} />
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}

function TestimonialCard({ t }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: 'var(--card)',
        border: `1px solid ${hov ? 'rgba(254,203,4,0.3)' : 'var(--border)'}`,
        borderRadius: '14px', padding: '24px',
        boxShadow: hov ? '0 0 28px rgba(254,203,4,0.08)' : '',
        transform: hov ? 'translateY(-3px)' : '',
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{ display: 'flex', gap: '3px', marginBottom: '14px' }}>
        {[0,1,2,3,4].map(i => <Star key={i} size={14} color="var(--gold)" filled />)}
      </div>
      <p style={{ fontSize: '14px', color: 'var(--white-70)', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '16px' }}>{t.text}</p>
      <div style={{ fontSize: '13px', fontWeight: 700 }}>{t.name}</div>
      <div style={{ fontSize: '11px', color: 'var(--white-30)' }}>{t.role}</div>
    </div>
  );
}
