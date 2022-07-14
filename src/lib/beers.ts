import { BEERS } from '$data/beers';
import type { Beer } from '$data/types';

export const getBeer = (slug: Beer['slug']) => BEERS.get(slug);
