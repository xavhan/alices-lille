import type { DJ } from '$data/types';
import type { SvelteSeoProps } from 'svelte-seo/types/SvelteSeo';

export const djJSONLD = (dj: DJ): SvelteSeoProps['jsonLd'] => ({
  "@context": "https://schema.org",
  '@type': 'Person',
  name: dj.label,
  url: 'https://alices-lille.com/dj/' + dj.slug,
  description: dj.description,
  image: {
    '@type': 'ImageObject',
    url: 'https://alices-lille.com/images/dj/' + dj.slug + '.jpg',
  },
});
