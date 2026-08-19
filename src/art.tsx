import React from "react";
import { useCurrentFrame } from "remotion";
import { C, Draw, Svg, rnd } from "./kit";

/* PHONE with screen */
export const Phone: React.FC<{ x: number; y: number; start: number; scale?: number; color?: string }> =
({ x, y, start, scale = 1, color = C.amber }) => {
  const w = 300, h = 560;
  return (
    <Svg x={x} y={y} w={w * scale} h={h * scale} vb={`0 0 ${w} ${h}`}>
      <Draw d={`M 46 26 q -22 0 -22 24 L 24 ${h - 50} q 0 24 22 24 L ${w - 46} ${h - 2} q 22 0 22 -24 L ${w - 24} 50 q 0 -24 -22 -24 Z`} start={start} dur={20} color={color} width={6} len={1900} />
      <Draw d={`M 54 74 L ${w - 54} 70 L ${w - 54} ${h - 78} L 54 ${h - 74} Z`} start={start + 10} dur={12} color={color} width={3.5} len={1500} opacity={0.5} />
      <Draw d={`M 124 50 L ${w - 124} 48`} start={start + 16} dur={5} color={color} width={4} len={80} />
    </Svg>
  );
};

/* CONTACT LIST rows (for the phonebook-harvest scene) */
export const Contacts: React.FC<{ x: number; y: number; start: number; scale?: number; color?: string; rows?: number }> =
({ x, y, start, scale = 1, color = C.chalk, rows = 5 }) => (
  <Svg x={x} y={y} w={360 * scale} h={(rows * 76 + 20) * scale} vb={`0 0 360 ${rows * 76 + 20}`}>
    {Array.from({ length: rows }).map((_, i) => {
      const yy = 20 + i * 76;
      return (
        <g key={i}>
          <Draw d={`M 40 ${yy + 28} a 22 22 0 1 0 0.1 0`} start={start + i * 8} dur={8} color={color} width={4} len={160} />
          <Draw d={`M 92 ${yy + 14} L 300 ${yy + 14}`} start={start + i * 8 + 3} dur={6} color={color} width={5} len={220} />
          <Draw d={`M 92 ${yy + 40} L 240 ${yy + 40}`} start={start + i * 8 + 5} dur={5} color={color} width={4} len={160} opacity={0.6} />
        </g>
      );
    })}
  </Svg>
);

/* BANK building */
export const Bank: React.FC<{ x: number; y: number; start: number; scale?: number; color?: string }> =
({ x, y, start, scale = 1, color = C.chalk }) => (
  <Svg x={x} y={y} w={260 * scale} h={220 * scale} vb="0 0 260 220">
    <Draw d="M 20 74 L 130 18 L 240 74 Z" start={start} dur={14} color={color} width={5} len={520} />
    <Draw d="M 14 88 L 246 88" start={start + 8} dur={8} color={color} width={5} len={240} />
    {[0, 1, 2, 3].map((i) => (<Draw key={i} d={`M ${48 + i * 54} 96 L ${48 + i * 54} 176`} start={start + 12 + i * 3} dur={7} color={color} width={5} len={90} />))}
    <Draw d="M 14 186 L 246 186" start={start + 26} dur={8} color={color} width={5} len={240} />
    <Draw d="M 6 202 L 254 202" start={start + 30} dur={8} color={color} width={6} len={250} />
  </Svg>
);

/* HAND reaching in (grab) */
export const Hand: React.FC<{ x: number; y: number; start: number; scale?: number; color?: string }> =
({ x, y, start, scale = 1, color = C.red }) => (
  <Svg x={x} y={y} w={240 * scale} h={200 * scale} vb="0 0 240 200">
    {/* forearm */}
    <Draw d="M 10 150 L 70 120" start={start} dur={8} color={color} width={14} len={80} />
    {/* palm block */}
    <Draw d="M 70 100 L 150 92 L 156 150 L 76 158 Z" start={start + 6} dur={14} color={color} width={7} len={360} />
    {/* four fingers curling down over an edge */}
    {[0, 1, 2, 3].map((i) => (
      <Draw key={i} d={`M ${88 + i * 20} 96 L ${90 + i * 20} 66 q 0 -14 14 -14 q 14 0 14 14 L ${118 + i * 20} 90`} start={start + 18 + i * 4} dur={8} color={color} width={7} len={130} />
    ))}
    {/* thumb */}
    <Draw d="M 150 120 q 26 -6 34 12" start={start + 34} dur={7} color={color} width={7} len={70} />
  </Svg>
);

/* CHAIN links (for BVN-linked accounts) */
export const Chain: React.FC<{ x: number; y: number; start: number; scale?: number; color?: string; links?: number; horizontal?: boolean }> =
({ x, y, start, scale = 1, color = C.amber, links = 4, horizontal = true }) => (
  <Svg x={x} y={y} w={(links * 96 + 40) * scale} h={140 * scale} vb={`0 0 ${links * 96 + 40} 140`}>
    {Array.from({ length: links }).map((_, i) => {
      const cx = 60 + i * 88;
      return <Draw key={i} d={`M ${cx} 40 a 34 34 0 1 0 0.1 0`} start={start + i * 6} dur={11} color={color} width={11} len={280} />;
    })}
  </Svg>
);

/* MONEY BILL simple */
export const Bill: React.FC<{ x: number; y: number; start: number; scale?: number; color?: string; label?: string }> =
({ x, y, start, scale = 1, color = C.green }) => (
  <Svg x={x} y={y} w={200 * scale} h={110 * scale} vb="0 0 200 110">
    <Draw d="M 10 14 L 190 10 L 190 96 L 10 100 Z" start={start} dur={14} color={color} width={5} len={560} />
    <Draw d="M 100 34 a 22 22 0 1 0 0.1 0" start={start + 10} dur={10} color={color} width={4} len={150} />
    <Draw d="M 100 30 L 100 78 M 90 40 q 20 -6 20 8 q 0 12 -20 8" start={start + 16} dur={8} color={color} width={4} len={120} />
  </Svg>
);

/* PERSON stick */
export const Person: React.FC<{ x: number; y: number; start: number; scale?: number; color?: string; opacity?: number }> =
({ x, y, start, scale = 1, color = C.chalk, opacity = 1 }) => (
  <Svg x={x} y={y} w={70 * scale} h={130 * scale} vb="0 0 70 130">
    <Draw d="M 35 8 a 13 13 0 1 1 0.01 0" start={start} dur={8} color={color} width={5} len={90} opacity={opacity} />
    <Draw d="M 35 34 L 35 82" start={start + 4} dur={7} color={color} width={5} len={50} opacity={opacity} />
    <Draw d="M 10 50 L 60 50" start={start + 7} dur={7} color={color} width={5} len={52} opacity={opacity} />
    <Draw d="M 35 82 L 14 122 M 35 82 L 56 122" start={start + 10} dur={8} color={color} width={5} len={100} opacity={opacity} />
  </Svg>
);

/* ARROW */
export const Arrow: React.FC<{ x: number; y: number; start: number; len?: number; angle?: number; color?: string; width?: number; dur?: number }> =
({ x, y, start, len = 220, angle = 0, color = C.chalk, width = 7, dur = 10 }) => (
  <Svg x={x} y={y} w={len + 40} h={80} vb={`0 0 ${len + 40} 80`} rotate={angle}>
    <Draw d={`M 6 40 L ${len} 40`} start={start} dur={dur} color={color} width={width} len={len + 20} />
    <Draw d={`M ${len - 34} 14 L ${len} 40 L ${len - 34} 66`} start={start + dur * 0.65} dur={dur * 0.6} color={color} width={width} len={120} />
  </Svg>
);

/* SCALE / balance (for risk transfer) */
export const Scale: React.FC<{ x: number; y: number; start: number; scale?: number; color?: string; tilt?: number }> =
({ x, y, start, scale = 1, color = C.chalk, tilt = 0 }) => (
  <Svg x={x} y={y} w={320 * scale} h={260 * scale} vb="0 0 320 260">
    <Draw d="M 160 30 L 160 210" start={start} dur={10} color={color} width={6} len={190} />
    <Draw d="M 120 210 L 200 210" start={start + 8} dur={6} color={color} width={6} len={90} />
    <g transform={`rotate(${tilt} 160 50)`}>
      <Draw d="M 50 50 L 270 50" start={start + 6} dur={12} color={color} width={6} len={230} />
      <Draw d="M 50 50 L 30 110 L 70 110 Z" start={start + 16} dur={8} color={color} width={4} len={160} />
      <Draw d="M 270 50 L 250 110 L 290 110 Z" start={start + 20} dur={8} color={color} width={4} len={160} />
    </g>
  </Svg>
);

/* DOOR (for "same door") */
export const Door: React.FC<{ x: number; y: number; start: number; scale?: number; color?: string }> =
({ x, y, start, scale = 1, color = C.amber }) => (
  <Svg x={x} y={y} w={200 * scale} h={300 * scale} vb="0 0 200 300">
    <Draw d="M 20 40 L 180 40 L 180 290 L 20 290 Z" start={start} dur={18} color={color} width={6} len={900} />
    <Draw d="M 40 60 L 160 60 L 160 270 L 40 270 Z" start={start + 12} dur={14} color={color} width={3.5} len={700} opacity={0.5} />
    <Draw d="M 150 165 a 8 8 0 1 0 0.1 0" start={start + 24} dur={6} color={color} width={5} len={60} />
  </Svg>
);
