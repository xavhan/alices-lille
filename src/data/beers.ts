import type { Beer } from './types';
export const BEERS = new Map<string, Beer>([
  [
    'bise',
    {
      type_label: 'Pils',
      label: 'La bise',
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
    'lilblonde',
    {
      type_label: 'Blonde',
      label: 'LIL Blonde',
      brewery: 'Gobrecht',
      price: {
        25: 3.5,
        50: 6.5,
      },
      abv: 5.5,
      availability: ['winter2022', 'spring2022'],
    },
  ],
  [
    'tarasboulba',
    {
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
    'poulemouillee',
    {
      type_label: 'IPA',
      label: 'Poule mouillée',
      brewery: 'Tandem',
      price: {
        25: 3.8,
        50: 7,
      },
      abv: 6.5,
      availability: ['winter2022', 'spring2022'],
    },
  ],
  [
    'xxbitter',
    {
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
    'mongyhiver',
    {
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
      type_label: 'Triple',
      label: 'Wal',
      brewery: 'Célestin',
      price: {
        25: 4.4,
        50: 8,
      },
      abv: 8.3,
      availability: ['spring2022'],
    },
  ],
  [
    'freebird',
    {
      label: 'Free Bird',
      brewery: 'Le singe savant',
      price: {
        25: 4.8,
        50: 8.5,
      },
    },
  ],
  [
    'springsin',
    {
      label: 'Spring Sin',
      abv: 5.8,
      brewery: 'Le singe savant',
      price: {
        25: 4.8,
        50: 8.5,
      },
    },
  ],
  [
    'bandicot',
    {
      label: 'Bandicot',
      brewery: 'Le singe savant',
      price: {
        25: 4.8,
        50: 8.5,
      },
    },
  ],
  [
    'phi',
    {
      type_label: 'Sour',
      label: 'Phi rabarber',
      price: 8,
      abv: 8,
      brewery: 'Brasserie alvinne',
    },
  ],
  [
    'bieresdumoment',
    {
      label: 'Bières du moment',
      price: 7,
      brewery: 'Singe Savant, Hub, Cambier...',
    },
  ],
  [
    'westmalletripel',
    {
      type_label: 'Trappiste',
      label: 'Westmalle tripel',
      price: 6,
      abv: 9.5,
      brewery: 'Abbaye de Westmalle',
    },
  ],
  [
    'rocheforttriple',
    {
      type_label: 'Trappiste',
      label: 'Rochefort triple',
      price: 6,
      abv: 8.1,
      brewery: 'Abbaye de Rochefort',
    },
  ],
  [
    'gueuzecantillon',
    {
      type_label: 'Gueuze',
      label: 'GUEUZE 75cl',
      price: 30,
      brewery: 'Brasserie Cantillon',
      availability: ['winter2022'],
    },
  ],
  [
    'brunehaut',
    {
      type_label: 'Sans Gluten',
      label: 'Blonde / Ambrée',
      price: 5.3,
      brewery: 'Brunehaut',
    },
  ],
  [
    'alcoolfree',
    {
      label: 'Bière sans Alcool',
      price: 5,
      brewery: 'BBP / La débauche',
    },
  ],
  ['appiecider', { label: 'CIDRE - Brut', price: 5.3, brewery: 'Appie' }],
]);
