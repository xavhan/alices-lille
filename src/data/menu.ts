import type {
  Beer,
  Wine,
  Cocktail,
  Spirit,
  Soft,
  FoodItem,
} from 'src/data/typesypes';
export const taps: Beer[] = [
  {
    label: 'Pills - la Bise 5º4',
    brewery: 'Duyck',
    prices: {
      25: 3,
      50: 5,
    },
  },
  {
    label: 'Blonde - LIL Blonde 5º',
    brewery: 'Gobrecht',
    prices: {
      25: 3.5,
      50: 6.5,
    },
  },
  {
    label: 'IPA - Poule mouilée 6°5',
    brewery: 'Tandem',
    prices: {
      25: 3.8,
      50: 7,
    },
  },
  {
    label: "AMBRÉE - MONGY d'hiver 8°",
    brewery: 'Cambier',
    prices: {
      25: 4.4,
      50: 8,
    },
  },
  {
    label: 'Biere Spéciale',
    brewery: 'Pépite à venir découvrir au bar',
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
    label: 'Bière du moment',
    prices: { 33: 7 },
    brewery: 'Brasserie des Singes Savants',
  },
  {
    label: 'TRAPPISTE - Rochefort triple 8º1',
    prices: { 33: 6 },
    brewery: 'Abbaye de Rochefort',
  },
  {
    label: 'GUEUZE 75cl',
    prices: { 33: 30 },
    brewery: 'Brasserie Cantillon',
  },
  {
    label: 'SANS GLUTEN - Blonde / Ambrée',
    prices: { 33: 5.3 },
    brewery: 'Brunehaut',
  },
  {
    label: 'blonde SANS Alcool - Pico 0,3°',
    prices: { 33: 5 },
    brewery: 'Brussel Beer project',
  },
  { label: 'CIDRE - Brut', prices: { 33: 5.3 }, brewery: 'Appie' },
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
    prices: { 12: 5.5 },
  },
  {
    label: 'VIN ROUGE TANNIQUE',
    grapes: 'Cabernet franc, merlot',
    estate: 'Domaine Daniel & Nicolas Roux',
    prices: { 12: 6 },
  },
  {
    label: 'VIN BLANC MINERAL ',
    grapes: 'Folle blanche',
    estate: 'Domaine Luneau-Papin',
    prices: { 12: 7 },
  },
  {
    label: 'VIN BLANC FRUITÉ',
    grapes: 'Chardonnay, viognier',
    estate: 'Domaine de la Croix Gratiot',
    prices: { 12: 7.5 },
  },
  {
    label: 'MOELLEUX',
    grapes: 'Gros manseng, petit manseng',
    estate: 'Domaine Seailles',
    prices: { 12: 7.5 },
  },
  {
    label: 'SURPRISE',
    text: 'Pépite à venir découvrir',
    prices: { 12: 8.5 },
  },
  {
    label: 'CHAMPAGNE BOUtEILLE 75CL',
    grapes: 'PINOT MEUNIER',
    estate: 'Champagne André Heucq',
    prices: { 75: 55 },
  },
  {
    label: 'Champagne bouteille 75cl',
    grapes: 'CHARDONNAY, MEUNIER, PINOT NOIR',
    estate: 'Champagne André Heuck',
    prices: { 75: 80 },
  },
];

export const cocktails: Cocktail[] = [
  {
    label: 'DARK & STORMY',
    composition: 'Rhum, ginger beer, citron',
    prices: { 12: 10 },
  },
  {
    label: 'NEGRONI',
    composition: 'Gin, Campari, Vermouth',
    prices: { 12: 9 },
  },
  {
    label: 'WHITE RUSSIAN',
    composition: 'Vodka, café, mousse de lait',
    prices: { 12: 9 },
  },
  {
    label: 'PALOMA',
    composition: 'Tequila, pamplemousse, citron',
    prices: { 12: 10 },
  },
  {
    label: 'IRISH COFFEE',
    composition: 'whisky, café, chantilly',
    prices: { 12: 8 },
  },
  {
    label: 'GIMLET',
    composition: "Gin infusé feuille de clémentine, citron, cordial d'agrumes",
    prices: { 12: 10 },
  },
];

export const spirits: Spirit[] = [
  {
    label: 'RHUM KIRK AND SWEENEY RESERVA',
    description: 'santiago de los caballeros ',
    degree: 40,
    prices: { 12: 9 },
  },
  {
    label: 'RHUM BULLION',
    description: 'four square distillery ',
    degree: 40,
    prices: { 12: 11 },
  },
  {
    label: 'WHISKY BULLEIT BOURBON',
    description: 'Frontier Whiskey',
    degree: 45,
    prices: { 12: 7 },
  },
  {
    label: 'WHISKY COFFEY GRAIN',
    description: 'Nikka',
    degree: 45,
    prices: { 12: 9 },
  },
  {
    label: 'SCOTCH ISLAY SINGLE MALT',
    description: 'Port Charlotte',
    degree: 50,
    prices: { 12: 12 },
  },
  {
    label: 'CALVADOS',
    description: 'Christian Drouin ',
    degree: 40,
    prices: { 12: 8 },
  },
  {
    label: 'MIRABELLE VIEILLE RESERVE',
    description: 'Rozelieures',
    degree: 45,
    prices: { 12: 9 },
  },
  {
    label: 'HOULLE',
    description: 'Genièvre Flandre Artois',
    degree: 42,
    prices: { 12: 11 },
  },
];
export const softs: Soft[] = [
  { label: 'Jus de Pomme', prices: { 33: 3.5 } },
  { label: 'Jus de Pomme/Gingembre', prices: { 33: 3.5 } },
  { label: 'Jus de Pamplemousse', prices: { 33: 3.5 } },
  { label: 'Limo nature', prices: { 33: 4.3 } },
  { label: 'Limo fleur de sureau', prices: { 33: 4.3 } },
  { label: 'Meuh Cola', prices: { 33: 4.3 } },
  { label: 'Kombucha gingembre', prices: { 33: 4.5 } },
  { label: 'Club Maté', prices: { 33: 4.5 } },
  { label: 'Sirop Citron', prices: { 33: 2.5 } },
  { label: 'Sirop Framboise/Mure', prices: { 33: 2.5 } },
  { label: 'Eau Gazeuse celtic', prices: { 33: 3 } },
];
export const food: FoodItem[] = [
  {
    label: "Tartinade à l'unité du moment",
    prices: { 200: 12 },
  },
];
