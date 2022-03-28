import type { Beer } from '$data/types';

export const beers = new Map<Beer['slug'], Beer>([
  [
    'la-bise-blonde',
    {
      slug: 'la-bise-blonde',
      type_label: 'Pils',
      label: 'La Bise Blonde',
      brewery: 'Duyck',
      price: {
        25: 3,
        50: 5,
      },
      abv: 5.4,
      availability: ['winter2022', 'spring2022'],
    },
  ],
  [
    'lil-blonde',
    {
      slug: 'lil-blonde',
      type_label: 'Blonde',
      label: 'LIL Blonde',
      brewery: 'Gobrecht',
      price: {
        25: 3.5,
        50: 6.5,
      },
      abv: 5,
      availability: ['winter2022'],
    },
  ],
  [
    'taras-boulba',
    {
      slug: 'taras-boulba',
      type_label: 'Blonde',
      label: 'Taras Boulba',
      brewery: 'Brasserie de la Senne',
      price: {
        25: 3.5,
        50: 6.5,
      },
      abv: 4.5,
      availability: ['spring2022'],
    },
  ],
  [
    'poule-mouilee',
    {
      slug: 'poule-mouilee',
      type_label: 'IPA',
      label: 'Poule mouilée',
      brewery: 'Tandem',
      price: {
        25: 3.8,
        50: 7,
      },
      abv: 6.5,
      disabled: true,
      availability: ['winter2022', 'spring2022'],
    },
  ],
  [
    'xx-bitter',
    {
      slug: 'xx-bitter',
      type_label: 'Belgian IPA',
      label: 'XX Bitter',
      brewery: 'De Ranke',
      price: {
        25: 3.8,
        50: 7,
      },
      abv: 6.2,
      availability: ['spring2022'],
    },
  ],
  [
    "mongy d'hiver",
    {
      slug: "mongy d'hiver",
      type_label: 'Ambrée',
      label: "MONGY d'hiver",
      brewery: 'Cambier',
      price: {
        25: 4.4,
        50: 8,
      },
      abv: 8,
      availability: ['winter2022'],
    },
  ],
  [
    'wal',
    {
      slug: 'wal',
      type_label: 'Triple',
      label: 'Wal',
      brewery: 'Cambier',
      price: {
        25: 4.4,
        50: 8,
      },
      abv: 8.3,
      availability: ['spring2022'],
    },
  ],
]);

// [
//   {
//     label: 'Biere Spéciale',
//     brewery: 'Pépite à venir découvrir au bar',
//     price: {
//       25: 4.8,
//       50: 8.5,
//     },
//   },
// ],
