'use client';
import { useState, useEffect } from 'react';
import { useBreakpoint } from '../hooks/useBreakpoint';

const THEMES = {
  teal: {
    label: 'Teal / Pink',
    dot: '#10E8D0',
    next: 'yellow',
  },
  yellow: {
    label: 'Yellow / Orange',
    dot: '#FFE500',
    next: 'teal',
  },
};

export default function ThemeToggle() {
  const [theme, setTheme] = useState('teal');
  const { isMobile } = useBreakpoint();

  useEffect(() => {
    const saved = localStorage.getItem('dev-theme') || 'teal';
    setTheme(saved);
    document.documentElement.setAttribute('data-theme', saved === 'teal' ? '' : saved);
  }, []);

  const toggle = () => {
    const next = THEMES[theme].next;
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next === 'teal' ? '' : next);
    localStorage.setItem('dev-theme', next);
  };

  const current = THEMES[theme];
  const nextTheme = THEMES[current.next];

  if (isMobile) {
    // Below footer — inline, centered
    return (
      <div style={{
        background: 'var(--bg2)',
        borderTop: '1px solid var(--border)',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
      }}>
        <span style={{
          fontFamily: 'var(--mono)',
          fontSize: '9px',
          letterSpacing: '1.5px',
          color: 'rgba(255,255,255,0.25)',
          textTransform: 'uppercase',
        }}>
          DEV · THEME
        </span>
        <button
          onClick={toggle}
          title={`Switch to ${nextTheme.label}`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(10,10,20,0.85)',
            border: `1px solid ${current.dot}33`,
            borderRadius: '10px',
            padding: '10px 16px',
            cursor: 'pointer',
            boxShadow: `0 2px 16px rgba(0,0,0,0.4), 0 0 0 1px ${current.dot}22`,
            transition: 'all 0.25s ease',
          }}
        >
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <span style={{
              width: '10px', height: '10px', borderRadius: '50%',
              background: current.dot, flexShrink: 0,
              boxShadow: `0 0 8px ${current.dot}99`,
            }} />
            <span style={{
              fontFamily: 'var(--mono)', fontSize: '11px', fontWeight: 600,
              color: current.dot, letterSpacing: '0.3px',
            }}>
              {current.label}
            </span>
          </span>

          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ opacity: 0.4 }}>
            <path d="M2 6h8M6 2l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', opacity: 0.45 }}>
            <span style={{
              width: '10px', height: '10px', borderRadius: '50%',
              background: nextTheme.dot, flexShrink: 0,
            }} />
            <span style={{
              fontFamily: 'var(--mono)', fontSize: '11px', fontWeight: 500,
              color: 'rgba(255,255,255,0.5)', letterSpacing: '0.3px',
            }}>
              {nextTheme.label}
            </span>
          </span>
        </button>
      </div>
    );
  }

  // Desktop — fixed bottom-right
  return (
    <div style={{
      position: 'fixed',
      bottom: '28px',
      right: '28px',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: '6px',
    }}>
      <span style={{
        fontFamily: 'var(--mono)',
        fontSize: '9px',
        letterSpacing: '1.5px',
        color: 'rgba(255,255,255,0.25)',
        textTransform: 'uppercase',
        paddingRight: '4px',
      }}>
        DEV · THEME
      </span>

      <button
        onClick={toggle}
        title={`Switch to ${nextTheme.label}`}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          background: 'rgba(10,10,20,0.85)',
          backdropFilter: 'blur(12px)',
          border: `1px solid ${current.dot}33`,
          borderRadius: '10px',
          padding: '9px 14px',
          cursor: 'pointer',
          boxShadow: `0 4px 24px rgba(0,0,0,0.5), 0 0 0 1px ${current.dot}22`,
          transition: 'all 0.25s ease',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
        onMouseLeave={e => e.currentTarget.style.transform = ''}
      >
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          <span style={{
            width: '10px', height: '10px', borderRadius: '50%',
            background: current.dot, flexShrink: 0,
            boxShadow: `0 0 8px ${current.dot}99`,
          }} />
          <span style={{
            fontFamily: 'var(--mono)', fontSize: '11px', fontWeight: 600,
            color: current.dot, letterSpacing: '0.3px',
          }}>
            {current.label}
          </span>
        </span>

        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ opacity: 0.4 }}>
          <path d="M2 6h8M6 2l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', opacity: 0.45 }}>
          <span style={{
            width: '10px', height: '10px', borderRadius: '50%',
            background: nextTheme.dot, flexShrink: 0,
          }} />
          <span style={{
            fontFamily: 'var(--mono)', fontSize: '11px', fontWeight: 500,
            color: 'rgba(255,255,255,0.5)', letterSpacing: '0.3px',
          }}>
            {nextTheme.label}
          </span>
        </span>
      </button>
    </div>
  );
}
