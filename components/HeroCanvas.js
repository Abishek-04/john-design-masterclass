'use client';
import { useEffect, useRef } from 'react';

const THEME_BLOBS = {
  teal: {
    blobs: [
      [16,  232, 208],  // Electric Teal
      [255,  60, 172],  // Hot Pink
      [123,  97, 255],  // Electric Violet
    ],
    topEdge: 'rgba(16,232,208,0.04)',
  },
  yellow: {
    blobs: [
      [255, 220,   0],  // Electric Yellow
      [255, 140,   0],  // Orange
      [255,  55,   0],  // Red-Orange
    ],
    topEdge: 'rgba(255,220,0,0.06)',
  },
};

function getTheme() {
  if (typeof document === 'undefined') return 'teal';
  return document.documentElement.getAttribute('data-theme') === 'yellow' ? 'yellow' : 'teal';
}

export default function HeroCanvas() {
  const canvasRef  = useRef(null);
  const themeRef   = useRef(getTheme());

  // Watch data-theme changes and update themeRef instantly
  useEffect(() => {
    const observer = new MutationObserver(() => {
      themeRef.current = getTheme();
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let W = 1, H = 1;
    const resize = () => {
      const p = canvas.parentElement.getBoundingClientRect();
      W = p.width; H = p.height;
      canvas.width  = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const mouse  = { x: W * 0.6, y: H * 0.35 };
    const smooth = { x: W * 0.6, y: H * 0.35 };
    const onMouse = e => { mouse.x = e.clientX; mouse.y = e.clientY; };

    // Blob positions/sizes/phase — theme-independent
    const blobMeta = [
      { cx: 0.72, cy: 0.25, r: 0.55, a: 0.11, sp: 1.00, ph: 0.00 },
      { cx: 0.18, cy: 0.60, r: 0.48, a: 0.09, sp: 0.65, ph: 2.09 },
      { cx: 0.50, cy: 0.90, r: 0.42, a: 0.08, sp: 0.45, ph: 4.19 },
    ];

    let t = 0;
    let rafId;

    const draw = () => {
      rafId = requestAnimationFrame(draw);
      t += 0.0018;

      smooth.x += (mouse.x - smooth.x) * 0.035;
      smooth.y += (mouse.y - smooth.y) * 0.035;
      const mx = smooth.x / W - 0.5;
      const my = smooth.y / H - 0.5;

      ctx.clearRect(0, 0, W, H);

      // Read current theme on every frame — zero lag on toggle
      const palette = THEME_BLOBS[themeRef.current];

      // Aurora blobs
      blobMeta.forEach((b, i) => {
        const bx = (b.cx + Math.sin(t * b.sp        + b.ph) * 0.12 + mx * 0.06) * W;
        const by = (b.cy + Math.cos(t * b.sp * 0.55 + b.ph) * 0.09 + my * 0.04) * H;
        const br = b.r * Math.max(W, H);
        const [r, g, bl] = palette.blobs[i];

        const grad = ctx.createRadialGradient(bx, by, 0, bx, by, br);
        grad.addColorStop(0,    `rgba(${r},${g},${bl},${b.a})`);
        grad.addColorStop(0.42, `rgba(${r},${g},${bl},${(b.a * 0.28).toFixed(3)})`);
        grad.addColorStop(1,    `rgba(${r},${g},${bl},0)`);
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, W, H);
      });

      // Cursor spotlight
      const sr = Math.min(W, H) * 0.30;
      const sg = ctx.createRadialGradient(smooth.x, smooth.y, 0, smooth.x, smooth.y, sr);
      sg.addColorStop(0, 'rgba(255,255,255,0.026)');
      sg.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = sg;
      ctx.fillRect(0, 0, W, H);

      // Top-edge glow — themed
      const tg = ctx.createLinearGradient(0, 0, 0, H * 0.45);
      tg.addColorStop(0, palette.topEdge);
      tg.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = tg;
      ctx.fillRect(0, 0, W, H);
    };

    draw();
    window.addEventListener('mousemove', onMouse);
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}
    />
  );
}
