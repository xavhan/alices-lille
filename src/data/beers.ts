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
        25: 3,
        50: 5,
      },
      abv: 5.4,
    },
  ],
  [
    'biseblanche',
    {
      label: 'La Bise Blanche',
      brewery: 'Duyck',
      price: {
        25: 3.5,
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
        25: 4.4,
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
      type_label: 'Blonde',
      label: 'Taras Boulba',
      brewery: 'Brasserie de la Senne',
      price: {
        25: 3.5,
        50: 6.5,
      },
      abv: 4.5,
    },
  ],
  [
    'poulemouillee',
    {
      type_label: 'IPA',
      label: 'Poule mouillée',
      brewery: 'Tandem',
      price: {
        25: 4,
        50: 7.3,
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
        25: 4.2,
        50: 7.5,
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
        25: 4.8,
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
    'hazy',
    {
      type_label: 'Sour',
      label: 'Hazy Diamond',
      price: 7,
      abv: 5,
      brewery: 'La débauche',
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
      label: 'Blonde / Blanche',
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
  ['appiepoire', { label: 'POIRÉ - Brut', price: 5.3, brewery: 'Appie' }],
]);
