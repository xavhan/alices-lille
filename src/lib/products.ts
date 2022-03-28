import { beers } from '$data/products/beers';
import type { Beer } from '$data/types';

export const getProduct = (slug: Beer['slug']) => beers.get(slug);
