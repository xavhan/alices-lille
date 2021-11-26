import type { Beer } from '$lib/types';
export const taps: Beer[] = [
  {
    label: 'Pills - la Bise 5º4',
    brewery: 'Brasserie Duyck',
    prices: {
      25: 2.8,
      50: 5,
    },
  },
  {
    label: 'Blonde - Bonne Pioche 5º5',
    brewery: 'Brasserie Tamdem',
    prices: {
      25: 3.5,
      50: 6.5,
    },
  },
  { 
    label: 'IPA - Poule mouilée 6°5',
    brewery: 'brasserie tandem',
    prices: {
      25: 3.8,
      50: 7,
    }
  },
  { 
    label: 'AMBRÉE - MONGY NOËL 7°',
    brewery: 'Brasserie cambier',
    prices: {
      25: 4.4,
      50: 8,
    }
  },
  { 
    label: 'Fumée - spring sin',
    brewery: 'Brasserie des singes savants',
    prices: {
      25: 4.8,
      50: 8.5,
    },
  },
];

export const bottles: Beer[] = [
  {
    label: 'SOUR - Phi rabarber 8°',
    prices: { 33: 8 },
    brewery: 'brasserie alvinne',
  },
  {
    label: 'Ambrée - Raskar Kawa ',
    prices: { 33: 7 },
    brewery: 'Brasserie des Singes Savants',
  },
  {
    label: 'TRAPPISTE - Rochefort triple 8°1',
    prices: { 33: 6 },
    brewery: 'Brasserie abbaye Rochefort',
  },
  {
    label: 'GUEUZE 75cl - Saint Lamvinus 7°',
    prices: { 33: 30 },
    brewery: 'Brasserie Cantillon',
  },
  {
    label: 'SANS GLUTEN - Blonde / AMbrée',
    prices: { 33: 5.3 },
    brewery: 'Brunehaut',
  },
  {
    label: 'blonde SANS Alcool - pico bello 0,3°',
    prices: { 33: 5 },
    brewery: 'Brussel Beer project',
  },
  { label: 'CIDRE - Brut', prices: { 33: 5.3 }, brewery: 'Appie' },
];

export const shooters = [
  { label: 'Vodka Airelles Sauge' },
  { label: 'Rhum Poires Épices' },
]

export const menu = {
  categoriesOrder: ['beers', 'wines', 'hards'],
  categories: {
    beers: {
      label: 'La bière',
      formats: ['12', '25', '33', '50'],
    },
    wines: {
      label: 'Le vin',
      formats: ['glass', 'bottle'],
    },
    hards: {
      label: 'Cocktails et Digestifs',
      formats: ['glass'],
    },
  },
  products: {
    beers: [
      { label: 'Anosteke', prices: { '25': 3.5, '33': 4.5, '50': 5.5 } },
      { label: 'IPA', prices: { '25': 3.5, '50': 5.5 } },
      { label: 'BeetNJuice', prices: { '25': 3.5, '33': 4.5, '50': 5.5 } },
      { label: 'Gros Stout', prices: { '25': 5.5 } },
      { label: 'Cidre', prices: { '25': 3.5, '33': 4.5, '50': 5.5 } },
    ],
    wines: [
      { label: 'Le rouge', prices: { glass: 4.5, bottle: 30 } },
      { label: 'le blanc', prices: { glass: 4.5, bottle: 30 } },
      { label: 'la surprise', prices: { glass: 4.5, bottle: 30 } },
      { label: 'Cidre', prices: { glass: 4.5, bottle: 30 } },
    ],
    hards: [
      { label: 'Negroni', prices: { glass: 8 } },
      { label: 'Armagnac', prices: { glass: 8 } },
      { label: 'Liqueur de prune', prices: { glass: 8 } },
    ],
  },
};
