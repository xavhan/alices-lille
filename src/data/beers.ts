import type { Beer } from './types';

export const BEERS = new Map<string, Beer>([
  [
    'bise',
    {
      type_label: 'Pils',
      slug: 'bise',
      label: 'La bise',
      brewery: 'Duyck',
      price: {
        25: 3.5,
        50: 5.5,
      },
      abv: 5.4,
    },
  ],
  [
    'pinpon',
    {
      type_label: 'Saison',
      slug: 'pinpon',
      label: 'Pin Pon',
      brewery: 'Tandem',
      price: {
        25: 4,
        50: 7.5,
      },
      abv: 7,
    },
  ],
  [
    'etoiledunord',
    {
      type_label: 'Saison',
      slug: 'etoiledunord',
      label: 'Étoile du Nord',
      brewery: 'Thiriez',
      price: {
        25: 3.5,
        50: 6.5,
      },
      abv: 5.5,
    },
  ],
  [
    'thirieztriple',
    {
      type_label: 'Triple',
      slug: 'thirieztriple',
      label: 'Thiriez Triple',
      brewery: 'Thiriez',
      price: {
        25: 4.2,
        50: 8,
      },
      abv: 8.5,
    },
  ],
  [
    'biseblanche',
    {
      label: 'La Bise Blanche',
      brewery: 'Duyck',
      price: {
        25: 3.6,
        50: 6.5,
      },
    },
  ],
  [
    'oiseaublanc',
    {
      label: 'Oiseau Blanc',
      type_label: 'Blanche',
      brewery: 'Brasserie du grand Paris',
      abv: 4.5,
      price: {
        25: 3.6,
        50: 6.5,
      },
    },
  ],
  [
    'pascap',
    {
      type_label: 'Triple',
      label: 'Pas Cap',
      brewery: 'Tandem',
      price: {
        25: 4.2,
        50: 8,
      },
      abv: 8,
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
    },
  ],
  [
    'tarasboulba',
    {
      type_label: 'IPA',
      label: 'Taras Boulba',
      brewery: 'Brasserie de la Senne',
      price: {
        25: 3.8,
        50: 7,
      },
      abv: 4.5,
    },
  ],
  [
    'zinnebir',
    {
      type_label: 'Blonde',
      label: 'Zinnebir',
      brewery: 'Brasserie de la Senne',
      price: {
        25: 3.8,
        50: 7,
      },
      abv: 5.8,
    },
  ],
  [
    'greenkiller',
    {
      type_label: 'IPA',
      label: 'Green Killer',
      brewery: 'Brasserie Silly',
      price: {
        25: 3.7,
        50: 6.9,
      },
      abv: 6.5,
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
    },
  ],
  [
    'mongyambree',
    {
      type_label: 'Ambrée',
      label: 'MONGY',
      brewery: 'Cambier',
      price: {
        25: 4.2,
        50: 8,
      },
      abv: 8,
    },
  ],
  [
    'mongytriple',
    {
      type_label: 'Triple',
      label: 'MONGY',
      brewery: 'Cambier',
      price: {
        25: 4.2,
        50: 8,
      },
      abv: 8,
    },
  ],
  [
    'bellenaert',
    {
      type_label: 'Triple',
      label: 'bellenaert',
      brewery: 'bellenaert',
      price: {
        25: 4.2,
        50: 8,
      },
      abv: 8,
    },
  ],
  [
    'winterpepper',
    {
      type_label: 'Ambrée',
      label: 'Winter Pepper',
      brewery: 'Thiriez',
      price: {
        25: 4.2,
        50: 8,
      },
      abv: 7,
    },
  ],
  [
    'mongyipa',
    {
      type_label: 'IPA',
      label: 'MONGY',
      brewery: 'Cambier',
      price: {
        25: 4,
        50: 7.5,
      },
      abv: 6,
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
    'appie',
    {
      label: 'Cidre',
      brewery: 'Appie',
      abv: 5,
      price: {
        25: 4,
        50: 7.5,
      },
    },
  ],
  [
    'lesauvage',
    {
      label: 'Cidre - Le Sauvage',
      brewery: 'Fils de pomme',
      abv: 5.5,
      price: {
        25: 4,
        50: 7.5,
      },
    },
  ],
  [
    'speciale',
    {
      slug: 'speciale',
      label: 'Bière Spéciale',
      brewery: 'Brasserie du singe savant ou autres copains',
      price: {
        25: 4.5,
        50: 8.5,
      },
    },
  ],
  [
    'lesingesavant',
    {
      slug: 'lesingesavant',
      label: 'Le singe savant',
      brewery: 'Le fut change toute les semaines',
      price: {
        25: 4.5,
        50: 8.5,
      },
      about: {
        title: 'Le singe savant',
        description: [
          `Le Singe savant est une micro-brasserie urbaine, située à Lille dans le quartier de Moulins.`,
          `Ils mettent un point d'honneur à travailler au maximum avec des matières premières biologiques, privilégient les circuits courts tout en reduisant autant que possible les déchets produits.`,
          `Leur gamme est composée de recettes permanantes et exploratoires.`,
          `Vous pouvez les retrouver dans leur brasserie au 134 rue d'Arras à Lille.`,
        ].join('\n\n'),
        imageSrc: `/images/beers/singesavant.jpg`,
        links: [
          {
            label: 'Le site officiel',
            href: 'https://www.singe-savant.com/',
          },
          {
            label: 'Insta',
            href: 'https://www.instagram.com/singesavantbrew/',
          },
          {
            label: 'Facebook',
            href: 'https://www.facebook.com/brasserie.singe.savant/',
          },
        ],
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
      brewery: 'Singe Savant, Nautile, Cambier...',
    },
  ],
  [
    'westmalletripel',
    {
      type_label: 'Trappiste',
      label: 'Westmalle tripel',
      price: 6.3,
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
    'trappiste',
    {
      type_label: 'Trappiste',
      label: 'Trappiste',
      price: 6.3,
      brewery: 'Abbaye',
    },
  ],
  [
    'rochefort8',
    {
      type_label: 'Trappiste',
      label: 'Rochefort 8',
      price: 6.3,
      abv: 9.2,
      brewery: 'Abbaye de Rochefort',
    },
  ],
  [
    'hazy',
    {
      type_label: 'Sour',
      label: 'Hazy Diamond',
      price: 7,
      abv: 5,
      brewery: 'La débauche',
      disabled: true,
    },
  ],
  [
    'gueuzecantillon',
    {
      type_label: 'Gueuze',
      label: 'GUEUZE 75cl',
      price: 30,
      brewery: 'Brasserie Cantillon',
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
      price: 6,
      brewery: 'Pico Nova ou Trottinette',
    },
  ],
  ['appiecider', { label: 'CIDRE - Brut', price: 6, brewery: 'Appie' }],
  ['fdp', { label: 'CIDRE - Brut', price: 6, brewery: 'Fils de Pomme' }],
  ['appiepoire', { label: 'POIRÉ - Brut', price: 6, brewery: 'Appie' }],
]);
