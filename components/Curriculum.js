'use client';
import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { useBreakpoint } from '../hooks/useBreakpoint';

const phases = [
  { id: 'P0', color: '#8888cc', bg: 'rgba(100,100,200,0.15)', title: 'Course Orientation', meta: '4 videos · ~1 hr', videos: [
    { n: '01', t: 'What This Course Is / Is Not', d: 'Decision-making system vs tool tutorial.' },
    { n: '02', t: 'Why We Don\'t Start With Tools', d: 'Tools come last. Thinking comes first.' },
    { n: '03', t: 'How Designers Actually Grow', d: 'The Try → Get Stuck → Decide → Improve cycle.' },
    { n: '04', t: 'How to Use This Course', d: 'Building trust in the process.' },
  ], note: 'Outcome: Students trust the process and prepare mentally for a thinking-first course.' },
  { id: 'P1', color: 'var(--cyan)', bg: 'var(--cyan-dim)', title: 'Design Thinking Foundations', meta: '5 videos · ~2 hrs · Real case studies', videos: [
    { n: '01', t: 'Design = Decision Making', d: 'Case study: Painless.com billboard poster.' },
    { n: '02', t: 'Taste vs Skill', d: 'Nike Swoosh designed for ₹2,900.' },
    { n: '03', t: 'Good vs Pretty', d: 'Case study: Google vs Yahoo.' },
    { n: '04', t: 'Design Problem + What to Ignore', d: 'Lifebuoy Kumbh Mela roti stamp — Cannes Grand Prix.' },
    { n: '05', t: 'Procrastination + Confidence', d: 'Milton Glaser — I❤NY on a torn envelope in a taxi.' },
  ], note: 'Each video removes one wrong belief using a real-world case study. No tools. Pure thinking.' },
  { id: 'P2', color: 'var(--green)', bg: 'var(--green-dim)', title: 'Starting Framework', meta: '5 videos · ~2 hrs · Blank screen fear eliminated', videos: [
    { n: '01', t: 'Brief System + Audience Thinking', d: 'Client: Sankamithra Fireworks. 6-field brief system.' },
    { n: '02', t: 'One-Message Rule', d: 'Client: Fresh Squeeze Juice Shop.' },
    { n: '03', t: 'Reference System', d: "How McDonald's red/yellow was copied by the entire fast food industry." },
    { n: '04', t: 'Real Brief Practice', d: 'Sri Ram IAS Academy — 3 IAS, 7 IPS, 12 IFS.' },
    { n: '05', t: 'Block Thinking + Layout Sketching', d: 'Paper sketch only. No Figma yet.' },
  ], note: 'Every video ends with a physical output — written brief, sketched layout, or collected references.' },
  { id: 'P3', color: 'var(--purple)', bg: 'rgba(180,74,255,0.12)', title: 'Figma as a Thinking Tool', meta: '6 videos · ~1.5 hrs · Fresh Squeeze + Kannamma Bakery', videos: [
    { n: '01', t: 'Frames & Artboards', d: 'Frame = first design decision.' },
    { n: '02', t: 'Layout Blocks', d: 'Paper sketch becomes digital grey blocks.' },
    { n: '03', t: 'Text + Visual Hierarchy', d: '52pt headline, 24pt subheadline, 14pt body.' },
    { n: '04', t: 'Alignment + Spacing', d: '40px margin. 70px within zones. 100px between zones.' },
    { n: '05', t: 'Poster Practice', d: 'Full live build — Fresh Squeeze A4 poster.' },
    { n: '06', t: 'Social Post Practice', d: '1080×1080 square. Same brief, different constraint.' },
  ], note: 'Structure before styling. Grey blocks before color. Thinking before producing — always.' },
  { id: 'P4', color: 'var(--orange)', bg: 'rgba(255,107,43,0.12)', title: 'Design Survival + Finishing + Seeing', meta: '4 videos · ~1.5 hrs · Mindset & self-critique', videos: [
    { n: '01', t: 'The Mindset Rescue', d: 'Why beginners quit. Confidence trap. Imposter syndrome.' },
    { n: '02', t: 'The Finishing System', d: 'Ugly-first design logic. Designing in layers.' },
    { n: '03', t: 'The Consistency Engine', d: 'Learning vs performing. Consistency without motivation.' },
    { n: '04', t: "The Designer's Eye", d: 'How to look at designs properly. Self-critique checklist.' },
  ], note: "No design tools — thinking and reflection only. Building the designer's eye before the toolkit phase." },
  { id: 'P5', color: 'var(--red)', bg: 'rgba(255,71,87,0.1)', title: 'Photoshop + Illustrator', meta: '13 videos · ~3-4 hrs · PS: 9 videos + AI: 4 videos', videos: [
    { n: '01', t: 'PS: Interface & Raster Thinking', d: 'What raster means. When to use Photoshop vs Figma.' },
    { n: '02', t: 'PS: Canvas & Resolution', d: 'PPI, DPI, 72 vs 300. Print vs screen.' },
    { n: '03', t: 'PS: Selections & Masks', d: 'Isolating and extracting elements.' },
    { n: '04', t: 'PS: Smart Objects', d: 'Non-destructive editing.' },
    { n: '05', t: 'PS: Layers & Masks', d: 'Layer management, masking workflow.' },
    { n: '06', t: 'PS: Text + Adjustments', d: 'Levels, curves — non-destructively.' },
    { n: '07', t: 'PS: Exporting Correctly', d: 'Export As vs Save For Web. JPG, PNG, PDF.' },
    { n: '08', t: 'AI: Vector Logic + Shape Builder', d: 'Paths, anchor points, bezier curves.' },
    { n: '09', t: 'AI: Icons, Logos & Asset Export', d: 'Reusable icon sets, simple logo marks.' },
  ], note: 'Every tool introduced after the student has a problem it solves.' },
  { id: 'P6', color: 'var(--gold)', bg: 'var(--gold-dim)', title: 'Storyline Execution — Comorin Travel Co.', meta: '11 outputs · 5 chapters · ~5-6 hrs · Portfolio-ready', videos: [
    { n: 'Ch1', t: 'Brand Identity', d: 'Reference search → Style → Logo in Illustrator → PDF.' },
    { n: 'Ch2', t: 'Poster Campaign', d: 'Destination poster — Kanyakumari.' },
    { n: 'Ch3', t: 'Banners', d: 'YouTube thumbnail + real physical outdoor banner.' },
    { n: 'Ch4', t: 'Printables', d: 'Business card (front + back) + A4 tour package flyer.' },
    { n: 'Ch5', t: 'Packaging & Merchandise', d: 'Welcome card + sticker sheet.' },
  ], note: "You're the in-house designer for Comorin Travel. Every output is real portfolio work." },
  { id: 'P7', color: 'var(--cyan)', bg: 'var(--cyan-dim)', title: 'Modern Designer Toolkit', meta: '6 videos · ~1.5 hrs · AI tools + independence', videos: [
    { n: '01', t: 'Design Resource Websites', d: 'Fonts, mockups, icons, color palettes.' },
    { n: '02', t: 'Workflow Shortcuts', d: 'The 20% of shortcuts that handle 80% of the work.' },
    { n: '03', t: 'AI Tools for Ideation', d: 'Midjourney, ChatGPT, Canva AI, generative fill.' },
    { n: '04', t: 'Ethical AI Usage', d: "What AI can't replace. Building independence." },
  ], note: "AI is a tool, not a replacement. The designer who can't work without AI is not a designer." },
];

export default function Curriculum() {
  const [open, setOpen] = useState(null);
  const { isMobile } = useBreakpoint();

  return (
    <section style={{ maxWidth: '1100px', margin: '0 auto', padding: isMobile ? '52px 20px' : '80px 40px' }}>
      <ScrollReveal>
        <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', fontWeight: 700, letterSpacing: '3px', color: 'var(--cyan)', textTransform: 'uppercase', marginBottom: '10px' }}>FULL CURRICULUM</div>
        <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 400, lineHeight: 1.15, marginBottom: '16px' }}>
          8 Phases. 54+ Videos.<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Complete workflow.</em>
        </h2>
        <p style={{ fontSize: '16px', color: 'var(--white-50)', maxWidth: '560px', lineHeight: 1.7, marginBottom: '40px' }}>
          From "I don't know where to start" to "I just built a complete brand system for a real client."
        </p>
      </ScrollReveal>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {phases.map((p, i) => (
          <ScrollReveal key={p.id} delay={i * 30}>
            <PhaseItem phase={p} isOpen={open === p.id} onToggle={() => setOpen(open === p.id ? null : p.id)} isMobile={isMobile} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

function PhaseItem({ phase, isOpen, onToggle, isMobile }) {
  return (
    <div style={{
      background: 'var(--card)',
      border: `1px solid ${isOpen ? 'var(--border-accent)' : 'var(--border)'}`,
      borderRadius: '14px', overflow: 'hidden',
      transition: 'border-color 0.2s',
    }}>
      <div
        onClick={onToggle}
        style={{
          padding: isMobile ? '16px 18px' : '22px 28px',
          display: 'flex', alignItems: 'center',
          gap: isMobile ? '12px' : '18px',
          cursor: 'pointer', userSelect: 'none',
        }}
      >
        <div style={{
          fontFamily: 'var(--mono)', fontSize: '11px', fontWeight: 700,
          padding: '5px 8px', borderRadius: '6px', letterSpacing: '1px',
          background: phase.bg, color: phase.color, flexShrink: 0,
        }}>{phase.id}</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: isMobile ? '14px' : '16px', fontWeight: 700, marginBottom: '2px', whiteSpace: isMobile ? 'normal' : undefined }}>{phase.title}</div>
          <div style={{ fontSize: '11px', color: 'var(--white-30)', fontFamily: 'var(--mono)', whiteSpace: isMobile ? 'nowrap' : undefined, overflow: 'hidden', textOverflow: 'ellipsis' }}>{phase.meta}</div>
        </div>
        <div style={{
          color: 'var(--white-30)', fontSize: '16px', flexShrink: 0,
          transform: isOpen ? 'rotate(180deg)' : '',
          transition: 'transform 0.3s',
        }}>▾</div>
      </div>

      <div style={{
        maxHeight: isOpen ? '1200px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      }}>
        <div style={{ padding: isMobile ? '0 18px 18px' : '0 28px 24px', borderTop: '1px solid var(--border)', paddingTop: '16px' }}>
          {phase.videos.map((v, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '28px 1fr', gap: '10px',
              padding: '10px 0',
              borderBottom: i < phase.videos.length - 1 ? '1px solid var(--white-05)' : 'none',
            }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--white-30)', paddingTop: '2px' }}>{v.n}</div>
              <div>
                <div style={{ fontSize: isMobile ? '13px' : '14px', fontWeight: 600, color: 'var(--white-90)', marginBottom: '2px' }}>{v.t}</div>
                <div style={{ fontSize: '12px', color: 'var(--white-30)', lineHeight: 1.5 }}>{v.d}</div>
              </div>
            </div>
          ))}
          <div style={{
            background: 'var(--white-05)', marginTop: '12px', padding: '12px 14px',
            borderRadius: '8px', fontSize: '12px', color: 'var(--white-50)',
            fontStyle: 'italic', lineHeight: 1.5,
          }}>{phase.note}</div>
        </div>
      </div>
    </div>
  );
}
