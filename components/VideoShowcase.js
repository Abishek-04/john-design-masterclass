'use client';
import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { useBreakpoint } from '../hooks/useBreakpoint';
import { Lightbulb, Layers, Briefcase } from './Icons';

const cards = [
  { Icon: Lightbulb, bg: 'var(--gold-dim)',        title: 'Thinking First, Tools Last',       desc: "You won't touch Figma until Phase 3. First you learn to think and decide like a designer.", dur: 'Phases 0-2 · 5 hrs' },
  { Icon: Layers,    bg: 'var(--cyan-dim)',         title: 'Figma, Photoshop & Illustrator',   desc: 'Master three industry-standard tools — each with a clear purpose. Not interchangeably.',    dur: 'Phases 3-5 · 8 hrs' },
  { Icon: Briefcase, bg: 'rgba(180,74,255,0.12)',   title: 'Real Client Portfolio Project',    desc: 'Full brand system for Comorin Travel — logo, posters, banners, packaging. Portfolio-ready.', dur: 'Phases 6-7 · 7 hrs' },
];

export default function VideoShowcase() {
  const [playing, setPlaying] = useState(false);
  const { isMobile } = useBreakpoint();

  return (
    <section id="course-preview" style={{ maxWidth: '1100px', margin: '0 auto', padding: isMobile ? '0 20px 52px' : '0 40px 80px' }}>

      <ScrollReveal className="reveal-scale">
        <div
          onClick={() => setPlaying(true)}
          style={{
            position: 'relative', borderRadius: isMobile ? '14px' : '20px', overflow: 'hidden',
            border: '1px solid var(--border)', background: 'var(--card)',
            aspectRatio: '16/9', cursor: playing ? 'default' : 'pointer',
            transition: 'border-color 0.3s, box-shadow 0.3s',
            boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
          }}
          onMouseEnter={e => { if (!playing) { e.currentTarget.style.borderColor = 'var(--border-accent)'; e.currentTarget.style.boxShadow = '0 24px 80px rgba(0,0,0,0.5), 0 0 0 1px var(--border-accent)'; }}}
          onMouseLeave={e => { if (!playing) { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.4)'; }}}
        >
          {playing ? (
            <iframe
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
            />
          ) : (
            <div style={{
              position: 'absolute', inset: 0, display: 'flex',
              flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              background: 'linear-gradient(135deg, var(--bg2) 0%, var(--card) 50%, rgba(254,203,4,0.03) 100%)',
            }}>
              <div style={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                fontFamily: 'var(--serif)', fontSize: 'clamp(60px, 12vw, 160px)',
                fontWeight: 400, color: 'rgba(254,203,4,0.03)',
                whiteSpace: 'nowrap', userSelect: 'none', fontStyle: 'italic',
                letterSpacing: '-4px',
              }}>Design</div>

              <div style={{
                width: isMobile ? '60px' : '80px', height: isMobile ? '60px' : '80px',
                borderRadius: '50%',
                background: 'var(--gold)', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                marginBottom: '16px',
                animation: 'play-pulse 2.5s ease infinite',
                transition: 'transform 0.2s',
                position: 'relative', zIndex: 1,
              }}>
                <svg viewBox="0 0 24 24" width={isMobile ? '22' : '28'} height={isMobile ? '22' : '28'} fill="#000" style={{ marginLeft: '4px' }}>
                  <polygon points="8,5 20,12 8,19" />
                </svg>
              </div>
              <div style={{
                fontFamily: 'var(--mono)', fontSize: isMobile ? '11px' : '12px',
                color: 'var(--white-50)', letterSpacing: '2px',
                textTransform: 'uppercase', position: 'relative', zIndex: 1,
              }}>Watch Course Preview</div>
            </div>
          )}
        </div>
      </ScrollReveal>

      {/* 3 cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
        gap: '14px', marginTop: '20px',
      }} className="stagger">
        {cards.map((c, i) => (
          <ScrollReveal key={i} className="reveal" delay={i * 80}>
            <VideoCard Icon={c.Icon} bg={c.bg} title={c.title} desc={c.desc} dur={c.dur} isMobile={isMobile} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

function VideoCard({ Icon, bg, title, desc, dur, isMobile }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: 'var(--card)', border: `1px solid ${hov ? 'var(--border-accent)' : 'var(--border)'}`,
        borderRadius: '14px', padding: isMobile ? '18px 16px' : '24px',
        display: isMobile ? 'flex' : 'block', gap: isMobile ? '14px' : undefined,
        alignItems: isMobile ? 'flex-start' : undefined,
        transform: hov ? 'translateY(-4px)' : '',
        transition: 'all 0.25s', cursor: 'default',
      }}
    >
      <div style={{
        width: '40px', height: '40px', borderRadius: '10px', flexShrink: 0,
        background: bg, display: 'flex', alignItems: 'center',
        justifyContent: 'center', marginBottom: isMobile ? '0' : '14px', color: 'var(--white-70)',
      }}><Icon size={18} /></div>
      <div>
        <h4 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '6px' }}>{title}</h4>
        <p style={{ fontSize: '13px', color: 'var(--white-50)', lineHeight: 1.6 }}>{desc}</p>
        <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--white-30)', marginTop: '8px' }}>{dur}</div>
      </div>
    </div>
  );
}
