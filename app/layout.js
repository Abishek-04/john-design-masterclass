import { DM_Sans, Syne, JetBrains_Mono } from 'next/font/google';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});
const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata = {
  title: 'How to Think Like a Designer — Graphic Design Masterclass | Classory',
  description: '20+ hours of structured graphic design learning in Tamil. From design thinking to Photoshop, Illustrator & real client work.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

const globalStyles = `
  :root {
    --bg: #050714; --bg2: #080A1C; --card: #0C0E24; --card-hover: #11142E;
    --border: #191C38; --border-accent: #22264E; --white: #EDF0FF;
    --white-90: rgba(237,240,255,0.9); --white-70: rgba(237,240,255,0.7);
    --white-50: rgba(237,240,255,0.5); --white-30: rgba(237,240,255,0.3);
    --white-40: rgba(237,240,255,0.4); --white-10: rgba(237,240,255,0.1); --white-05: rgba(237,240,255,0.05);
    --gold: #10E8D0; --gold-dim: rgba(16,232,208,0.14);
    --green: #00E676; --green-dim: rgba(0,230,118,0.12);
    --red: #FF4757; --cyan: #FF3CAC; --cyan-dim: rgba(255,60,172,0.1);
    --orange: #FF3CAC; --purple: #7B61FF;
  }
  *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
  img { max-width: 100%; height: auto; }
  html { -webkit-text-size-adjust: 100%; }
  body { overflow-x: hidden; }
  html { scroll-behavior: smooth; }
  body { background:var(--bg); color:var(--white); font-family:var(--font-dm-sans),system-ui,sans-serif; -webkit-font-smoothing:antialiased; overflow-x:hidden; }
  :root { --serif: var(--font-syne),system-ui,sans-serif; --sans: var(--font-dm-sans),system-ui,sans-serif; --mono: var(--font-jetbrains-mono),monospace; }
  .reveal { opacity:0; transform:translateY(32px); transition:opacity .75s ease,transform .75s ease; }
  .reveal.visible { opacity:1; transform:translateY(0); }
  .reveal-scale { opacity:0; transform:scale(0.94); transition:opacity .6s ease,transform .6s ease; }
  .reveal-scale.visible { opacity:1; transform:scale(1); }
  .reveal-left { opacity:0; transform:translateX(-40px); transition:opacity .7s ease,transform .7s ease; }
  .reveal-left.visible { opacity:1; transform:translateX(0); }
  .reveal-right { opacity:0; transform:translateX(40px); transition:opacity .7s ease,transform .7s ease; }
  .reveal-right.visible { opacity:1; transform:translateX(0); }
  @keyframes shimmer { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
  .urgency-short { display: none; }
  @media (max-width: 640px) {
    .urgency-full { display: none; }
    .urgency-short { display: inline; }
  }
  @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
  @keyframes play-pulse { 0%,100%{box-shadow:0 0 0 0 rgba(254,203,4,0.35)} 50%{box-shadow:0 0 0 22px rgba(254,203,4,0)} }
  @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
  @keyframes drawLine { from{transform:scaleX(0)} to{transform:scaleX(1)} }
  /* ── Yellow theme — complete warm override, zero teal ── */
  [data-theme="yellow"] {
    --bg: #060400; --bg2: #0A0700; --card: #100C00; --card-hover: #181000;
    --border: #241900; --border-accent: #342400;
    --white: #FFF9EC; --white-90: rgba(255,249,236,0.9); --white-70: rgba(255,249,236,0.7);
    --white-50: rgba(255,249,236,0.5); --white-40: rgba(255,249,236,0.4);
    --white-30: rgba(255,249,236,0.3); --white-10: rgba(255,249,236,0.1); --white-05: rgba(255,249,236,0.05);
    --gold: #FFE500; --gold-dim: rgba(255,229,0,0.16);
    --cyan: #FF7A00; --cyan-dim: rgba(255,122,0,0.13);
    --orange: #FF7A00; --purple: #FFB300;
    --green: #FFE500; --green-dim: rgba(255,229,0,0.14);
    --red: #FF3D00;
  }
.gold-underline { position:relative; display:inline; }
  .gold-underline::after { content:''; position:absolute; left:0; bottom:-3px; width:100%; height:2px; background:var(--gold); transform:scaleX(0); transform-origin:left; transition:transform 0.6s ease 0.4s; border-radius:2px; }
  .reveal.visible .gold-underline::after, .reveal-scale.visible .gold-underline::after, .reveal-left.visible .gold-underline::after, .reveal-right.visible .gold-underline::after { transform:scaleX(1); }
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${syne.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
