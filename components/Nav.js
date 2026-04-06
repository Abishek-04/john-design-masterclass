'use client';
import { useBreakpoint } from '../hooks/useBreakpoint';

export default function Nav() {
  const { isMobile } = useBreakpoint();

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: isMobile ? '16px 20px' : '20px 40px',
      position: 'relative',
      zIndex: 10,
    }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}>

        {/* Classory — the platform */}
        <a href="#" style={{ textDecoration: 'none', display: 'block', flexShrink: 0 }}>
          <img src="/cl_light.png" alt="Classory" style={{ height: isMobile ? '20px' : '24px', width: 'auto', display: 'block' }} />
        </a>

        {/* Vertical rule divider */}
        <span style={{
          display: 'block', width: '1px', height: '24px',
          background: 'var(--border-accent)', flexShrink: 0,
        }} />

        {/* Instructor identity */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
          <img
            src="/john.jpg"
            alt="Johnson"
            style={{
              width: '28px', height: '28px',
              borderRadius: '50%',
              objectFit: 'cover',
              objectPosition: 'top',
              border: '2px solid var(--border-accent)',
              flexShrink: 0,
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', lineHeight: 1 }}>
            <span style={{
              fontFamily: 'var(--sans)',
              fontSize: '13px',
              fontWeight: 600,
              color: 'var(--white)',
              letterSpacing: '0.1px',
            }}>
              Johnson
            </span>
            {!isMobile && (
              <span style={{
                fontFamily: 'var(--mono)',
                fontSize: '10px',
                fontWeight: 400,
                color: 'var(--white-40)',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
              }}>
                Graphic Design
              </span>
            )}
          </div>
        </div>

      </div>
      <a href="#enroll" style={{
        background: 'var(--gold)',
        color: '#000',
        fontWeight: 700,
        fontSize: isMobile ? '12px' : '13px',
        padding: isMobile ? '8px 14px' : '10px 24px',
        borderRadius: '8px',
        border: 'none',
        textDecoration: 'none',
        transition: 'all 0.2s',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
      }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(254,203,4,0.3)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
      >
        {isMobile ? '₹999 →' : 'Enroll Now — ₹999'}
      </a>
    </nav>
  );
}
