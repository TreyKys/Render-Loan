import React from "react";
import { useCurrentFrame, interpolate, staticFile, AbsoluteFill } from "remotion";
import METRICS from "./metrics.json";

export const C = {
  board: "#181B1F",
  chalk: "#F4F1EA",
  chalkDim: "#A9A79F",
  amber: "#F2A63C",
  amberDim: "#B0742A",
  red: "#EC4B3B",
  green: "#54D08A",
  blue: "#5AA9E6",
};
export const FPS = 30;
export const W = 1080;
export const H = 1920;
export const sec = (s: number) => Math.round(s * FPS);

export const hash = (s: string) => {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return ((h >>> 0) % 100000) / 100000;
};
export const rnd = (seed: string, i: number) => hash(seed + ":" + i);

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
const easeOutBack = (t: number) => { const c1 = 1.70158, c3 = c1 + 1; return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2); };

type FontKey = "kanit" | "kanitB" | "hand" | "marker";
const FONT: Record<FontKey, string> = {
  kanit: "'Kanit', sans-serif",
  kanitB: "'KanitBlack', sans-serif",
  hand: "'Caveat', cursive",
  marker: "'PermanentMarker', cursive",
};
const METRIC_KEY: Record<FontKey, string> = { kanit: "kanit", kanitB: "kanitB", hand: "hand", marker: "marker" };

export const measure = (text: string, fk: FontKey, size: number, ls = 0) => {
  const tbl: Record<string, number> = (METRICS as any)[METRIC_KEY[fk]];
  const def = tbl["__default__"];
  let w = 0;
  for (const ch of text) w += (tbl[ch] ?? def) * size;
  return w + ls * Math.max(0, text.length - 1);
};
export const measureBlock = (text: string, fk: FontKey, size: number, ls = 0) =>
  Math.max(...text.split("\n").map((l) => measure(l, fk, size, ls)));

/* ---------------- BOARD ---------------- */
export const Board: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <AbsoluteFill style={{ overflow: "hidden" }}>{children}</AbsoluteFill>
);

/* ---------------- DUST (minimal) ---------------- */
export const Dust: React.FC<{ x: number; y: number; start: number; seed: string; n?: number; color?: string; spread?: number; size?: number }> =
({ x, y, start, seed, n = 4, color = C.chalk, spread = 20, size = 3 }) => {
  const f = useCurrentFrame();
  const life = 10;
  const t = f - start;
  if (t < 0 || t > life) return null;
  const p = t / life;
  return (<>{Array.from({ length: n }).map((_, i) => {
    const a = rnd(seed, i) * Math.PI * 2;
    const d = (0.4 + rnd(seed, i + 40) * 0.6) * spread;
    const s = size * (0.5 + rnd(seed, i + 80));
    return <div key={i} style={{ position: "absolute", left: x + Math.cos(a) * d * easeOut(p), top: y + Math.sin(a) * d * easeOut(p) + p * p * 16, width: s, height: s, borderRadius: "50%", background: color, opacity: (1 - p) * 0.5 }} />;
  })}</>);
};

/* ---------------- TEXT (Kanit default, clean, fades+rises in) ---------------- */
type TextProps = {
  children: string; start: number; x: number; y: number; size?: number; color?: string;
  font?: FontKey; align?: "left" | "center" | "right"; rotate?: number; lh?: number;
  letterSpacing?: number; perChar?: number; dust?: boolean; maxWidth?: number; weight?: number;
};
export const Txt: React.FC<TextProps> = ({
  children, start, x, y, size = 78, color = C.chalk, font = "kanit", align = "center",
  rotate = 0, lh = 1.05, letterSpacing = 0, perChar = 0.9, dust = false, maxWidth,
}) => {
  const f = useCurrentFrame();
  const lines = children.split("\n");
  const seed = children + start;
  const safeW = maxWidth ?? 960;
  const natural = measureBlock(children, font, size, letterSpacing);
  const fit = natural > safeW ? safeW / natural : 1;

  let idx = 0;
  const rendered = lines.map((line, li) => {
    const els = line.split("").map((ch, ci) => {
      const myStart = start + idx * perChar; idx++;
      const t = (f - myStart) / 4;
      if (t <= 0) return <span key={ci} style={{ opacity: 0 }}>{ch === " " ? "\u00A0" : ch}</span>;
      const p = Math.min(1, t);
      return <span key={ci} style={{ display: "inline-block", opacity: Math.min(1, p * 1.5), transform: `translateY(${(1 - easeOut(p)) * 6}px)` }}>{ch === " " ? "\u00A0" : ch}</span>;
    });
    return <div key={li} style={{ whiteSpace: "pre" }}>{els}</div>;
  });

  const total = children.replace(/\n/g, "").length;
  const dustEls = dust ? Array.from({ length: Math.min(5, Math.ceil(total / 4)) }).map((_, i) => {
    const step = Math.max(1, Math.floor(total / 5)); const ci = i * step;
    return <Dust key={i} x={(ci % Math.max(1, lines[0].length)) * size * 0.42 + (align === "center" ? -lines[0].length * size * 0.21 : 0)} y={size * 0.3} start={start + ci * perChar} seed={seed + i} n={3} color={color} spread={16} size={2.5} />;
  }) : null;

  return (
    <div style={{
      position: "absolute", left: x, top: y,
      transform: `translate(${align === "center" ? "-50%" : align === "right" ? "-100%" : "0"}, -50%) rotate(${rotate}deg) scale(${fit})`,
      fontFamily: FONT[font], fontSize: size, lineHeight: lh, letterSpacing, color, textAlign: align, whiteSpace: "pre",
      textShadow: color === C.chalk ? "0 2px 18px rgba(0,0,0,0.45)" : `0 2px 20px ${color}30`,
    }}>
      {rendered}{dustEls}
    </div>
  );
};

/* ---------------- SPRAY (red punch) ---------------- */
export const Spray: React.FC<{ children: string; start: number; x: number; y: number; size?: number; align?: "left" | "center" | "right"; rotate?: number; color?: string; lh?: number }> =
({ children, start, x, y, size = 120, align = "center", rotate = -2, color = C.red, lh = 0.98 }) => {
  const f = useCurrentFrame();
  const t = (f - start) / 5;
  if (t <= 0) return null;
  const p = Math.min(1, t);
  const seed = children + start;
  const natural = measureBlock(children, "marker", size);
  const fit = natural > 960 ? 960 / natural : 1;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(${align === "center" ? "-50%" : align === "right" ? "-100%" : "0"}, -50%) rotate(${rotate}deg) scale(${(0.92 + easeOutBack(p) * 0.08) * fit})`, opacity: Math.min(1, p * 2) }}>
      <div style={{ position: "absolute", inset: -10, fontFamily: FONT.marker, fontSize: size, lineHeight: lh, color, opacity: 0.18 * p, whiteSpace: "pre", textAlign: align, padding: 10, transform: "scale(1.04)" }}>{children}</div>
      <div style={{ fontFamily: FONT.marker, fontSize: size, lineHeight: lh, color, whiteSpace: "pre", textAlign: align, textShadow: `0 0 24px ${color}55` }}>{children}</div>
      {Array.from({ length: 12 }).map((_, i) => {
        const a = rnd(seed, i) * Math.PI * 2;
        const d = (0.3 + rnd(seed, i + 33) * 1.0) * size * 1.05;
        const s = 3 + rnd(seed, i + 66) * 7;
        const dp = Math.min(1, Math.max(0, (f - start - 2) / 8));
        return <div key={i} style={{ position: "absolute", left: `calc(50% + ${Math.cos(a) * d * easeOut(dp)}px)`, top: `calc(50% + ${Math.sin(a) * d * easeOut(dp) * 0.6}px)`, width: s, height: s * (0.6 + rnd(seed, i + 99) * 0.8), borderRadius: "50%", background: color, opacity: (1 - dp * 0.4) * 0.7 * p }} />;
      })}
    </div>
  );
};

/* ---------------- DRAW (SVG stroke reveal) ---------------- */
export const Draw: React.FC<{ d: string; start: number; dur?: number; color?: string; width?: number; fill?: string; cap?: "round" | "butt" | "square"; len?: number; opacity?: number }> =
({ d, start, dur = 16, color = C.amber, width = 7, fill = "none", cap = "round", len = 1400, opacity = 1 }) => {
  const f = useCurrentFrame();
  const t = (f - start) / dur;
  if (t <= 0) return null;
  const p = Math.min(1, easeOut(t));
  return (<>
    <path d={d} stroke={color} strokeWidth={width * 2.2} strokeLinecap={cap} strokeLinejoin="round" fill="none" opacity={0.08 * opacity} strokeDasharray={len} strokeDashoffset={len * (1 - p)} />
    <path d={d} stroke={color} strokeWidth={width} strokeLinecap={cap} strokeLinejoin="round" fill={p > 0.98 ? fill : "none"} opacity={opacity} strokeDasharray={len} strokeDashoffset={len * (1 - p)} />
  </>);
};

export const Svg: React.FC<{ children: React.ReactNode; x?: number; y?: number; w?: number; h?: number; vb?: string; rotate?: number; opacity?: number }> =
({ children, x = 0, y = 0, w = W, h = H, vb, rotate = 0, opacity = 1 }) => (
  <svg width={w} height={h} viewBox={vb ?? `0 0 ${w} ${h}`} style={{ position: "absolute", left: x, top: y, overflow: "visible", transform: `rotate(${rotate}deg)`, opacity }}>{children}</svg>
);

export const Strike: React.FC<{ x: number; y: number; w: number; start: number; color?: string; thick?: number; angle?: number }> =
({ x, y, w, start, color = C.red, thick = 9, angle = -2 }) => {
  const f = useCurrentFrame();
  const p = Math.min(1, Math.max(0, (f - start) / 5));
  if (p <= 0) return null;
  return <div style={{ position: "absolute", left: x, top: y, width: w * easeOut(p), height: thick, background: color, borderRadius: thick, transform: `rotate(${angle}deg)`, transformOrigin: "left center", opacity: 0.95, boxShadow: `0 0 14px ${color}55` }} />;
};

export const Rule: React.FC<{ x: number; y: number; w: number; start: number; color?: string; thick?: number; droop?: number }> =
({ x, y, w, start, color = C.chalk, thick = 6, droop = 6 }) => {
  const f = useCurrentFrame();
  const p = Math.min(1, Math.max(0, (f - start) / 7));
  if (p <= 0) return null;
  const len = 1200;
  return <svg style={{ position: "absolute", left: x, top: y, overflow: "visible" }} width={w} height={30}><path d={`M 0 6 Q ${w * 0.5} ${6 + droop} ${w} 3`} stroke={color} strokeWidth={thick} fill="none" strokeLinecap="round" strokeDasharray={len} strokeDashoffset={len * (1 - easeOut(p))} opacity={0.9} /></svg>;
};

export const usePulse = (start: number, at: number[], amt = 0.05) => {
  const f = useCurrentFrame();
  let s = 1;
  for (const a of at) { const t = f - (start + a); if (t >= 0 && t < 12) s = 1 + Math.sin((t / 12) * Math.PI) * amt; }
  return s;
};
export const useFade = (inAt: number, outAt?: number, dur = 6) => {
  const f = useCurrentFrame();
  let o = interpolate(f, [inAt, inAt + dur], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  if (outAt !== undefined) o *= interpolate(f, [outAt - dur, outAt], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return o;
};
