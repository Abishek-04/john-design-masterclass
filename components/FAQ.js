'use client';
import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { useBreakpoint } from '../hooks/useBreakpoint';

const faqs = [
  { q: "Beginners-க்கு suit ஆகுமா?", a: "100%. This course is built for beginners. You don't need to know Photoshop, Figma, or anything. We start with thinking — not tools. If you can think, you can design." },
  { q: "Course fully Tamil-la dhan ah?", a: "Yes. Full course in Tamil. Technical terms will be in English (because that's how the industry works), but all teaching, explanation, and case studies are in Tamil." },
  { q: "Recorded course-ah? Live class-ah?", a: "Recorded — but in a batch format. You get weekly module unlocks, not everything at once. Plus a private batch group for doubts, and weekly rapid updates from me. It feels live, but you can learn at your own pace." },
  { q: "₹999 only for Batch 1? After that?", a: "Yes, ₹999 is the Founding Batch price only. Batch 2 will be ₹1,499+. Batch 3 even higher. This price won't come back. Ever." },
  { q: "Laptop/Computer venduma? Mobile-la panna mudiuma?", a: "Phases 0-2 and Phase 4 are pure thinking — you can watch on mobile. But for Figma, Photoshop, and Illustrator (Phases 3, 5, 6, 7), you'll need a laptop or desktop. A basic one will do." },
  { q: "Lifetime access irukka?", a: "Yes. Once you enroll, you get lifetime access to all course content + all future updates. Your Founding Batch badge stays forever too." },
  { q: "Certificate kidaikuma?", a: "Founding Batch doesn't include a certificate (that's a Premium tier perk in later batches). But you'll have something better — a complete portfolio of real work." },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);
  const { isMobile } = useBreakpoint();

  return (
    <section style={{ maxWidth: '1100px', margin: '0 auto', padding: isMobile ? '52px 20px' : '80px 40px' }}>
      <ScrollReveal>
        <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', fontWeight: 700, letterSpacing: '3px', color: 'var(--cyan)', textTransform: 'uppercase', marginBottom: '10px' }}>COMMON QUESTIONS</div>
        <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 400, lineHeight: 1.15, marginBottom: '36px' }}>
          Got questions? <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Here's the truth.</em>
        </h2>
      </ScrollReveal>

      <div style={{ maxWidth: '700px' }}>
        {faqs.map((f, i) => (
          <ScrollReveal key={i} delay={i * 30}>
            <div style={{ borderBottom: '1px solid var(--border)', padding: isMobile ? '18px 0' : '24px 0' }}>
              <div
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  fontSize: isMobile ? '15px' : '16px', fontWeight: 700, cursor: 'pointer',
                  display: 'flex', justifyContent: 'space-between',
                  alignItems: 'flex-start', gap: '16px', userSelect: 'none',
                }}
              >
                <span style={{ flex: 1 }}>{f.q}</span>
                <span style={{
                  color: 'var(--white-30)', transition: 'transform 0.3s',
                  transform: open === i ? 'rotate(180deg)' : '', flexShrink: 0,
                  fontSize: '14px', marginTop: '2px',
                }}>▾</span>
              </div>
              <div style={{
                maxHeight: open === i ? '400px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.35s ease',
                fontSize: '14px', color: 'var(--white-50)', lineHeight: 1.7,
              }}>
                <div style={{ paddingTop: '12px' }}>{f.a}</div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
