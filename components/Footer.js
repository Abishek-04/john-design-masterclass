'use client';
import { useBreakpoint } from '../hooks/useBreakpoint';

const links = [
  { label: 'Course Overview',  href: '#course-preview' },
  { label: 'Curriculum',       href: '#curriculum'     },
  { label: 'Your Instructor',  href: '#instructor'     },
  { label: 'Enroll Now',       href: '#enroll'         },
];

export default function Footer() {
  const { isMobile } = useBreakpoint();

  return (
    <footer style={{
      background: 'var(--bg2)',
      borderTop: '1px solid var(--border)',
    }}>
      {/* Main grid */}
      <div style={{
        maxWidth: '1100px', margin: '0 auto',
        padding: isMobile ? '40px 20px 28px' : '60px 40px 40px',
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr',
        gap: isMobile ? '32px' : '48px',
      }}>

        {/* Brand */}
        <div>
          <a href="#" style={{ textDecoration: 'none', display: 'inline-block', marginBottom: '10px' }}>
            <img src="/cl_light.png" alt="Classory" style={{ height: '32px', width: 'auto', display: 'block' }} />
          </a>
          <p style={{ fontSize: '13px', color: 'var(--white-30)', lineHeight: 1.7, maxWidth: isMobile ? '100%' : '220px', marginTop: '10px' }}>
            Structured learning platform. Graphic Design Masterclass in Tamil — taught by Johnson at Incrix.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '10px', fontWeight: 700, letterSpacing: '2.5px', color: 'var(--white-30)', textTransform: 'uppercase', marginBottom: '16px' }}>
            COURSE
          </div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: isMobile ? 'row' : 'column', flexWrap: 'wrap', gap: isMobile ? '10px 20px' : '12px' }}>
            {links.map((l, i) => (
              <li key={i}>
                <a href={l.href} style={{
                  fontSize: '14px', color: 'var(--white-50)',
                  textDecoration: 'none', transition: 'color 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--white)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--white-50)'}
                >{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '10px', fontWeight: 700, letterSpacing: '2.5px', color: 'var(--white-30)', textTransform: 'uppercase', marginBottom: '16px' }}>
            CONNECT
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a
              href="https://www.instagram.com/john_at_incrix/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                fontSize: '14px', color: 'var(--white-50)', textDecoration: 'none', transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--white)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--white-50)'}
            >
              <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              @john_at_incrix
            </a>
            <a
              href="https://www.instagram.com/teamincrix/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                fontSize: '14px', color: 'var(--white-50)', textDecoration: 'none', transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--white)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--white-50)'}
            >
              <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              @teamincrix
            </a>
            <a
              href="https://classory.in"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                fontSize: '14px', color: 'var(--white-50)', textDecoration: 'none', transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--cyan)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--white-50)'}
            >
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              classory.in
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        maxWidth: '1100px', margin: '0 auto',
        padding: isMobile ? '16px 20px' : '20px 40px',
        borderTop: '1px solid var(--border)',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'center',
        gap: '10px',
      }}>
        <span style={{ fontSize: '12px', color: 'var(--white-30)' }}>
          © 2025 Classory · Incrix Techlutions LLP · Coimbatore, India
        </span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', fontSize: '12px', color: 'var(--white-30)' }}>
          Powered by
          <img src="/cl_light.png" alt="Classory" style={{ height: '16px', width: 'auto', opacity: 0.7 }} />
        </span>
      </div>
    </footer>
  );
}
