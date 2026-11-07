// Older (non-rich) blog posts: 5 FAQs each, plus rewritten or extended body copy where the post was under 1,500 words.
// Merged into POSTS at the bottom of site.ts. Links inside copy are absolute (the legacy renderer only turns https links into anchors).
import { UPGRADES_A } from './legacy-upgrades-a';
import { UPGRADES_B } from './legacy-upgrades-b';
import { UPGRADES_C } from './legacy-upgrades-c';
import { APPEND_D } from './legacy-upgrades-d';
import { APPEND_E } from './legacy-upgrades-e';
import { APPEND_F } from './legacy-upgrades-f';

export interface LegacyUpgrade { content?: string; append?: string; faqs: { q: string; a: string }[]; }
export const LEGACY_UPGRADES: Record<string, LegacyUpgrade> = { ...UPGRADES_A, ...UPGRADES_B, ...UPGRADES_C };
// Extra sections go between the rewritten body and the FAQs.
for (const [slug, extra] of [...Object.entries(APPEND_D), ...Object.entries(APPEND_E), ...Object.entries(APPEND_F)]) if (LEGACY_UPGRADES[slug]) LEGACY_UPGRADES[slug] = { ...LEGACY_UPGRADES[slug], content: `${LEGACY_UPGRADES[slug].content}

${extra}` };
