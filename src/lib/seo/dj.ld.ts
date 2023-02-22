import type { DJ } from '$data/types';
import type { } from 'svelte-seo';
import type { SvelteSeo } from 'svelte-seo/types';

export const djJSONLD = (dj: DJ): SvelteSeo['jsonLd'] => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: dj.label,
  url: 'https://alices-lille.com/dj/' + dj.slug,
  description: dj.description,
  image: {
    '@type': 'ImageObject',
    url: 'https://alices-lille.com/images/dj/' + dj.slug + '.jpg',
  },
});
