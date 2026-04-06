'use client';
import { useEffect, useState } from 'react';
import { Flame } from './Icons';

export default function UrgencyBar() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const end = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000);
    const tick = () => {
      const diff = end - Date.now();
      if (diff <= 0) { setTime('CLOSED'); return; }
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setTime(`${d}d ${h}h ${m}m ${s}s`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{
      backgroundImage: 'linear-gradient(90deg, var(--gold) 0%, var(--cyan) 50%, var(--gold) 100%)',
      backgroundSize: '200% 100%',
      animation: 'shimmer 3s ease infinite',
      padding: '10px 16px',
      textAlign: 'center',
      fontSize: '13px',
      fontWeight: 700,
      letterSpacing: '0.5px',
      color: '#fff',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      <Flame size={14} color="#fff" style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px', marginBottom: '2px' }} />
      <span style={{ display: 'inline' }}>
        <span className="urgency-full">FOUNDING BATCH — Limited to 75 Students Only. Batch Closes Soon! </span>
        <span className="urgency-short">75 Seats Only — Closes Soon! </span>
      </span>
      <span style={{
        fontFamily: 'var(--mono)',
        background: 'rgba(0,0,0,0.25)',
        padding: '2px 10px',
        borderRadius: '4px',
        marginLeft: '4px',
        fontSize: '11px',
        display: 'inline-block',
      }}>{time}</span>
    </div>
  );
}
