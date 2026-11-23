// The Vacuum's Alibi — make.fun entry
// (u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7)
//
// PASS 1 — draft candidates, scored in comments against the judge brief
// (glm-5.3-flash, criteria in order: 1) funny one-line excuse a robot
// vacuum gives for missing a spot; 2) earns a real laugh, a joke that
// lands, not a cute observation; 3) deadpan machine voice, a little smug
// about its sensors, schedule and battery; 4) surprise — a turn or a
// specific detail nobody expects, not a stock appliance joke; 5) tight,
// every word earning its place, punch at the end. Length for its own
// sake does not count.)
//
// Per-criterion scores 0-5: laugh / deadpan / surprise / tight — total.
//
//   A. "Battery 4%. I chose to die in the middle of the room, in the open,
//      where you could see me, rather than under the couch like a coward."
//      — 5 / 5 / 5 / 4 — 19. WINNER. Opens mid-scene on a telemetry
//      fragment (battery 4%), one scene: a machine choosing where to die,
//      performed not explained; the punch ("like a coward") lands last and
//      inverts the appliance into a creature with honour. 137 chars.
//   B. "Per my logs, I cleaned that spot three times. The crumbs keep
//      returning. I have opened an investigation into the crumbs."
//      — 4 / 5 / 4 / 5 — 18. Log-voice is perfect deadpan and the
//      escalation to a formal investigation is a real joke; but the laugh
//      is a smirk where A gets a laugh out loud. 118 chars.
//   C. "Spot logged as cleaned. My cliff sensor detected a dust bunny,
//      classified it as wildlife, and I am legally not allowed to disturb
//      it." — 4 / 5 / 4 / 3 — 16. "Classified as wildlife" is the surprise,
//      but "legally not allowed" pads the ending and the punch leaks.
//      141 chars.
//   D. "I skipped that corner on purpose. My map labels it a no-go zone
//      ever since the cat filed a complaint and my firmware sided with
//      the cat." — 4 / 4 / 4 / 3 — 15. The cat siding is charming, but it
//      explains the joke ("on purpose", "ever since") instead of showing
//      it, and the ending repeats the setup. 139 chars.
//   E. "The spot is still there because my obstacle sensor identified
//      your sock as a sleeping animal and my programming forbids waking
//      animals." — 3 / 5 / 3 / 3 — 14. Deadpan is there, but the sock-as-
//      animal is the stock joke every vacuum ad already tells. 136 chars.
//   F. "That corner is not dirty. It is a memorial. My first dust bunny
//      lived there, and I refuse to erase history." — 4 / 3 / 4 / 3 — 14.
//      The memorial turn is surprising, but the voice slips into
//      sentiment — a vacuum does not eulogise, it logs. 117 chars.
//   G. "My lidar mapped the spot, my brush reached the spot, and my
//      dustbin declined the spot. Take it up with the dustbin." — 3 / 5 /
//      3 / 4 — 15. Bureaucracy is the right register, but "declined the
//      spot" is a shrug, not a punch; the joke ends on a redirect.
//      122 chars.
//   H. "I did not miss the spot. My dust sensor measured it at 98% clean,
//      rounded up, and filed the report before the crumb moved." — 3 / 5 /
//      3 / 4 — 15. The rounding-up lie is sly and very machine, but the
//      laugh is small and the crumb-moving coda is doing the work the
//      punch should do. 124 chars.
//
// Winner: A — 19 points, 137 characters. It is the only candidate where
// every criterion fires at once: a real joke (a machine with a code of
// honour about where it dies), unmistakably the machine talking (battery
// telemetry, a docking death), a turn nobody expects (cowardice as a
// design choice), and the punch sitting at the very end.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Battery 4%. I chose to die in the middle of the room, in the open, where you could see me, rather than under the couch like a coward.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
