'use client';
import ScrollReveal from './ScrollReveal';
import { Lightbulb, Target, CheckSquare, Briefcase } from './Icons';
import { useBreakpoint } from '../hooks/useBreakpoint';

const points = [
  { Icon: Lightbulb,    bg: 'var(--gold-dim)',          color: 'var(--gold)',    title: 'Thinking First',         desc: "You won't touch Figma until Phase 3. First, you learn to think and decide like a designer." },
  { Icon: Target,       bg: 'var(--green-dim)',          color: 'var(--green)',   title: 'Tools Last',             desc: 'Photoshop & Illustrator come in Phase 5 — only after you know what to build and why.' },
  { Icon: CheckSquare,  bg: 'var(--cyan-dim)',           color: 'var(--cyan)',    title: 'Finishing Over Perfecting', desc: 'Every phase ends with something built. Not watched. Not understood in theory. Done.' },
  { Icon: Briefcase,    bg: 'rgba(180,74,255,0.12)',     color: 'var(--purple)',  title: 'Real Client Work',       desc: 'Phase 6 is a full brand system for a real company — portfolio-ready on Day 1.' },
];

export default function Philosophy() {
  const { isMobile } = useBreakpoint();
  return (
    <div style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div style={{
        maxWidth: '1100px', margin: '0 auto',
        padding: isMobile ? '52px 20px' : '80px 40px',
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: isMobile ? '36px' : '60px',
        alignItems: 'center',
      }}>
        <ScrollReveal className="reveal-left">
          <blockquote style={{
            fontFamily: 'var(--serif)', fontSize: 'clamp(20px, 3vw, 32px)',
            fontStyle: 'italic', lineHeight: 1.4, color: 'var(--white-90)',
          }}>
            "Never teach a fundamental before the student has a{' '}
            <span style={{ color: 'var(--gold)' }}>problem that requires it.</span>"
          </blockquote>
        </ScrollReveal>

        <ScrollReveal className="reveal-right">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {points.map((p, i) => (
              <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '8px',
                  background: p.bg, color: p.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}><p.Icon size={16} color={p.color} /></div>
                <div>
                  <h4 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '2px' }}>{p.title}</h4>
                  <p style={{ fontSize: '13px', color: 'var(--white-50)', lineHeight: 1.5 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
