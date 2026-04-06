'use client';
import { useState, useRef } from 'react';
import ScrollReveal from './ScrollReveal';
import { useBreakpoint } from '../hooks/useBreakpoint';
import { Lightbulb, TrendingUp, Zap, Layers, CheckCircle, Briefcase, Eye, Compass } from './Icons';

const items = [
  { Icon: Lightbulb,   title: 'Think Clearly',       desc: 'No more guessing. Every decision is intentional. The brief decides — not taste.' },
  { Icon: TrendingUp,  title: 'Start Confidently',    desc: 'Blank screen fear eliminated. A 15-minute brief removes it permanently.' },
  { Icon: Zap,         title: 'Make Decisions',       desc: 'Fast, clear choices — even under client pressure. The brief is the answer.' },
  { Icon: Layers,      title: 'Use Tools Correctly',  desc: 'Figma, Photoshop, Illustrator — each with purpose. Not interchangeably.' },
  { Icon: CheckCircle, title: 'Finish Work',          desc: 'Projects get completed — not abandoned. A finished bad design teaches more than a perfect unfinished one.' },
  { Icon: Briefcase,   title: 'Build Real Work',      desc: 'Complete brand system from scratch. Not exercises — real portfolio deliverables.' },
  { Icon: Eye,         title: "Designer's Eye",       desc: 'Self-critique your own work. Spot weak hierarchy, bad spacing, broken alignment.' },
  { Icon: Compass,     title: 'Stay Independent',     desc: 'Self-directed. Never fully stuck. AI as a tool — not a replacement for thinking.' },
];

export default function Transformation() {
  const { isMobile, isTablet } = useBreakpoint();
  const cols = isMobile ? 'repeat(2, 1fr)' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)';

  return (
    <section style={{ maxWidth: '1100px', margin: '0 auto', padding: isMobile ? '52px 20px' : '80px 40px' }}>
      <ScrollReveal>
        <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', fontWeight: 700, letterSpacing: '3px', color: 'var(--cyan)', textTransform: 'uppercase', marginBottom: '10px' }}>AFTER 4 WEEKS</div>
        <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 400, lineHeight: 1.15, marginBottom: '16px' }}>
          What you'll become by the <em style={{ fontStyle: 'italic', color: 'var(--gold)' }} className="gold-underline">end of this course</em>
        </h2>
        <p style={{ fontSize: '16px', color: 'var(--white-50)', maxWidth: '560px', lineHeight: 1.7, marginBottom: '40px' }}>
          Not promises — outcomes. Every single one is built into the course structure.
        </p>
      </ScrollReveal>

      <div style={{ display: 'grid', gridTemplateColumns: cols, gap: isMobile ? '10px' : '14px' }}>
        {items.map((item, i) => (
          <ScrollReveal key={i} className="reveal" delay={Math.floor(i / 4) * 60 + (i % 4) * 60}>
            <TransformCard icon={item.Icon} title={item.title} desc={item.desc} isMobile={isMobile} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

function TransformCard({ icon: Icon, title, desc, isMobile }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hov, setHov] = useState(false);
  const ref = useRef(null);

  const onMove = (e) => {
    if (isMobile) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const rx = ((e.clientY - cy) / (rect.height / 2)) * -6;
    const ry = ((e.clientX - cx) / (rect.width / 2)) * 6;
    setTilt({ x: rx, y: ry });
  };

  const onLeave = () => {
    setHov(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={onLeave}
      onMouseMove={onMove}
      style={{
        background: 'var(--card)',
        border: `1px solid ${hov ? 'var(--border-accent)' : 'var(--border)'}`,
        borderRadius: '14px',
        padding: isMobile ? '20px 16px' : '28px 22px',
        textAlign: 'center',
        transform: hov
          ? `perspective(600px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-4px)`
          : 'perspective(600px) rotateX(0deg) rotateY(0deg)',
        boxShadow: hov ? '0 16px 40px rgba(0,0,0,0.35), 0 0 0 1px rgba(254,203,4,0.08)' : '',
        transition: hov ? 'box-shadow 0.2s, border-color 0.2s' : 'all 0.4s ease',
        willChange: 'transform',
      }}
    >
      <div style={{
        width: '38px', height: '38px', borderRadius: '10px',
        background: 'var(--white-05)', display: 'flex',
        alignItems: 'center', justifyContent: 'center',
        marginBottom: '12px', color: 'var(--gold)',
        transition: 'background 0.2s', margin: '0 auto 12px',
        ...(hov ? { background: 'var(--gold-dim)' } : {}),
      }}>
        <Icon size={16} />
      </div>
      <h4 style={{ fontSize: isMobile ? '13px' : '15px', fontWeight: 700, marginBottom: '6px' }}>{title}</h4>
      <p style={{ fontSize: isMobile ? '11px' : '12px', color: 'var(--white-50)', lineHeight: 1.6 }}>{desc}</p>
    </div>
  );
}
