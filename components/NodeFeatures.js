'use client';
import { useEffect, useRef, useState } from 'react';

const NODES = [
  { icon: '🎯', title: 'Design Brief System',      desc: 'A 6-field brief before every project — blank screen fear eliminated permanently' },
  { icon: '🎬', title: '54 Videos · 20+ Hours',    desc: 'Structured phases. Every video ends with something built, not just watched' },
  { icon: '🏢', title: 'Live Brand Project',       desc: 'Full identity for Comorin Travel — a real portfolio piece, not an exercise' },
  { icon: '🛠', title: 'Figma · PS · Illustrator', desc: 'Each tool introduced only when the project demands it — in the right order' },
  { icon: '⚡', title: 'Founding Batch — 75 Seats', desc: 'Direct access to Johnson + a Tamil design community from Day 1' },
];

// SVG coordinate system
const SW = 880, SH = 490;
const AX = 118, AY = SH / 2;   // anchor center
const TRUNK_X = 290;             // vertical trunk x
const CARD_H = 80, CARD_W = 420;

// Card top-left positions — outer cards at shallower x, middle cards at deeper x
const CPOS = [
  { x: 328, y:  8  },
  { x: 372, y: 104 },
  { x: 372, y: 200 },
  { x: 372, y: 296 },
  { x: 328, y: 392 },
];

const BY = CPOS.map(c => c.y + CARD_H / 2); // branch y on trunk

export default function NodeFeatures() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); io.disconnect(); } },
      { threshold: 0.15 },
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 40px' }}>
      {/* heading */}
      <div
        className="reveal"
        style={{ marginBottom: '52px' }}
      >
        <div style={{
          fontFamily: 'var(--mono)', fontSize: '11px', fontWeight: 700,
          letterSpacing: '3px', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '10px',
        }}>WHAT'S INSIDE</div>
        <h2 style={{
          fontFamily: 'var(--serif)', fontSize: 'clamp(28px, 4.5vw, 44px)',
          fontWeight: 400, lineHeight: 1.15,
        }}>
          Everything packed into the{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--gold)' }} className="gold-underline">masterclass</em>
        </h2>
      </div>

      {/* ── Node diagram ───────────────────────────────────── */}
      <div
        ref={ref}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: `${SW}px`,
          height: `${SH}px`,
          margin: '0 auto',
        }}
      >
        {/* SVG connectors */}
        <svg
          viewBox={`0 0 ${SW} ${SH}`}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible' }}
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Anchor → trunk horizontal */}
          <line
            x1={AX + 56} y1={AY} x2={TRUNK_X} y2={AY}
            stroke="rgba(254,203,4,0.22)" strokeWidth="1"
            pathLength="1"
            style={{
              strokeDasharray: 1,
              strokeDashoffset: vis ? 0 : 1,
              transition: 'stroke-dashoffset 0.55s ease 0.15s',
            }}
          />

          {/* Trunk vertical */}
          <line
            x1={TRUNK_X} y1={BY[0]} x2={TRUNK_X} y2={BY[4]}
            stroke="rgba(254,203,4,0.14)" strokeWidth="1"
            pathLength="1"
            style={{
              strokeDasharray: 1,
              strokeDashoffset: vis ? 0 : 1,
              transition: 'stroke-dashoffset 0.7s ease 0.35s',
            }}
          />

          {/* Horizontal branches */}
          {CPOS.map((c, i) => (
            <line
              key={i}
              x1={TRUNK_X} y1={BY[i]}
              x2={c.x}     y2={BY[i]}
              stroke="rgba(254,203,4,0.22)" strokeWidth="1"
              pathLength="1"
              style={{
                strokeDasharray: 1,
                strokeDashoffset: vis ? 0 : 1,
                transition: `stroke-dashoffset 0.45s ease ${0.45 + i * 0.09}s`,
              }}
            />
          ))}

          {/* Branch dots */}
          {BY.map((y, i) => (
            <circle
              key={i}
              cx={TRUNK_X} cy={y} r={2.5}
              fill="rgba(254,203,4,0.45)"
              style={{
                opacity: vis ? 1 : 0,
                transition: `opacity 0.3s ease ${0.5 + i * 0.09}s`,
              }}
            />
          ))}

          {/* Anchor glow ring */}
          <circle
            cx={AX} cy={AY} r={52}
            fill="none"
            stroke="rgba(254,203,4,0.1)" strokeWidth="1"
            style={{
              opacity: vis ? 1 : 0,
              transition: 'opacity 0.5s ease 0.1s',
            }}
          />
        </svg>

        {/* ── Anchor node ── */}
        <div style={{
          position: 'absolute',
          left: AX - 46, top: AY - 46,
          width: 92, height: 92,
          borderRadius: '50%',
          background: 'var(--card)',
          border: '1px solid var(--border-accent)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: '4px',
          boxShadow: '0 0 48px rgba(254,203,4,0.1)',
          opacity: vis ? 1 : 0,
          transform: vis ? 'scale(1)' : 'scale(0.85)',
          transition: 'opacity 0.5s ease, transform 0.5s ease',
        }}>
          <div style={{
            fontFamily: 'var(--mono)', fontSize: '11px', fontWeight: 800,
            letterSpacing: '1.5px', color: 'var(--gold)',
          }}>CLASS</div>
          <div style={{
            fontFamily: 'var(--mono)', fontSize: '11px', fontWeight: 800,
            letterSpacing: '1.5px', color: 'var(--gold)',
          }}>ORY</div>
          <div style={{
            fontFamily: 'var(--mono)', fontSize: '8px', color: 'var(--white-30)',
            letterSpacing: '1px', textTransform: 'uppercase',
          }}>course</div>
        </div>

        {/* ── Feature cards ── */}
        {CPOS.map((c, i) => (
          <NodeCard
            key={i}
            node={NODES[i]}
            style={{
              position: 'absolute',
              left: c.x, top: c.y,
              width: CARD_W, height: CARD_H,
              opacity: vis ? 1 : 0,
              transform: vis ? 'translateX(0)' : 'translateX(18px)',
              transition: `opacity 0.5s ease ${0.55 + i * 0.1}s, transform 0.5s ease ${0.55 + i * 0.1}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
}

function NodeCard({ node, style }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        ...style,
        background: hov ? 'var(--card-hover)' : 'var(--card)',
        border: `1px solid ${hov ? 'rgba(254,203,4,0.28)' : 'var(--border)'}`,
        borderRadius: '14px',
        padding: '0 20px',
        display: 'flex', alignItems: 'center', gap: '14px',
        boxShadow: hov ? '0 4px 28px rgba(0,0,0,0.3), 0 0 0 1px rgba(254,203,4,0.07)' : '',
        transition: 'background 0.2s, border-color 0.2s, box-shadow 0.2s, transform 0.2s',
        transform: `${style.transform || ''} ${hov ? 'translateY(-2px)' : ''}`,
        cursor: 'default',
      }}
    >
      {/* Icon badge */}
      <div style={{
        width: 40, height: 40, borderRadius: '10px',
        background: hov ? 'rgba(254,203,4,0.15)' : 'var(--gold-dim)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '20px', flexShrink: 0,
        transition: 'background 0.2s',
      }}>{node.icon}</div>

      {/* Text */}
      <div style={{ minWidth: 0, flex: 1 }}>
        <div style={{
          fontSize: '14px', fontWeight: 700,
          color: 'var(--white)', marginBottom: '3px',
          whiteSpace: 'nowrap',
        }}>{node.title}</div>
        <div style={{
          fontSize: '12px', color: 'var(--white-50)', lineHeight: 1.45,
          overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis',
        }}>{node.desc}</div>
      </div>

      {/* Arrow */}
      <div style={{
        fontSize: '15px', flexShrink: 0, marginLeft: '8px',
        color: hov ? 'rgba(254,203,4,0.7)' : 'var(--white-10)',
        transition: 'color 0.2s, transform 0.2s',
        transform: hov ? 'translateX(3px)' : '',
      }}>→</div>
    </div>
  );
}
