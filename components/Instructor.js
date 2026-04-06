'use client';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import { useBreakpoint } from '../hooks/useBreakpoint';

const stats = [
  { val: '26.9K+', key: 'Followers' },
  { val: '38+',    key: 'Posts' },
  { val: '100+',   key: 'Brands Built' },
];

export default function Instructor() {
  const { isMobile } = useBreakpoint();
  return (
    <section style={{ maxWidth: '1100px', margin: '0 auto', padding: isMobile ? '52px 20px' : '80px 40px' }}>
      <ScrollReveal className="reveal-scale">
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '260px 1fr',
          gap: isMobile ? '28px' : '48px',
          alignItems: isMobile ? 'center' : 'center',
          background: 'var(--card)', border: '1px solid var(--border)',
          borderRadius: '20px', padding: isMobile ? '28px 24px' : '48px',
          position: 'relative', overflow: 'hidden',
        }}>
          {/* BG glow */}
          <div style={{
            position: 'absolute', top: 0, right: 0,
            width: '400px', height: '400px', pointerEvents: 'none',
            background: 'radial-gradient(circle, rgba(254,203,4,0.06) 0%, transparent 65%)',
          }} />

          {/* Photo */}
          <div style={{
            position: 'relative',
            animation: 'float 5s ease-in-out infinite',
            display: 'flex', justifyContent: isMobile ? 'center' : 'flex-start',
          }}>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <Image
                src="/john.jpg"
                alt="Johnson — Graphic Designer"
                width={isMobile ? 180 : 260}
                height={isMobile ? 180 : 260}
                style={{ borderRadius: '16px', objectFit: 'cover', border: '2px solid var(--border-accent)', display: 'block' }}
                priority
              />
              {/* Floating badge */}
              <div style={{
                position: 'absolute', bottom: '12px', left: '50%',
                transform: 'translateX(-50%)',
                background: 'var(--gold)', color: '#000',
                fontFamily: 'var(--mono)', fontSize: '10px', fontWeight: 700,
                letterSpacing: '1.5px', padding: '6px 14px', borderRadius: '20px',
                whiteSpace: 'nowrap',
              }}>GRAPHIC DESIGNER</div>
            </div>
          </div>

          {/* Info */}
          <div style={{ textAlign: isMobile ? 'center' : 'left' }}>
            <div style={{
              fontFamily: 'var(--mono)', fontSize: '11px', fontWeight: 700,
              letterSpacing: '3px', color: 'var(--cyan)',
              textTransform: 'uppercase', marginBottom: '8px',
            }}>YOUR INSTRUCTOR</div>

            <h2 style={{
              fontFamily: 'var(--serif)', fontSize: 'clamp(26px, 3.5vw, 38px)',
              fontWeight: 400, marginBottom: '4px',
            }}>
              Johnson{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--gold)' }} className="gold-underline">at Incrix</em>
            </h2>

            <p style={{ fontSize: '14px', color: 'var(--white-50)', marginBottom: '20px' }}>
              Graphic Designer · 3D Artist · Package &amp; Logo Design Expert
            </p>

            <p style={{ fontSize: '15px', color: 'var(--white-70)', lineHeight: 1.75, marginBottom: '24px' }}>
              Building brands at @teamincrix. With 26.9K+ followers watching his design process daily, Johnson doesn't just teach theory — he builds real brands for real companies. This course is his complete thinking system, distilled into 8 phases.
            </p>

            <div style={{ display: 'flex', gap: '28px', marginBottom: '24px', flexWrap: 'wrap', justifyContent: isMobile ? 'center' : 'flex-start' }}>
              {stats.map((s, i) => (
                <div key={i} style={{ textAlign: isMobile ? 'center' : 'left' }}>
                  <div style={{
                    fontFamily: 'var(--mono)', fontSize: 'clamp(18px, 4vw, 24px)',
                    fontWeight: 700, letterSpacing: '-0.5px',
                    color: 'var(--white)', lineHeight: 1, marginBottom: '2px',
                  }}>
                    {s.val.replace(/[+K]/g, '')}
                    <span style={{ color: 'var(--gold)' }}>{s.val.match(/[+K]+$/)?.[0] || ''}</span>
                  </div>
                  <div style={{
                    fontFamily: 'var(--mono)', fontSize: '10px',
                    color: 'var(--white-30)', letterSpacing: '1.5px', textTransform: 'uppercase',
                  }}>{s.key}</div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: isMobile ? 'center' : 'flex-start' }}>
              <a
                href="https://www.instagram.com/john_at_incrix/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '10px 20px', background: 'var(--white-05)',
                  border: '1px solid var(--border)', borderRadius: '10px',
                  color: 'var(--white-70)', textDecoration: 'none',
                  fontSize: '14px', fontWeight: 600, transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-accent)'; e.currentTarget.style.color = 'var(--white)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--white-70)'; }}
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                @john_at_incrix
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
