import type { Beer, Wine, Cocktail, Spirit, Soft, FoodItem } from './types';
export const taps: Beer[] = [
  {
    type_label: 'Pils',
    label: 'la Bise',
    brewery: 'Duyck',
    price: {
      25: 3,
      50: 5,
    },
    abv: 5.4,
    availability: ['winter2022', 'spring2022'],
  },
  {
    type_label: 'Blonde',
    label: 'LIL Blonde',
    brewery: 'Gobrecht',
    price: {
      25: 3.5,
      50: 6.5,
    },
    abv: 5.5,
    disabled: true,
    availability: ['winter2022', 'spring2022'],
  },
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
  {
    type_label: 'IPA',
    label: 'Poule mouilée',
    brewery: 'Tandem',
    price: {
      25: 3.8,
      50: 7,
    },
    abv: 6.5,
    availability: ['winter2022', 'spring2022'],
  },
  {
    type_label: 'Belgian IPA',
    label: 'XX Bitter',
    brewery: 'De Ranke',
    price: {
      25: 3.8,
      50: 7,
    },
    abv: 6.2,
    disabled: true,
    availability: ['spring2022'],
  },
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
  {
    label: 'Free Bird',
    brewery: 'Le singe savant',
    price: {
      25: 4.8,
      50: 8.5,
    },
    disabled: true,
  },
  {
    label: 'Spring Sin',
    abv: 5.8,
    brewery: 'Le singe savant',
    price: {
      25: 4.8,
      50: 8.5,
    },
  },
  {
    label: 'Bandicot',
    brewery: 'Le singe savant',
    disabled: true,
    price: {
      25: 4.8,
      50: 8.5,
    },
  },
];

export const bottles: Beer[] = [
  {
    type_label: 'Sour',
    label: 'Phi rabarber',
    price: 8,
    abv: 8,
    brewery: 'Brasserie alvinne',
  },
  {
    label: 'Bières du moment',
    price: 7,
    brewery: 'Singe Savant, Hub, Cambier...',
  },
  {
    type_label: 'Trappiste',
    label: 'Westmalle tripel',
    price: 6,
    abv: 9.5,
    brewery: 'Abbaye de Westmalle',
  },
  {
    type_label: 'Trappiste',
    label: 'Rochefort triple',
    price: 6,
    abv: 8.1,
    brewery: 'Abbaye de Rochefort',
  },
  {
    type_label: 'Gueuze',
    label: 'GUEUZE 75cl',
    price: 30,
    brewery: 'Brasserie Cantillon',
    disabled: true,
    availability: ['winter2022'],
  },
  {
    type_label: 'Sans Gluten',
    label: 'Blonde / Ambrée',
    price: 5.3,
    brewery: 'Brunehaut',
  },
  {
    label: 'Bière sans Alcool',
    price: 5,
    brewery: 'BBP / La débauche',
  },
  { label: 'CIDRE - Brut', price: 5.3, brewery: 'Appie' },
];

export const shooters = [
  { label: 'Vodka Airelles Sauge' },
  { label: 'Rhum Poires Épices' },
];

export const wines: Wine[] = [
  {
    label: 'VIN ROUGE GLOUGLOU',
    grapes: 'cinsault, syrah',
    estate: 'Domaine Guillaume Armand',
    price: 5.5,
    availability: ['winter2022'],
  },
  {
    label: 'VIN ROUGE GLOUGLOU',
    grapes: 'Merlot, Carignan',
    estate: 'Domaine Henri et Théophile Milan',
    price: 5.5,
    availability: ['spring2022'],
  },
  {
    label: 'VIN ROUGE TANNIQUE',
    grapes: 'Cabernet franc, merlot',
    estate: 'Domaine Daniel & Nicolas Roux',
    price: 6,
    availability: ['winter2022', 'spring2022'],
  },
  {
    label: 'VIN BLANC MINERAL ',
    grapes: 'Muscadet',
    estate: 'Domaine Luneau-Papin',
    price: 7,
    availability: ['winter2022', 'spring2022'],
  },
  // {
  //   label: 'VIN BLANC FRUITÉ',
  //   grapes: 'Chardonnay, viognier',
  //   estate: 'Domaine de la Croix Gratiot',
  //   price: 7.5,
  //   availability: ['winter2022', 'spring2022'],
  // },
  {
    label: 'VIN BLANC FRUITÉ',
    grapes: 'Chenin, sauvignon',
    estate: 'Domaine Clément Barault',
    price: 7.5,
    availability: ['spring2022'],
  },
  {
    label: 'VIN ROSÉ',
    grapes: 'Syrah, Cinsault',
    estate: 'Domaine Henri et Théophile Milan',
    price: 7.5,
    availability: ['spring2022'],
  },
  {
    label: 'MOELLEUX',
    grapes: 'Gros manseng, petit manseng',
    estate: 'Domaine Seailles',
    price: 7.5,
    availability: ['winter2022', 'spring2022'],
  },
  {
    label: 'Pétillant Naturel',
    grapes: 'Chenin',
    estate: 'Domaine Lise et Bertrand Jousset',
    price: 9,
    availability: ['spring2022'],
  },
  {
    label: 'SURPRISE',
    text: 'Pépite à venir découvrir',
    price: 8.5,
    highlight: true,
  },
  {
    label: 'CHAMPAGNE BOUtEILLE 75CL',
    grapes: 'PINOT MEUNIER',
    estate: 'Champagne André Heucq',
    price: 55,
    availability: ['winter2022', 'spring2022'],
  },
  {
    label: 'Champagne bouteille 75cl',
    grapes: 'CHARDONNAY, MEUNIER, PINOT NOIR',
    estate: 'Champagne André Heuck',
    price: 80,
    availability: ['winter2022', 'spring2022'],
  },
];

export const cocktails: Cocktail[] = [
  {
    label: 'DARK & STORMY',
    composition: 'Rhum, ginger beer, citron',
    price: 10,
    availability: ['winter2022'],
  },
  {
    label: 'NEGRONI',
    composition: 'Gin, Campari, Vermouth',
    price: 9,
    availability: ['winter2022'],
  },
  {
    label: 'WHITE RUSSIAN',
    composition: 'Vodka, café, mousse de lait',
    price: 9,
    availability: ['winter2022'],
  },
  {
    label: 'PALOMA',
    composition: 'Tequila, pamplemousse, citron',
    price: 10,
    availability: ['winter2022'],
  },
  {
    label: 'IRISH COFFEE',
    composition: 'whisky, café, chantilly',
    price: 8,
    availability: ['winter2022'],
  },
  {
    label: 'GIMLET',
    composition: "Gin infusé feuille de clémentine, citron, cordial d'agrumes",
    price: 10,
    availability: ['winter2022'],
  },
  {
    label: "Général Clem'to",
    composition: "Cordial d'agrumes, pamplemousse, citron, tonic",
    virgin: true,
    price: 6,
    availability: ['winter2022'],
  },
  {
    label: 'MOSCOW MULE',
    composition: 'Vodka, Cordial de gingembre, Ginger Beer, Citron',
    price: 10,
    availability: ['spring2022'],
  },
  {
    label: 'NEGRONI BLANC',
    composition: 'Gin, Suze, Vermouth Dry, Sherry Fino',
    price: 9,
    availability: ['spring2022'],
  },
  {
    label: 'El Diablo',
    composition: 'Tequila, Crème de Cassis, Citron, Ginger Beer, Piment',
    price: 9,
    availability: ['spring2022'],
  },
  {
    label: 'Old Fashioned',
    composition: 'Bourbon, Angostura Bitter, Sucre',
    price: 8,
    availability: ['spring2022'],
  },
  {
    label: 'Espresso Martini',
    composition: 'Vodka, Liqueur de Café, Espresso',
    price: 10,
    availability: ['spring2022'],
  },
  {
    label: 'Clear Milk Punch',
    composition: 'Rhum, Argousier, Thé noir, Miel, Citron, Lait',
    price: 9,
    availability: ['spring2022'],
  },
  {
    label: 'Mocktail - Sans Alcool',
    composition: 'En fonction des produits de saison',
    price: 6.5,
  },
];

export const spirits: Spirit[] = [
  {
    label: 'RHUM KIRK AND SWEENEY RESERVA',
    description: 'santiago de los caballeros ',
    abv: 40,
    price: 9,
  },
  {
    label: 'RHUM BULLION',
    description: 'four square distillery ',
    abv: 40,
    price: 11,
  },
  {
    label: 'WHISKY BULLEIT BOURBON',
    description: 'Frontier Whiskey',
    abv: 45,
    price: 7,
  },
  {
    label: 'WHISKY COFFEY GRAIN',
    description: 'Nikka',
    abv: 45,
    price: 9,
  },
  {
    label: 'SCOTCH ISLAY SINGLE MALT',
    description: 'Port Charlotte',
    abv: 50,
    price: 12,
  },
  {
    label: 'CALVADOS',
    description: 'Christian Drouin ',
    abv: 40,
    price: 8,
  },
  {
    label: 'MIRABELLE VIEILLE RESERVE',
    description: 'Rozelieures',
    abv: 45,
    price: 9,
  },
  {
    label: 'HOULLE',
    description: 'Genièvre Flandre Artois',
    abv: 42,
    price: 11,
  },
];
export const softs: Soft[] = [
  { label: 'Jus de Pomme', price: 3.5 },
  { label: 'Jus de Pomme/Rhubarbe', price: 3.5 },
  { label: 'Jus de Pamplemousse', price: 3.5, disabled: true },
  { label: 'Jus de Poire', price: 3.5 },
  { label: 'Limo nature', price: 4.3 },
  { label: 'Limo fleur de sureau', price: 4.3, disabled: true },
  { label: 'Fritz Rhubarbe', price: 4.3 },
  { label: 'Meuh Cola', price: 4.3 },
  { label: 'Kombucha gingembre', price: 4.5, disabled: true },
  { label: 'Frênette', price: 4.5 },
  { label: 'Club Maté', price: 4.5 },
  { label: 'Sirop Citron', price: 2.5 },
  { label: 'Sirop Framboise/Mure', price: 2.5 },
  { label: 'Eau Gazeuse Celtic', price: 3 },
];
export const food: FoodItem[] = [
  {
    label: 'Gros pot de tartinade du moment (200g)',
    price: 12,
  },
  {
    label: 'Petit pot de tartinade du moment (100g)',
    price: 6,
  },
];
