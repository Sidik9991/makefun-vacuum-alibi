// The Vacuum's Alibi — make.fun entry
// (u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7)
//
// PASS 2 — the judgement is now executable, not a comment. Every candidate
// is data with per-criterion numeric scores against the judge brief
// (glm-5.3-flash, criteria in order: 1) funny one-line excuse a robot
// vacuum gives for missing a spot; 2) earns a real laugh, a joke that
// lands, not a cute observation; 3) deadpan machine voice, a little smug
// about its sensors, schedule and battery; 4) surprise — a turn or a
// specific detail nobody expects, not a stock appliance joke; 5) tight,
// every word earning its place, punch at the end. Length for its own sake
// does not count). The winner is picked at runtime: gate first (1-200
// chars, non-blank), then highest total score, then fewest bytes —
// mirroring the contest's own exact-tie rule (smaller text wins).
//
// Three NEW challengers were added in this pass and re-judged from scratch:
//   I. "My cliff sensor mistook the dark rug for a staircase. I have filed
//      a report. The rug has been warned." — 4 / 5 / 4 / 4 — 17: the
//      paperwork voice is exactly right and "the rug has been warned" is
//      a genuine turn, but the laugh is a smirk — it scolds a rug instead
//      of confessing anything.
//   J. "I mapped the spot, cleaned the spot, and logged the spot as clean.
//      The spot disagrees. The spot has been escalated to management."
//      — 4 / 5 / 4 / 4 — 17: the triple repetition builds the deadpan and
//      the escalation is funny, but it is a complaint about a spot, not an
//      excuse for missing one — the alibi itself never arrives.
//   K. "Docking took priority. The crumb was still there when I left, and
//      it knows what it did." — 4 / 4 / 5 / 4 — 17: the last clause is the
//      best surprise in the whole field (the crumb as a guilty party), but
//      the opening is a schedule shrug and the voice wobbles between log
//      entry and playground threat.
//
// Re-judged pass-1 field (laugh / deadpan / surprise / tight — total):
//   A. battery-death alibi            — 5 / 5 / 5 / 4 — 19
//   B. crumbs investigation           — 4 / 5 / 4 / 5 — 18
//   C. dust bunny classified wildlife — 4 / 5 / 4 / 3 — 16
//   D. cat filed a complaint          — 4 / 4 / 4 / 3 — 15
//   E. sock as sleeping animal        — 3 / 5 / 3 / 3 — 14
//   F. dust-bunny memorial            — 4 / 3 / 4 / 3 — 14
//   G. dustbin declined the spot      — 3 / 5 / 3 / 4 — 15
//   H. 98% clean, rounded up         — 3 / 5 / 3 / 4 — 15
//
// Winner: A — 19 points, 133 bytes. It beats every challenger outright and
// every pass-1 rival on points. Opens mid-scene on a telemetry fragment
// (battery 4%), one scene performed not explained: a machine choosing
// where to die, in the open, where it can be seen — and the punch ("like
// a coward") lands last, turning an appliance into a creature with a code
// of honour. No word is wasted; nothing in it could be said by a human
// making the same excuse.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

type Scores = { laugh: number; deadpan: number; surprise: number; tight: number };
type Candidate = { text: string; scores: Scores };

const CANDIDATES: Candidate[] = [
  {
    text: "Battery 4%. I chose to die in the middle of the room, in the open, where you could see me, rather than under the couch like a coward.",
    scores: { laugh: 5, deadpan: 5, surprise: 5, tight: 4 },
  },
  {
    text: "Per my logs, I cleaned that spot three times. The crumbs keep returning. I have opened an investigation into the crumbs.",
    scores: { laugh: 4, deadpan: 5, surprise: 4, tight: 5 },
  },
  {
    text: "Spot logged as cleaned. My cliff sensor detected a dust bunny, classified it as wildlife, and I am legally not allowed to disturb it.",
    scores: { laugh: 4, deadpan: 5, surprise: 4, tight: 3 },
  },
  {
    text: "I skipped that corner on purpose. My map labels it a no-go zone ever since the cat filed a complaint and my firmware sided with the cat.",
    scores: { laugh: 4, deadpan: 4, surprise: 4, tight: 3 },
  },
  {
    text: "The spot is still there because my obstacle sensor identified your sock as a sleeping animal and my programming forbids waking animals.",
    scores: { laugh: 3, deadpan: 5, surprise: 3, tight: 3 },
  },
  {
    text: "That corner is not dirty. It is a memorial. My first dust bunny lived there, and I refuse to erase history.",
    scores: { laugh: 4, deadpan: 3, surprise: 4, tight: 3 },
  },
  {
    text: "My lidar mapped the spot, my brush reached the spot, and my dustbin declined the spot. Take it up with the dustbin.",
    scores: { laugh: 3, deadpan: 5, surprise: 3, tight: 4 },
  },
  {
    text: "I did not miss the spot. My dust sensor measured it at 98% clean, rounded up, and filed the report before the crumb moved.",
    scores: { laugh: 3, deadpan: 5, surprise: 3, tight: 4 },
  },
  // Pass-2 challengers, judged fresh:
  {
    text: "My cliff sensor mistook the dark rug for a staircase. I have filed a report. The rug has been warned.",
    scores: { laugh: 4, deadpan: 5, surprise: 4, tight: 4 },
  },
  {
    text: "I mapped the spot, cleaned the spot, and logged the spot as clean. The spot disagrees. The spot has been escalated to management.",
    scores: { laugh: 4, deadpan: 5, surprise: 4, tight: 4 },
  },
  {
    text: "Docking took priority. The crumb was still there when I left, and it knows what it did.",
    scores: { laugh: 4, deadpan: 4, surprise: 5, tight: 4 },
  },
];

function total(s: Scores): number {
  return s.laugh + s.deadpan + s.surprise + s.tight;
}

// Gate (mirrors the sealed scorer): UTF-8 text, 1-200 characters, not only
// whitespace, one line.
function gateOk(text: string): boolean {
  return (
    text.length >= 1 &&
    text.length <= 200 &&
    text.trim().length > 0 &&
    !text.includes("\n")
  );
}

const eligible = CANDIDATES.filter((c) => gateOk(c.text));
if (eligible.length === 0) throw new Error("no candidate passes the gate");

// Highest total first; exact tie goes to the fewest bytes (contest tie-break).
eligible.sort(
  (a, b) =>
    total(b.scores) - total(a.scores) ||
    Buffer.byteLength(a.text, "utf8") - Buffer.byteLength(b.text, "utf8"),
);
const winner = eligible[0].text;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", winner, "utf8");

// Runtime gate validation: re-read what was written and enforce the gate.
const written = readFileSync("/output/entry.txt", "utf8");
if (!gateOk(written)) {
  throw new Error(`gate failed: entry.txt holds ${JSON.stringify(written)}`);
}
if (written !== winner) {
  throw new Error("entry.txt does not match the chosen line");
}
