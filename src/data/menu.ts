import { BEERS } from './beers';
import type { Wine, Cocktail, Spirit, Soft, FoodItem } from './types';
export const taps = [
  'bise',
  'blanche',
  'poulemouillee',
  'appie',
  'pascap',
  'lesingesavant',
].map((slug) => BEERS.get(slug));
export const bottles = [
  'bieresdumoment',
  'rocheforttriple',
  'hazy',
  'brunehaut',
  'alcoolfree',
  'appiecider',
  'appiepoire',
  'gueuzecantillon',
].map((slug) => BEERS.get(slug));

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
    availability: ['spring2022', 'summer2022'],
  },
  {
    label: 'VIN ROUGE TANNIQUE',
    grapes: 'Cabernet franc, merlot',
    estate: 'Domaine Daniel & Nicolas Roux',
    price: 6,
    availability: ['winter2022', 'spring2022', 'summer2022'],
  },
  {
    label: 'VIN BLANC MINERAL ',
    grapes: 'Muscadet',
    estate: 'Domaine Luneau-Papin',
    price: 7,
    availability: ['winter2022', 'spring2022', 'summer2022'],
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
    availability: ['spring2022', 'summer2022'],
  },
  {
    label: 'VIN ROSÉ',
    grapes: 'Syrah, Cinsault',
    estate: 'Domaine Henri et Théophile Milan',
    price: 7.5,
    availability: ['spring2022', 'summer2022'],
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
  },
  {
    label: 'Petillant Naturel',
    text: 'Petnat du mois',
    price: 9,
    highlight: true,
  },
  {
    label: 'CHAMPAGNE BOUtEILLE 75CL',
    grapes: 'PINOT MEUNIER',
    estate: 'Champagne André Heucq',
    price: 55,
    availability: ['winter2022', 'spring2022', 'summer2022'],
  },
  {
    label: 'Champagne bouteille 75cl',
    grapes: 'CHARDONNAY, MEUNIER, PINOT NOIR',
    estate: 'Champagne André Heucq',
    price: 80,
    availability: ['winter2022', 'spring2022', 'summer2022'],
  },
];

export const cocktails: Cocktail[] = [
  {
    label: 'Rome with a view',
    composition: 'campari, vermouth extra dry, citron',
    price: 7,
    everyday: true,
  },
  {
    label: 'Bramble',
    composition: 'gin, mûre, citron, liqueur de mûre',
    price: 8,
    everyday: true,
  },
  {
    label: 'Dark & stormy',
    composition: 'rhum ambré, ginger beer, citron & more',
    price: 10,
    everyday: true,
  },
  {
    label: 'Paddigfigue',
    composition:
      'rhum, confiture de figue, lillet, pamplemousse, dash d’absinthe',
    price: 10,
    everyday: true,
  },
  {
    label: 'Clear milk punch #2',
    composition: 'mezcal, poire, girole, quinine',
    price: 9,
  },
  {
    label: 'LONDON MULE',
    composition: 'Gin, Cordial de gingembre, Ginger Beer, citron',
    price: 10,
    everyday: true,
  },
  {
    label: 'Pimm’s cup',
    composition: `Pimm’s, Ginger ale, Tellement de fruits`,
    price: 7,
    everyday: true,
  },
  {
    label: 'Margarita',
    composition: 'Tequila, Liqueur orange, Citron, Agave',
    price: 10,
    everyday: true,
  },
  {
    label: 'Bloody Mary',
    composition: 'Vodka, Jus de tomate, Épices, Céleri',
    price: 7,
    everyday: true,
  },
  {
    label: 'NEGRONI',
    composition: 'Gin, Campari, Vermouth',
    price: 9,
    everyday: true,
  },
  {
    label: 'WHITE RUSSIAN',
    composition: 'Vodka, café, mousse de lait',
    price: 9,
    everyday: true,
  },
  {
    label: 'PALOMA',
    composition: 'Tequila, pamplemousse, citron',
    price: 10,
  },
  {
    label: 'IRISH COFFEE',
    composition: 'whisky, café, chantilly',
    price: 8,
    everyday: true,
  },
  {
    label: 'GIMLET',
    composition: "Gin infusé feuille de clémentine, citron, cordial d'agrumes",
    price: 10,
    everyday: true,
  },
  {
    label: "Général Clem'to",
    composition: "Cordial d'agrumes, pamplemousse, citron, tonic",
    virgin: true,
    price: 6,
  },
  {
    label: 'Moscow Mule',
    composition: 'Vodka, Cordial de gingembre, Ginger Beer, Citron',
    price: 9,
    everyday: true,
  },
  {
    label: 'NEGRONI BLANC',
    composition: 'Gin, Suze, Vermouth Dry, Sherry Fino',
    price: 9,
    everyday: true,
  },
  {
    label: 'El Diablo',
    composition: 'Tequila, Crème de Cassis, Citron, Ginger Beer, Piment',
    price: 9,
    everyday: true,
  },
  {
    label: 'Old Fashioned',
    composition: 'Bourbon, Angostura Bitter, Sucre',
    price: 8,
    everyday: true,
  },
  {
    label: 'Espresso Martini',
    composition: 'Vodka, Liqueur de Café, Espresso',
    price: 10,
    everyday: true,
  },
  {
    label: 'Clear Milk Punch #1',
    composition: 'Rhum, Argousier, Thé noir, Miel, Citron, Lait',
    price: 9,
  },
  {
    label: 'Mocktail',
    virgin: true,
    composition: 'En fonction des produits de saison',
    price: 6.5,
    everyday: true,
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
  { label: 'Limo Rhubarbe', price: 4.3 },
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
