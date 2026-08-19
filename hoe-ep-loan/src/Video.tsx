import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile, useCurrentFrame, interpolate } from "remotion";
import { CUES } from "./scenes";
import { FPS } from "./kit";
import { loadFonts } from "./fonts";

loadFonts();
const XF = 6;

const Fade: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const f = useCurrentFrame();
  const o = interpolate(f, [0, XF], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return <AbsoluteFill style={{ opacity: o }}>{children}</AbsoluteFill>;
};

export const Episode: React.FC<{ withAudio?: boolean }> = ({ withAudio = true }) => (
  <AbsoluteFill style={{ background: "#181B1F" }}>
    <AbsoluteFill style={{ backgroundImage: `url(${staticFile("board.jpg")})`, backgroundSize: "cover" }} />
    {withAudio && <Audio src={staticFile("vo.mp3")} />}
    {CUES.map((cue, i) => {
      const from = Math.round(cue.at * FPS);
      const dur = Math.max(2, Math.round((cue.to - cue.at) * FPS));
      const Comp = cue.c;
      return (
        <Sequence key={i} from={from} durationInFrames={dur + XF} name={`S${i + 1}`} layout="none">
          <Fade><Comp /></Fade>
        </Sequence>
      );
    })}
  </AbsoluteFill>
);
