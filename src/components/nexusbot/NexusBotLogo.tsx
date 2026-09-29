import React, { useEffect, useId, useRef } from 'react';
import './NexusBotLogo.css';

type Props = {
  /** Rendered width/height of the icon box in px. */
  size?: number;
  theme?: 'light' | 'dark';
  /** Show the "NexusBot" wordmark beside or under the mark. */
  name?: 'right' | 'below' | false;
  /** Hover scale, and a happy reaction on click / Enter / Space. */
  interactive?: boolean;
  className?: string;
};

/*
 * Geometry is measured from the master logo and scaled into user units (0.4 per master-image px
 * for the bubble, which keeps the stylesheet's eye travel of 18px / 12px proportionate).
 * X / Y / R take master-image pixels (1254px master). The swoosh tail is measured on the 120px
 * attachment, so AX / AY convert attachment pixels into the same unit space.
 */
const SCALE = 0.4;
const ORIGIN = { x: 281, y: 142 };
const X = (v: number) => +((v - ORIGIN.x) * SCALE).toFixed(2);
const Y = (v: number) => +((v - ORIGIN.y) * SCALE).toFixed(2);
const R = (v: number) => +(v * SCALE).toFixed(2);
const P = (x: number, y: number) => `${X(x)} ${Y(y)}`;
const arc = (r: number, sweep: 0 | 1, x: number, y: number) => `A${R(r)} ${R(r)} 0 0 ${sweep} ${P(x, y)}`;

const ATT_UNITS = 4.191; // units per attachment px (fitted so the bubble overlays the 120px attachment)
const AX = (v: number) => -114.1 + v * ATT_UNITS;
const AY = (v: number) => -58.3 + v * ATT_UNITS;

/*
 * The bubble is one open outline: a J-shaped stem that bends into the top band, runs round the
 * left, bottom and right sides, and ends in a 45° chamfer. The screen is open at the top.
 */
const OUTLINE = [
  `M${P(646, 162)}`,
  `Q${P(646, 154)} ${P(654, 154)}`,
  `H${X(713)}`,
  `Q${P(721, 154)} ${P(721, 162)}`,
  `V${Y(283)}`,
  arc(160, 1, 561, 443), // outer edge of the bend
  `H${X(531)}`,
  arc(112, 0, 419, 555), // screen corners
  `V${Y(594)}`,
  arc(112, 0, 531, 706),
  `H${X(758)}`,
  arc(112, 0, 870, 594),
  `V${Y(555)}`,
  arc(112, 0, 758, 443),
  `H${X(667)}`,
  `L${P(726, 384)}`, // chamfer
  `Q${P(730, 379)} ${P(738, 379)}`,
  `H${X(842)}`,
  arc(85, 1, 927, 464),
  `V${Y(605)}`,
  arc(152, 1, 775, 757),
  `H${X(528)}`,
  `L${P(462, 822)}`, // tail
  `Q${P(452, 834)} ${P(436, 832)}`,
  `Q${P(420, 830)} ${P(420, 812)}`,
  `V${Y(727.5)}`,
  arc(152, 1, 358, 605),
  `V${Y(548)}`,
  arc(180, 1, 538, 368),
  `H${X(561)}`,
  arc(85, 0, 646, 283), // inner edge of the bend
  'Z',
].join('');

/** Smooth closed path through points (Catmull-Rom converted to cubic Béziers). */
const smoothClosed = (pts: [number, number][]) => {
  const n = pts.length;
  const at = (i: number) => pts[(i + n) % n];
  let d = `M${at(0)[0].toFixed(2)} ${at(0)[1].toFixed(2)}`;
  for (let i = 0; i < n; i++) {
    const p0 = at(i - 1);
    const p1 = at(i);
    const p2 = at(i + 1);
    const p3 = at(i + 2);
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += `C${c1[0].toFixed(2)} ${c1[1].toFixed(2)} ${c2[0].toFixed(2)} ${c2[1].toFixed(2)} ${p2[0].toFixed(2)} ${p2[1].toFixed(2)}`;
  }
  return `${d}Z`;
};

/*
 * Swoosh tail under the bubble: a thick hook plus a thin echo stroke. Outlines traced from the
 * attachment (attachment px). The hook's top edge is pushed up into the bubble's bottom band so
 * the two shapes merge without a seam.
 */
const smoothShape = (pts: [number, number][]) => smoothClosed(pts.map(([x, y]) => [AX(x), AY(y)]));

const HOOK = smoothShape([
  [53.4, 70.8], [55, 70.8], [56.5, 70.8], [58, 70.8], [59.5, 70.8], [59.5, 73.7], [58.9, 74.3],
  [57.8, 75.2], [56.7, 76.3], [55.9, 77.6], [55.3, 78.9], [55, 80.2], [54.9, 81.5], [54.9, 82.7],
  [55.1, 84], [55.5, 85.3], [56.1, 86.6], [57, 87.8], [58.1, 89], [59.2, 89.8], [60.5, 90.5],
  [61.8, 91], [63.1, 91.3], [64, 92], [63.6, 92.9], [62.4, 93.1], [61.2, 93], [59.9, 92.7],
  [58.6, 92.2], [57.4, 91.6], [56.3, 90.8], [55.2, 89.8], [54.2, 88.8], [53.4, 87.6], [52.7, 86.3],
  [52.2, 85], [51.9, 83.7], [51.7, 82.4], [51.6, 81.2], [51.6, 79.9], [51.8, 78.6], [52, 77.3],
  [52.4, 76], [53, 74.7],
]);

const ECHO = smoothShape([
  [85.9, 70.4], [84.4, 71.3], [84.3, 71.9], [83.2, 73], [81.7, 73.9], [80.3, 74.6], [78.8, 75.1],
  [77.4, 75.5], [75.9, 75.8], [74.5, 75.9], [73, 75.9], [71.6, 76], [70.1, 76], [68.7, 76],
  [67.2, 76], [65.8, 76], [64.4, 76], [62.9, 76.2], [61.5, 76.8], [60.1, 77.8], [59.1, 79],
  [58.3, 80.5], [58, 81.9], [58, 83.4], [58, 84.8], [58.5, 86.2], [59.1, 87.3], [58.6, 87.3],
  [57.7, 86.2], [57, 85], [56.5, 83.5], [56.3, 82.1], [56.6, 80.6], [57, 79.2], [57.8, 77.7],
  [58.8, 76.5], [60.2, 75.5], [61.5, 74.9], [63, 74.6], [64.4, 74.4], [67.3, 74.4], [70.2, 74.4],
  [73.1, 74.4], [76, 74.2], [77.4, 74.1], [78.9, 73.8], [80.3, 73.2], [81.7, 72.6], [83.1, 71.8],
  [85.4, 69.9], [86.9, 68.2],
]);

const BADGE = { cx: X(372), cy: Y(422), r: R(69), gap: R(84) };
const STAR_LARGE = { cx: X(365), cy: Y(425), r: R(40) };
const STAR_SMALL = { cx: X(404), cy: Y(398), r: R(17) };

const EYE = { y: Y(525), w: R(52), h: R(99) };
const EYES = [
  { x: X(532), className: 'nexusbot-eye' },
  { x: X(702), className: 'nexusbot-eye nexusbot-eye-right' },
];

const GRADIENT_Y = [Y(154), AY(93.4)];

const star = (cx: number, cy: number, r: number, k = 0.09) =>
  `M${cx} ${cy - r}Q${cx + r * k} ${cy - r * k} ${cx + r} ${cy}Q${cx + r * k} ${cy + r * k} ${cx} ${cy + r}Q${cx - r * k} ${cy + r * k} ${cx - r} ${cy}Q${cx - r * k} ${cy - r * k} ${cx} ${cy - r}Z`;

const rand = (min: number, max: number) => min + Math.random() * (max - min);
const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

const NexusBotLogo: React.FC<Props> = ({
  size = 40,
  theme = 'light',
  name = false,
  interactive = false,
  className = '',
}) => {
  const uid = useId().replace(/:/g, '');
  const svgRef = useRef<SVGSVGElement>(null);
  const wrapRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg || prefersReducedMotion()) return;

    const timers: ReturnType<typeof setTimeout>[] = [];
    let raf = 0;
    let pointer: { x: number; y: number } | null = null;
    let stopped = false;

    const later = (fn: () => void, ms: number) => {
      const t = setTimeout(fn, ms);
      timers.push(t);
      return t;
    };

    // Max eye travel comes from the CSS custom properties so the stylesheet stays the source of truth.
    const cs = getComputedStyle(svg);
    const maxX = parseFloat(cs.getPropertyValue('--nexusbot-eye-max-x')) || 18;
    const maxY = parseFloat(cs.getPropertyValue('--nexusbot-eye-max-y')) || 12;
    svg.style.setProperty('--nexusbot-blink-stagger', '40ms');

    const applyLook = () => {
      raf = 0;
      if (!pointer) return;
      const rect = svg.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      const dx = pointer.x - (rect.left + rect.width / 2);
      const dy = pointer.y - (rect.top + rect.height / 2);
      const dist = Math.hypot(dx, dy) || 1;
      const t = Math.min(1, dist / 240);
      svg.style.setProperty('--nexusbot-eye-x', `${((dx / dist) * t * maxX).toFixed(2)}px`);
      svg.style.setProperty('--nexusbot-eye-y', `${((dy / dist) * t * maxY).toFixed(2)}px`);
    };

    const onMove = (e: PointerEvent) => {
      pointer = { x: e.clientX, y: e.clientY };
      if (!raf) raf = requestAnimationFrame(applyLook);
    };
    const resetLook = () => {
      pointer = null;
      svg.style.removeProperty('--nexusbot-eye-x');
      svg.style.removeProperty('--nexusbot-eye-y');
    };

    const blink = () => svg.setAttribute('data-blink', '');
    const loopBlink = () => {
      later(() => {
        if (stopped) return;
        blink();
        if (Math.random() < 0.2) later(blink, 320);
        loopBlink();
      }, rand(2600, 6200));
    };
    const loopSparkle = () => {
      later(() => {
        if (stopped) return;
        if (!svg.hasAttribute('data-happy')) svg.setAttribute('data-sparkle', '');
        loopSparkle();
      }, rand(6500, 9000));
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', resetLook);
    window.addEventListener('blur', resetLook);
    loopBlink();
    loopSparkle();

    return () => {
      stopped = true;
      timers.forEach(clearTimeout);
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('pointerleave', resetLook);
      window.removeEventListener('blur', resetLook);
    };
  }, []);

  const handleAnimationEnd = (e: React.AnimationEvent) => {
    const svg = svgRef.current;
    const wrap = wrapRef.current;
    if (!svg || !wrap) return;
    switch (e.animationName) {
      case 'nexusbot-blink':
        if ((e.target as Element).classList.contains('nexusbot-eye-right')) svg.removeAttribute('data-blink');
        break;
      case 'nexusbot-happy':
        svg.removeAttribute('data-happy');
        break;
      case 'nexusbot-twinkle-lg':
      case 'nexusbot-twinkle-happy':
        svg.removeAttribute('data-sparkle');
        break;
      case 'nexusbot-press':
        wrap.removeAttribute('data-press');
        break;
    }
  };

  const react = () => {
    const svg = svgRef.current;
    const wrap = wrapRef.current;
    if (!svg || !wrap || prefersReducedMotion()) return;
    wrap.setAttribute('data-press', '');
    svg.setAttribute('data-happy', '');
    svg.setAttribute('data-sparkle', 'happy');
  };

  const gradId = `${uid}-body`;
  const eyeId = `${uid}-eye`;
  const badgeId = `${uid}-badge`;
  const maskId = `${uid}-mask`;

  const svg = (
    <svg
      ref={svgRef}
      className="nexusbot-svg"
      width={size}
      height={size}
      viewBox="-36 -4 340 340"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={gradId} gradientUnits="userSpaceOnUse" x1="140" y1={GRADIENT_Y[0]} x2="140" y2={GRADIENT_Y[1]}>
          <stop offset="0" style={{ stopColor: 'var(--nexusbot-primary)' }} />
          <stop offset="0.5" style={{ stopColor: 'var(--nexusbot-mid)' }} />
          <stop offset="1" style={{ stopColor: 'var(--nexusbot-secondary)' }} />
        </linearGradient>
        <linearGradient id={eyeId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" style={{ stopColor: 'var(--nexusbot-eye)' }} />
          <stop offset="1" style={{ stopColor: 'var(--nexusbot-eye-shade)' }} />
        </linearGradient>
        <linearGradient id={badgeId} x1="0.2" y1="0" x2="0.8" y2="1">
          <stop offset="0" style={{ stopColor: 'var(--nexusbot-badge)' }} />
          <stop offset="1" style={{ stopColor: 'var(--nexusbot-badge-shade)' }} />
        </linearGradient>
        <mask id={maskId} maskUnits="userSpaceOnUse" x="-36" y="-4" width="340" height="340">
          <rect x="-36" y="-4" width="340" height="340" fill="#fff" />
          <circle cx={BADGE.cx} cy={BADGE.cy} r={BADGE.gap} fill="#000" />
        </mask>
      </defs>

      <g fill={`url(#${gradId})`}>
        <path d={OUTLINE} mask={`url(#${maskId})`} />
        <path d={HOOK} />
        <path d={ECHO} />
      </g>

      <circle cx={BADGE.cx} cy={BADGE.cy} r={BADGE.r} fill={`url(#${badgeId})`} />
      <path
        className="nexusbot-star nexusbot-star-lg"
        d={star(STAR_LARGE.cx, STAR_LARGE.cy, STAR_LARGE.r)}
        fill="var(--nexusbot-sparkle)"
      />
      <path
        className="nexusbot-star nexusbot-star-sm"
        d={star(STAR_SMALL.cx, STAR_SMALL.cy, STAR_SMALL.r)}
        fill="var(--nexusbot-sparkle)"
      />

      <g className="nexusbot-eyes">
        {EYES.map((eye) => (
          <g key={eye.x} className={eye.className}>
            <rect x={eye.x} y={EYE.y} width={EYE.w} height={EYE.h} rx={EYE.w / 2} fill={`url(#${eyeId})`} />
            <path
              className="nexusbot-glint"
              d={`M${(eye.x + EYE.w * 0.66).toFixed(2)} ${(EYE.y + EYE.h * 0.15).toFixed(2)}L${(eye.x + EYE.w * 0.62).toFixed(2)} ${(EYE.y + EYE.h * 0.36).toFixed(2)}`}
              fill="none"
              stroke="var(--nexusbot-glint)"
              strokeWidth={EYE.w * 0.125}
              strokeLinecap="round"
              opacity="0.9"
            />
          </g>
        ))}
      </g>
    </svg>
  );

  const classes = [
    'nexusbot',
    name === 'below' ? 'nexusbot--below' : '',
    interactive ? 'nexusbot--interactive' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const label = name ? (
    <span className="nexusbot-name" style={{ fontSize: size * 0.4 }}>
      Nexus<b>Bot</b>
    </span>
  ) : null;

  if (interactive) {
    return (
      <button
        type="button"
        ref={wrapRef as React.RefObject<HTMLButtonElement>}
        className={classes}
        data-theme={theme}
        aria-label={name ? undefined : 'NexusBot'}
        onClick={react}
        onAnimationEnd={handleAnimationEnd}
      >
        {svg}
        {label}
      </button>
    );
  }

  return (
    <span
      ref={wrapRef as React.RefObject<HTMLSpanElement>}
      className={classes}
      data-theme={theme}
      role={name ? undefined : 'img'}
      aria-label={name ? undefined : 'NexusBot'}
      onAnimationEnd={handleAnimationEnd}
    >
      {svg}
      {label}
    </span>
  );
};

export default NexusBotLogo;
