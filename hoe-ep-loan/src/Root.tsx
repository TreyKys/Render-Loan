import React from "react";
import { Composition } from "remotion";
import { Episode } from "./Video";
import { W, H, FPS } from "./kit";
const TOTAL = Math.round(499 * FPS);
export const RemotionRoot: React.FC = () => (
  <>
    <Composition id="Loan" component={Episode} durationInFrames={TOTAL} fps={FPS} width={W} height={H} defaultProps={{ withAudio: true }} />
    <Composition id="LoanSilent" component={Episode} durationInFrames={TOTAL} fps={FPS} width={W} height={H} defaultProps={{ withAudio: false }} />
  </>
);
