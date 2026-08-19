import { FONT_CSS } from "./fontcss";
let done = false;
export const loadFonts = () => {
  if (done || typeof document === "undefined") return;
  done = true;
  const style = document.createElement("style");
  style.textContent = FONT_CSS;
  document.head.appendChild(style);
  try {
    (document as any).fonts.load("700 100px Kanit");
    (document as any).fonts.load("900 100px KanitBlack");
    (document as any).fonts.load("700 100px Caveat");
    (document as any).fonts.load("400 100px PermanentMarker");
  } catch (e) {}
};
