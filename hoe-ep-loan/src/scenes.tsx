import React from "react";
import { useCurrentFrame } from "remotion";
import { C, Txt, Spray, Board, Draw, Svg, Strike, Rule, Dust, usePulse } from "./kit";
import { Phone, Contacts, Bank, Hand, Chain, Bill, Person, Arrow, Scale, Door } from "./art";

const CX = 540;

const Bar: React.FC<{ x: number; y: number; w: number; h?: number; start: number; color?: string }> =
({ x, y, w, h = 50, start, color = C.amber }) => {
  const f = useCurrentFrame();
  const p = Math.min(1, Math.max(0, (f - start) / 12));
  if (p <= 0) return null;
  const e = 1 - Math.pow(1 - p, 3);
  return <div style={{ position: "absolute", left: x, top: y, width: w * e, height: h, background: color, opacity: 0.92, borderRadius: 5, boxShadow: `0 0 24px ${color}44` }} />;
};

/* ============ SCENES ============ */

// 1 — 145 million loans (0.0-13.3)
export const S01 = () => (
  <Board>
    <Txt start={2} x={CX} y={560} size={70} color={C.chalkDim}>LAST YEAR, NIGERIANS TOOK OUT</Txt>
    <Txt start={20} x={CX} y={820} size={210} font="kanitB" color={C.amber}>145</Txt>
    <Txt start={40} x={CX} y={1010} size={120} font="kanitB" color={C.amber}>MILLION LOANS</Txt>
    <Rule x={230} y={1110} w={620} start={70} color={C.amber} thick={8} />
    <Txt start={92} x={CX} y={1290} size={64} color={C.chalkDim} font="hand">average loan: under ₦30,000 — about $20</Txt>
  </Board>
);

// 2 — stop and think (14.0-21.7)
export const S02 = () => (
  <Board>
    <Txt start={2} x={CX} y={720} size={82} color={C.chalk}>WHAT KIND OF COUNTRY</Txt>
    <Txt start={30} x={CX} y={900} size={82} color={C.chalk}>BORROWS ₦30,000</Txt>
    <Txt start={64} x={CX} y={1120} size={128} font="kanitB" color={C.amber}>145M TIMES?</Txt>
  </Board>
);

// 3 — everybody's angry / cruelty (22.7-33.1)
export const S03 = () => (
  <Board>
    <Txt start={2} x={CX} y={640} size={76} color={C.chalk}>EVERYBODY'S ANGRY</Txt>
    <Txt start={22} x={CX} y={790} size={60} color={C.chalkDim} font="hand">the cruelty, the shaming, the wickedness</Txt>
    <Txt start={64} x={CX} y={1060} size={82} color={C.chalk}>BUT HERE'S WHAT</Txt>
    <Txt start={82} x={CX} y={1200} size={82} color={C.chalk}>EVERYONE GETS</Txt>
    <Spray start={104} x={CX} y={1360} size={150}>WRONG</Spray>
  </Board>
);

// 4 — built to be cruel (33.1-46.1) [SFX: impact on "built to be cruel"]
export const S04 = () => (
  <Board>
    <Txt start={2} x={CX} y={560} size={70} color={C.chalkDim}>the cruelty isn't the interesting part</Txt>
    <Txt start={40} x={CX} y={820} size={96} color={C.chalk}>THEY WERE</Txt>
    <Spray start={64} x={CX} y={1010} size={150} color={C.red}>BUILT TO BE CRUEL</Spray>
    <Txt start={110} x={CX} y={1240} size={72} color={C.amber}>ON PURPOSE</Txt>
    <Txt start={150} x={CX} y={1420} size={60} color={C.chalkDim} font="hand">using government infrastructure — and legal</Txt>
  </Board>
);

// 5 — show you the machine (47.2-50.9)
export const S05 = () => (
  <Board>
    <Txt start={2} x={CX} y={780} size={70} color={C.chalkDim}>so forget angry for a second</Txt>
    <Txt start={34} x={CX} y={1010} size={116} font="kanitB" color={C.amber}>LET ME SHOW YOU</Txt>
    <Txt start={58} x={CX} y={1170} size={140} font="kanitB" color={C.amber}>THE MACHINE</Txt>
  </Board>
);

// 6 — the jokes / genre (52.7-69.0)
export const S06 = () => (
  <Board>
    <Phone x={390} y={360} start={2} scale={0.9} color={C.amber} />
    <Txt start={30} x={CX} y={520} size={56} color={C.chalkDim} font="hand">"even my family doesn't</Txt>
    <Txt start={44} x={CX} y={600} size={56} color={C.chalkDim} font="hand">check on me like this"</Txt>
    <Txt start={120} x={CX} y={1180} size={92} color={C.chalk}>IT'S A WHOLE</Txt>
    <Txt start={140} x={CX} y={1320} size={128} font="kanitB" color={C.amber}>GENRE NOW</Txt>
    <Txt start={200} x={CX} y={1500} size={58} color={C.chalkDim} font="hand">and that should tell you something</Txt>
  </Board>
);

// 7 — underneath the jokes / borrow 5000 (69.0-88.8)
export const S07 = () => (
  <Board>
    <Txt start={2} x={CX} y={400} size={64} color={C.chalkDim} font="hand">underneath the jokes, it's not funny</Txt>
    <Txt start={40} x={200} y={640} size={80} color={C.chalk} align="left">BORROW</Txt>
    <Txt start={54} x={200} y={790} size={150} font="kanitB" color={C.amber} align="left">₦5,000</Txt>
    <Txt start={80} x={200} y={900} size={52} color={C.chalkDim} align="left" font="hand">about $3</Txt>
    <Txt start={120} x={CX} y={1130} size={62} color={C.chalk}>your pastor gets a text</Txt>
    <Txt start={150} x={CX} y={1240} size={62} color={C.chalk}>your boss gets a text</Txt>
    <Txt start={180} x={CX} y={1350} size={62} color={C.chalk}>your mother-in-law gets a text</Txt>
    <Txt start={220} x={CX} y={1520} size={70} color={C.red}>"FRAUDSTER. CRIMINAL. THIEF."</Txt>
  </Board>
);

// 8 — for 3 dollars (88.8-95.4) [SFX: deflate/sad on this]
export const S08 = () => (
  <Board>
    <Spray start={0} x={CX} y={860} size={230}>FOR ₦5,000</Spray>
    <Txt start={40} x={CX} y={1150} size={70} color={C.chalkDim} font="hand">three dollars.</Txt>
  </Board>
);

// 9 — HIV documented (95.4-99.8)
export const S09 = () => (
  <Board>
    <Txt start={2} x={CX} y={720} size={72} color={C.chalk}>ONE APP TOLD A WOMAN'S</Txt>
    <Txt start={24} x={CX} y={860} size={72} color={C.chalk}>CONTACTS SHE WAS</Txt>
    <Spray start={54} x={CX} y={1060} size={140} color={C.red}>HIV POSITIVE</Spray>
    <Txt start={100} x={CX} y={1300} size={58} color={C.chalkDim} font="hand">documented — a regulator fined them</Txt>
  </Board>
);

// 10 — knowing they're cruel / the questions (99.8-119.3)
export const S10 = () => (
  <Board>
    <Txt start={2} x={CX} y={560} size={74} color={C.chalkDim}>knowing they're cruel</Txt>
    <Txt start={22} x={CX} y={680} size={74} color={C.chalkDim}>explains nothing</Txt>
    <Txt start={70} x={CX} y={940} size={70} color={C.chalk}>WHY DOES IT WORK LIKE THIS?</Txt>
    <Txt start={120} x={CX} y={1090} size={70} color={C.chalk}>WHY THIS BAD, THIS FAST?</Txt>
    <Txt start={170} x={CX} y={1280} size={92} color={C.amber}>WHO BUILT THE MACHINE?</Txt>
  </Board>
);

// 11 — 2016 Paylater (119.3-132.6)
export const S11 = () => (
  <Board>
    <Txt start={2} x={CX} y={480} size={150} font="kanitB" color={C.chalk}>2016</Txt>
    <Txt start={30} x={CX} y={660} size={68} color={C.chalkDim} font="hand">a company called Paylater</Txt>
    <Phone x={420} y={780} start={50} scale={0.75} color={C.amber} />
    <Txt start={110} x={CX} y={1400} size={72} color={C.chalk}>A LOAN BASED ON</Txt>
    <Txt start={128} x={CX} y={1520} size={92} color={C.amber}>YOUR PHONE</Txt>
  </Board>
);

// 12 — no collateral, money lands (125.9-132.6 tail) merged into 11 region; standalone quick
export const S12 = () => (
  <Board>
    <Txt start={2} x={CX} y={620} size={74} color={C.chalk}>NO COLLATERAL</Txt>
    <Txt start={20} x={CX} y={760} size={74} color={C.chalk}>NO GUARANTOR</Txt>
    <Txt start={38} x={CX} y={900} size={74} color={C.chalk}>NO SALARY LETTER</Txt>
    <Txt start={70} x={CX} y={1130} size={64} color={C.chalkDim} font="hand">five minutes — the money lands</Txt>
  </Board>
);

// 13 — it was brilliant / banks abandoned (132.6-151.6)
export const S13 = () => (
  <Board>
    <Txt start={2} x={CX} y={560} size={120} font="kanitB" color={C.green}>BRILLIANT</Txt>
    <Txt start={40} x={CX} y={800} size={68} color={C.chalk}>the banks had abandoned</Txt>
    <Txt start={60} x={CX} y={910} size={68} color={C.chalk}>the regular person</Txt>
    <Txt start={110} x={CX} y={1130} size={150} font="kanitB" color={C.amber}>50 MILLION</Txt>
    <Txt start={135} x={CX} y={1290} size={70} color={C.chalk}>adults, no access to credit</Txt>
    <Txt start={180} x={CX} y={1480} size={58} color={C.chalkDim} font="hand">remember this — it matters later</Txt>
  </Board>
);

// 14 — apps multiply / 145M again (151.6-172.1)
export const S14 = () => (
  <Board>
    <Txt start={2} x={CX} y={460} size={70} color={C.chalkDim} font="hand">Branch, FairMoney, Carbon… hundreds</Txt>
    <Txt start={50} x={CX} y={720} size={180} font="kanitB" color={C.amber}>145M</Txt>
    <Txt start={72} x={CX} y={890} size={70} color={C.chalk}>LOANS IN A YEAR</Txt>
    <Txt start={120} x={CX} y={1120} size={74} color={C.chalk}>not people buying</Txt>
    <Txt start={138} x={CX} y={1240} size={74} color={C.chalk}>furniture on credit</Txt>
  </Board>
);

// 15 — country borrowing to eat (172.1-192.4)
export const S15 = () => (
  <Board>
    <Txt start={2} x={CX} y={560} size={92} color={C.chalk}>A COUNTRY</Txt>
    <Spray start={30} x={CX} y={740} size={120} color={C.red}>BORROWING TO EAT</Spray>
    <Txt start={90} x={CX} y={960} size={64} color={C.chalkDim} font="hand">to buy fuel. to reach the end of the week.</Txt>
    <Txt start={160} x={CX} y={1220} size={78} color={C.chalk}>THE PRODUCT WASN'T CREDIT</Txt>
    <Txt start={200} x={CX} y={1400} size={104} font="kanitB" color={C.amber}>IT WAS SURVIVAL</Txt>
    <Txt start={230} x={CX} y={1540} size={60} color={C.chalkDim} font="hand">sold by the week</Txt>
  </Board>
);

// 16 — who's funding it (192.4-206.2)
export const S16 = () => (
  <Board>
    <Txt start={2} x={CX} y={620} size={82} color={C.chalk}>SO WHO'S PAYING</Txt>
    <Txt start={22} x={CX} y={760} size={82} color={C.chalk}>FOR ALL THIS?</Txt>
    <Txt start={80} x={CX} y={1020} size={64} color={C.chalkDim} font="hand">2020 to 2024, fintech pulled in more</Txt>
    <Txt start={110} x={CX} y={1120} size={64} color={C.chalkDim} font="hand">foreign investment than any sector</Txt>
    <Txt start={160} x={CX} y={1360} size={170} font="kanitB" color={C.green}>$1.5BN</Txt>
  </Board>
);

// 17 — why lending (206.2-221.6)
export const S17 = () => (
  <Board>
    <Txt start={2} x={CX} y={600} size={92} color={C.chalk}>WHY LENDING?</Txt>
    <Txt start={40} x={CX} y={820} size={64} color={C.chalkDim} font="hand">of all the things to build…</Txt>
    <Txt start={90} x={CX} y={1080} size={74} color={C.chalk}>why did the money</Txt>
    <Txt start={110} x={CX} y={1210} size={110} font="kanitB" color={C.amber}>RUSH INTO LOANS?</Txt>
  </Board>
);

// 18 — 300% the attraction (221.6-243.2) [SFX: big impact on 300%]
export const S18 = () => (
  <Board>
    <Txt start={2} x={CX} y={520} size={64} color={C.chalkDim} font="hand">desperate people, no legal protection…</Txt>
    <Txt start={40} x={CX} y={720} size={72} color={C.chalk}>you can charge them</Txt>
    <Spray start={70} x={CX} y={960} size={300}>300%</Spray>
    <Txt start={130} x={CX} y={1240} size={70} color={C.chalk}>that wasn't the risk.</Txt>
    <Txt start={155} x={CX} y={1380} size={104} font="kanitB" color={C.red}>THAT WAS THE ATTRACTION</Txt>
  </Board>
);

// 19 — desperation was the business (236.2-243.2)
export const S19 = () => (
  <Board>
    <Txt start={2} x={CX} y={780} size={84} color={C.chalk}>THE DESPERATION</Txt>
    <Txt start={24} x={CX} y={920} size={70} color={C.chalkDim}>wasn't a side effect</Txt>
    <Spray start={60} x={CX} y={1160} size={128}>IT WAS THE BUSINESS</Spray>
  </Board>
);

// 20 — none of it works without one thing (243.2-257.7)
export const S20 = () => (
  <Board>
    <Txt start={2} x={CX} y={700} size={82} color={C.chalk}>NONE OF IT WORKS</Txt>
    <Txt start={26} x={CX} y={850} size={82} color={C.chalk}>WITHOUT ONE THING</Txt>
    <Txt start={70} x={CX} y={1080} size={64} color={C.chalkDim} font="hand">almost nobody talks about</Txt>
    <Txt start={130} x={CX} y={1320} size={70} color={C.amber}>and when I found it…</Txt>
  </Board>
);

// 21 — the GSI (257.7-264.5) [THE REVEAL]
export const S21 = () => (
  <Board>
    <Txt start={2} x={CX} y={560} size={70} color={C.chalkDim}>there's this thing called</Txt>
    <Txt start={30} x={CX} y={840} size={280} font="kanitB" color={C.amber}>GSI</Txt>
    <Txt start={60} x={CX} y={1050} size={62} color={C.chalk}>Global Standing Instruction</Txt>
    <Txt start={100} x={CX} y={1240} size={60} color={C.chalkDim} font="hand">the Central Bank built it in 2020</Txt>
  </Board>
);

// 22 — you sign a mandate (264.5-282.1)
export const S22 = () => (
  <Board>
    <Txt start={2} x={CX} y={520} size={70} color={C.chalk}>YOU SIGN A MANDATE</Txt>
    <Txt start={30} x={CX} y={670} size={58} color={C.chalkDim} font="hand">buried in that "I agree" you tapped</Txt>
    <Txt start={90} x={CX} y={900} size={70} color={C.chalk}>it lets them reach into</Txt>
    <Txt start={115} x={CX} y={1050} size={92} color={C.red}>ANY ACCOUNT YOU OWN</Txt>
    <Chain x={250} y={1200} start={150} scale={0.9} color={C.amber} links={4} />
    <Txt start={210} x={CX} y={1480} size={58} color={C.chalkDim} font="hand">every account tied to your BVN</Txt>
  </Board>
);

// 23 — they reach into your salary account (282.1-299.4) [SFX: whoosh/swipe]
export const S23 = () => (
  <Board>
    <Txt start={2} x={CX} y={520} size={70} color={C.chalk}>YOU DEFAULT?</Txt>
    <Txt start={26} x={CX} y={660} size={64} color={C.chalkDim} font="hand">they don't chase you. they don't need to.</Txt>
    <Hand x={420} y={820} start={70} scale={1.2} color={C.red} />
    <Txt start={140} x={CX} y={1200} size={78} color={C.chalk}>straight into your</Txt>
    <Txt start={160} x={CX} y={1330} size={104} font="kanitB" color={C.red}>SALARY ACCOUNT</Txt>
    <Txt start={200} x={CX} y={1500} size={60} color={C.chalkDim} font="hand">you get the alert after it's gone</Txt>
  </Board>
);

// 24 — think what that does to the lender (299.4-316.6)
export const S24 = () => (
  <Board>
    <Txt start={2} x={CX} y={600} size={70} color={C.chalk}>if your risk is</Txt>
    <Txt start={22} x={CX} y={740} size={150} font="kanitB" color={C.green}>ZERO</Txt>
    <Txt start={70} x={CX} y={980} size={68} color={C.chalk}>why would you ever check</Txt>
    <Txt start={95} x={CX} y={1110} size={68} color={C.chalk}>if they can afford it?</Txt>
    <Txt start={150} x={CX} y={1340} size={110} font="kanitB" color={C.amber}>YOU WOULDN'T.</Txt>
  </Board>
);

// 25 — GSI took risk off lender (316.6-337.1) [SFX: impact — the thesis]
export const S25 = () => (
  <Board>
    <Txt start={2} x={CX} y={440} size={70} color={C.chalk}>THE GSI TOOK THE RISK</Txt>
    <Txt start={24} x={CX} y={560} size={70} color={C.chalk}>OFF THE LENDER</Txt>
    <Scale x={380} y={680} start={60} scale={0.95} color={C.amber} tilt={16} />
    <Spray start={140} x={CX} y={1160} size={120} color={C.red}>AND DROPPED IT ON YOU</Spray>
    <Txt start={190} x={CX} y={1380} size={66} color={C.chalkDim} font="hand">least money carries all the danger</Txt>
    <Txt start={215} x={CX} y={1480} size={66} color={C.chalkDim} font="hand">most money carries none</Txt>
  </Board>
);

// 26 — not broken, working as designed (330.5-337.8)
export const S26 = () => (
  <Board>
    <Txt start={2} x={CX} y={640} size={88} color={C.chalk}>NOT A BROKEN SYSTEM</Txt>
    <Rule x={180} y={740} w={720} start={30} color={C.chalk} thick={7} />
    <Txt start={54} x={CX} y={920} size={78} color={C.chalk}>WORKING EXACTLY</Txt>
    <Txt start={74} x={CX} y={1050} size={78} color={C.chalk}>AS DESIGNED</Txt>
    <Spray start={120} x={CX} y={1280} size={128} color={C.amber}>JUST NOT FOR YOU</Spray>
  </Board>
);

// 27 — the shaming reframed (337.8-368.3)
export const S27 = () => (
  <Board>
    <Txt start={2} x={CX} y={460} size={70} color={C.chalkDim} font="hand">for the smallest loans…</Txt>
    <Txt start={40} x={CX} y={680} size={78} color={C.chalk}>THEY TOOK YOUR</Txt>
    <Contacts x={360} y={760} start={70} scale={0.85} color={C.red} rows={4} />
    <Txt start={160} x={CX} y={1360} size={92} color={C.red}>YOUR NAME =</Txt>
    <Txt start={185} x={CX} y={1490} size={92} font="kanitB" color={C.red}>THE COLLATERAL</Txt>
  </Board>
);

// 28 — couldn't repossess car, took your name (355.3-372.8)
export const S28 = () => (
  <Board>
    <Txt start={2} x={CX} y={620} size={72} color={C.chalk}>couldn't repossess your car</Txt>
    <Arrow x={430} y={720} start={40} len={180} angle={90} color={C.chalkDim} width={7} dur={9} />
    <Txt start={70} x={CX} y={980} size={92} color={C.red}>SO IT REPOSSESSED</Txt>
    <Txt start={92} x={CX} y={1120} size={110} font="kanitB" color={C.red}>YOUR GOOD NAME</Txt>
    <Txt start={140} x={CX} y={1340} size={60} color={C.chalkDim} font="hand">the cruelty was never a glitch. it was the collateral.</Txt>
  </Board>
);

// 29 — the viral tweet (372.8-388.8) [show as tweet, unverified]
export const S29 = () => {
  const f = useCurrentFrame();
  const p = Math.min(1, Math.max(0, (f - 2) / 12));
  return (
    <Board>
      <div style={{ position: "absolute", left: 120, top: 560, width: 840, opacity: p, transform: `translateY(${(1 - p) * 20}px)` }}>
        <div style={{ border: `3px solid ${C.chalkDim}`, borderRadius: 24, padding: 40, background: "rgba(255,255,255,0.03)" }}>
          <div style={{ fontFamily: "'Kanit', sans-serif", fontSize: 52, color: C.chalk, lineHeight: 1.25 }}>
            borrowed <span style={{ color: C.green }}>₦1.2M</span>…
            <br />by the time I checked again
            <br />it had become <span style={{ color: C.red }}>₦9.6M</span>
          </div>
        </div>
      </div>
      <Txt start={40} x={CX} y={1200} size={58} color={C.chalkDim} font="hand">a tweet. nobody fully verified it.</Txt>
    </Board>
  );
};

// 30 — sounds about right (388.8-400.8)
export const S30 = () => (
  <Board>
    <Txt start={2} x={CX} y={620} size={70} color={C.chalk}>nobody said</Txt>
    <Txt start={22} x={CX} y={760} size={92} color={C.chalkDim}>"that's impossible"</Txt>
    <Txt start={60} x={CX} y={980} size={70} color={C.chalk}>everybody said</Txt>
    <Spray start={90} x={CX} y={1160} size={116} color={C.amber}>"SOUNDS ABOUT RIGHT"</Spray>
    <Txt start={150} x={CX} y={1400} size={60} color={C.chalkDim} font="hand">na that one suppose fear you</Txt>
  </Board>
);

// 31 — remember the real gap (400.8-414.5)
export const S31 = () => (
  <Board>
    <Txt start={2} x={CX} y={620} size={70} color={C.chalkDim} font="hand">remember — they filled a real gap</Txt>
    <Txt start={50} x={CX} y={880} size={150} font="kanitB" color={C.green}>50 MILLION</Txt>
    <Txt start={80} x={CX} y={1050} size={72} color={C.chalk}>people the banks ignored</Txt>
    <Txt start={130} x={CX} y={1280} size={92} color={C.chalk}>THAT WAS TRUE.</Txt>
  </Board>
);

// 32 — Nigeria wanted this (414.5-436.8)
export const S32 = () => (
  <Board>
    <Txt start={2} x={CX} y={560} size={116} font="kanitB" color={C.chalk}>NIGERIA</Txt>
    <Txt start={24} x={CX} y={720} size={116} font="kanitB" color={C.chalk}>WANTED THIS</Txt>
    <Txt start={70} x={CX} y={940} size={62} color={C.chalkDim} font="hand">pushed money into tech, on purpose, to leave oil</Txt>
    <Txt start={140} x={CX} y={1180} size={80} color={C.green}>AND IT WORKED</Txt>
    <Txt start={175} x={CX} y={1360} size={64} color={C.chalk}>50 million "included"</Txt>
    <Txt start={205} x={CX} y={1490} size={58} color={C.chalkDim} font="hand">on paper, a success story</Txt>
  </Board>
);

// 33 — same door (436.8-454.6) [SFX: impact]
export const S33 = () => (
  <Board>
    <Door x={440} y={430} start={2} scale={1.0} color={C.amber} />
    <Txt start={70} x={CX} y={860} size={72} color={C.green}>INCLUSION</Txt>
    <Txt start={110} x={CX} y={1180} size={78} color={C.chalk}>AND THE PREDATION</Txt>
    <Spray start={150} x={CX} y={1420} size={120} color={C.red}>SAME DOOR</Spray>
  </Board>
);

// 34 — DEON crackdown (454.6-474.6)
export const S34 = () => (
  <Board>
    <Txt start={2} x={CX} y={520} size={64} color={C.chalkDim} font="hand">January 2026 — new rules, "DEON"</Txt>
    <Txt start={50} x={CX} y={780} size={78} color={C.chalk}>register. follow data laws.</Txt>
    <Txt start={75} x={CX} y={910} size={78} color={C.chalk}>stop the shaming.</Txt>
    <Txt start={120} x={CX} y={1160} size={170} font="kanitB" color={C.green}>1,500+</Txt>
    <Txt start={145} x={CX} y={1330} size={78} color={C.chalk}>ILLEGAL APPS SHUT DOWN</Txt>
  </Board>
);

// 35 — is it fixed? no (466.8-480.2)
export const S35 = () => (
  <Board>
    <Txt start={2} x={CX} y={600} size={92} color={C.chalk}>IS IT FIXED?</Txt>
    <Spray start={34} x={CX} y={820} size={200} color={C.red}>NO.</Spray>
    <Txt start={80} x={CX} y={1080} size={60} color={C.chalkDim} font="hand">debt's still expensive. GSI's still there.</Txt>
    <Txt start={130} x={CX} y={1300} size={66} color={C.chalk}>but the proud, cruel era</Txt>
    <Txt start={155} x={CX} y={1420} size={66} color={C.amber}>is being dragged into the light</Txt>
  </Board>
);

// 36 — never about technology (480.2-493.0)
export const S36 = () => (
  <Board>
    <Txt start={2} x={CX} y={600} size={78} color={C.chalk}>NEVER ABOUT TECHNOLOGY</Txt>
    <Txt start={40} x={CX} y={820} size={64} color={C.chalkDim} font="hand">a loan app is just a loan</Txt>
    <Txt start={90} x={CX} y={1060} size={70} color={C.chalk}>the cruelty wasn't in the code</Txt>
    <Txt start={120} x={CX} y={1220} size={104} font="kanitB" color={C.red}>IT WAS THE DESIGN</Txt>
    <Txt start={165} x={CX} y={1420} size={58} color={C.chalkDim} font="hand">the part they built on purpose — and we allowed</Txt>
  </Board>
);

// 37 — how e take be (493.0-498.5)
export const S37 = () => (
  <Board>
    <Txt start={2} x={CX} y={620} size={62} color={C.chalkDim} font="hand">charging the desperate the most —</Txt>
    <Txt start={26} x={CX} y={720} size={62} color={C.chalkDim} font="hand">and calling it inclusion</Txt>
    <Txt start={70} x={CX} y={1000} size={190} font="kanitB" color={C.amber}>HOW E BE</Txt>
    <Rule x={230} y={1150} w={620} start={110} color={C.chalk} thick={8} />
    <Txt start={130} x={CX} y={1320} size={58} color={C.chalkDim} font="hand">how e take be — and who gain</Txt>
  </Board>
);

/* ============ TIMELINE (seconds from VO) ============ */
type Cue = { c: React.FC; at: number; to: number };
export const CUES: Cue[] = [
  { c: S01, at: 0.0, to: 14.0 },
  { c: S02, at: 14.0, to: 22.7 },
  { c: S03, at: 22.7, to: 33.1 },
  { c: S04, at: 33.1, to: 47.2 },
  { c: S05, at: 47.2, to: 52.7 },
  { c: S06, at: 52.7, to: 69.0 },
  { c: S07, at: 69.0, to: 88.8 },
  { c: S08, at: 88.8, to: 95.4 },
  { c: S09, at: 95.4, to: 99.8 },
  { c: S10, at: 99.8, to: 119.3 },
  { c: S11, at: 119.3, to: 125.9 },
  { c: S12, at: 125.9, to: 132.6 },
  { c: S13, at: 132.6, to: 151.6 },
  { c: S14, at: 151.6, to: 172.1 },
  { c: S15, at: 172.1, to: 192.4 },
  { c: S16, at: 192.4, to: 206.2 },
  { c: S17, at: 206.2, to: 221.6 },
  { c: S18, at: 221.6, to: 236.2 },
  { c: S19, at: 236.2, to: 243.2 },
  { c: S20, at: 243.2, to: 257.7 },
  { c: S21, at: 257.7, to: 264.5 },
  { c: S22, at: 264.5, to: 282.1 },
  { c: S23, at: 282.1, to: 299.4 },
  { c: S24, at: 299.4, to: 316.6 },
  { c: S25, at: 316.6, to: 330.5 },
  { c: S26, at: 330.5, to: 337.8 },
  { c: S27, at: 337.8, to: 355.3 },
  { c: S28, at: 355.3, to: 372.8 },
  { c: S29, at: 372.8, to: 388.8 },
  { c: S30, at: 388.8, to: 400.8 },
  { c: S31, at: 400.8, to: 414.5 },
  { c: S32, at: 414.5, to: 436.8 },
  { c: S33, at: 436.8, to: 454.6 },
  { c: S34, at: 454.6, to: 466.8 },
  { c: S35, at: 466.8, to: 480.2 },
  { c: S36, at: 480.2, to: 493.0 },
  { c: S37, at: 493.0, to: 498.6 },
];
