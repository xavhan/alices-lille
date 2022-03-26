import { DJS } from "$data/djs";
import type { DJ } from "$data/types";

export const getDJ = (slug: DJ['slug']) => DJS.find((e) => e.slug === slug);
