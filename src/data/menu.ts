import { BEERS } from './beers';
import type { Cocktail, Coffee, FoodItem, Soft, Spirit, Wine } from './types';
export const taps = [
  'bise',
  'oiseaublanc',
  'tarasboulba',
  'pinpon',
  'speciale',
].map((slug) => BEERS.get(slug));
export const bottles = [
  'bieresdumoment',
  'rochefort8',
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
    text: 'En fonction des bouteilles du moment',
    price: 6,
  },
  {
    label: 'VIN ROUGE TANNIQUE',
    text: 'Accord tacite entre tanin et astringence',
    price: 6.5,
  },
  {
    label: 'VIN BLANC GLOUGLOU',
    text: 'Bien sec ça ce boit si bien',
    price: 7,
  },
  {
    label: 'VIN BLANC du printemps',
    text: '💣 de fruits sans sucre !!',
    price: 7.5,
  },
  {
    label: 'MOELLEUX',
    text: 'Doux mais pas trop sucré',
    price: 7.5,
  },
  {
    label: 'SURPRISE',
    text: 'Pépite à venir découvrir',
    price: 8.5,
  },
  {
    label: 'Pétillant Naturel',
    text: "Petnat' du mois",
    price: 8,
    highlight: true,
  },
  {
    label: 'CHAMPAGNE BOUtEILLE 75CL',
    grapes: 'PINOT MEUNIER',
    estate: 'Champagne André Heucq',
    price: 55,
  },
];

export const cocktails: Cocktail[] = [
  {
    label: 'Amaretto Sour',
    composition: 'Amaretto, sucre, citron, Angostura',
    price: 7,
    vegan: true,
    everyday: true,
  },
  {
    label: 'Rome with a view',
    composition: 'campari, vermouth extra dry, citron',
    price: 7,
    everyday: true,
  },
  {
    label: 'Bramble',
    composition: 'gin, mûre, citron, Liqueur de mûre',
    price: 8,
    everyday: true,
  },
  {
    label: 'Dark & stormy',
    composition: 'rhum ambré, ginger beer, citron & more',
    price: 9,
    everyday: true,
  },
  {
    label: 'Paddigfigue',
    composition:
      'rhum, confiture de figue, lillet, pamplemousse, dash d’absinthe',
    price: 10,
    everyday: true,
    disabled: true,
  },
  {
    label: 'Clear milk punch #2',
    composition: 'Mezcal, poire, girole, quinine',
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
    price: 8,
    everyday: true,
  },
  {
    label: 'Negroni',
    composition: 'Gin, Campari, Vermouth',
    price: 9,
    everyday: true,
  },
  {
    label: 'Negroni Mezcal',
    composition: 'Mezcal, Campari, Vermouth',
    price: 12,
    everyday: true,
  },
  {
    label: 'Carafe du moment',
    composition: 'Surprises de saison',
    price: 30,
    everyday: true,
  },
  {
    label: 'Baby dirty martini',
    composition: 'Gin infusé du moment, Vermouth extra dry',
    price: 6.5,
    everyday: true,
  },
  {
    label: 'Mojito',
    composition: 'Menthe, citron, Rhum ambré, eau pétillante',
    price: 8,
    everyday: true,
  },
  {
    label: 'WHITE RUSSIAN',
    composition: 'Vodka, café, mousse de lait',
    price: 9,
    everyday: true,
    disabled: true,
  },
  {
    label: 'Paloma',
    spicy: true,
    composition: 'Tequila, pamplemousse, citron, piment (ou pas)',
    price: 10,
    everyday: true,
  },
  {
    label: 'Pamela',
    composition: 'Tequila, pamplemousse, citron, Fleur oranger, Miel',
    price: 10,
    everyday: true,
    disabled: true,
  },
  {
    label: 'Irish Coffee',
    composition: 'whisky, café, chantilly',
    price: 7.5,
    everyday: true,
    disabled: true,
  },
  {
    label: 'GIMLET',
    composition: "Gin infusé feuille de clémentine, citron, cordial d'agrumes",
    price: 9,
    everyday: true,
    disabled: true,
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
    spicy: true,
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
  {
    label: 'Aviation',
    composition: 'Gin, Liqueur de violette, Marasquin, Citron',
    price: 8,
    everyday: true,
  },
  {
    label: 'Daiquiri Cacahuète',
    composition: 'Rhum infusé cacahuètte, citron vert, sucre',
    price: 8,
    everyday: true,
    disabled: true,
  },
  {
    label: 'Gin Fizz',
    composition: 'Gin, citron, sucre, eau gazeuse',
    price: 8,
    everyday: true,
  },
  {
    label: 'Last Word',
    composition: 'Gin, Chartreuse, Marasquin, Citron',
    price: 10,
    everyday: true,
  },
  {
    label: 'Whisky Sour',
    vegan: true,
    composition: 'Whisky, Sucre, Citron, Angostura',
    price: 9,
    everyday: true,
  },
  {
    label: 'Champs-Élysées',
    composition:
      'Jus de citron, Sirop de sucre, Chartreuse verte, Cognac, Angostura',
    price: 10,
    everyday: true,
  },
  {
    label: 'Negroni Sbagliato',
    composition: 'Campari, Vermouth Rouge, Prosecco, Orange',
    price: 8,
    everyday: true,
  },
  {
    label: 'Penicilin',
    composition:
      'Gingembre, Sirop de miel, Jus de citron, Whisky scotch, Islay',
    price: 11,
    everyday: true,
  },
  {
    label: 'Vieux Carré',
    composition: 'Cognac, Rye Whisky, Vermouth, Benedictine & more',
    price: 11,
    everyday: true,
  },
  {
    label: 'New York Sour',
    composition: 'bourbon, sucre, citron, vin rouge',
    price: 9,
    everyday: true,
    vegan: true,
  },
  //
  {
    label: 'Hemingway Daïquiri',
    composition: 'rhum blanc, liqueur de marasquin, pamplemousse, citron vert',
    price: 9,
    everyday: true,
  },
  {
    label: 'Clover & Alex',
    composition: 'gin, citron, liqueur de framboise, prosecco',
    price: 8,
    everyday: true,
  },
  {
    label: 'Spritz Campari',
    composition: 'Campari, Prosecco, eau pétillante',
    price: 7,
    everyday: true,
  },
  {
    label: 'Limoncello Spritz',
    composition: 'Limoncello maison, prosecco, eau pétillante',
    price: 8,
    everyday: true,
  },
  {
    label: 'Naked & Famous',
    composition: 'Mezcal, Chartreuse, Campari, Citron',
    price: 11,
    everyday: true,
  },
  {
    label: 'Inna Di Yard',
    composition: 'rhum blanc, suze, orgeat, citron',
    price: 8,
    everyday: true,
  },
  {
    label: 'Suze Tonic',
    composition: 'de la suze et du tonic',
    price: 7,
    everyday: true,
  },
  {
    label: 'Rhubarbe Fizz',
    composition: 'gin, sirop rhubarbe, citron, eau pétillante',
    price: 8,
    everyday: true,
    disabled: true,
  },
  {
    label: 'Spicy Margarita',
    spicy: true,
    composition: 'Tequila, Agave, Citron, Sel au piment',
    price: 10,
    everyday: true,
  },
];

export const spirits: Spirit[] = [
  {
    label: 'RHUM KIRK AND SWEENEY RESERVA',
    description: 'santiago de los caballeros 🇩🇴',
    abv: 40,
    price: 9,
    disabled: true,
  },
  {
    label: 'RHUM BULLION',
    description: 'four square distillery 🇧🇧',
    abv: 40,
    price: 11,
  },
  {
    label: 'WHISKY BULLEIT BOURBON/RYE',
    description: 'Frontier Whiskey 🇺🇸',
    abv: 45,
    price: 7,
  },
  {
    label: 'WHISKY COFFEY GRAIN',
    description: 'Nikka 🇯🇵',
    abv: 45,
    price: 9,
  },
  {
    label: 'SCOTCH ISLAY SINGLE MALT',
    description: 'Port Charlotte 🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    abv: 50,
    price: 12,
  },
  {
    label: 'CALVADOS',
    description: 'Christian Drouin 🇫🇷',
    abv: 40,
    price: 8,
    disabled: true,
  },
  {
    label: 'Menthe Pastille',
    description: 'Giffard 🇫🇷',
    abv: 24,
    price: 5,
  },
  {
    label: 'MIRABELLE VIEILLE RESERVE',
    description: 'Rozelieures 🇫🇷',
    abv: 45,
    price: 9,
    disabled: true,
  },
  {
    label: 'HOULLE',
    description: 'Genièvre Flandre Artois 🇫🇷',
    abv: 42,
    price: 11,
  },
  {
    label: 'Tequila Anejo',
    description: 'Calle 23 🇲🇽/🇫🇷',
    abv: 40,
    price: 11,
  },
];
export const coffee: Coffee[] = [
  {
    label: 'espresso',
    price: 2.2,
  },
  {
    label: 'double',
    price: 3.5,
  },
  {
    label: 'allongé',
    price: 3,
  },
  {
    label: 'cappuccino',
    price: 4,
    description: '1 café + cacao + lait + mousse de lait',
  },
  {
    label: 'latte',
    price: 4.3,
    description: '1 café + lait + mousse de lait',
  },
  {
    label: 'flat white',
    price: 4.5,
    description: '2 cafés + lait + mousse de lait',
  },
  {
    label: 'moccha ',
    price: 5,
    description: ' 1 café + chocolat + lait + mousse de lait',
  },
  // {
  //   label: 'CAFÉ FRAPPÉ',
  //   price: 4,
  // },
  {
    label: 'CHOCOLAT CHAUD',
    price: 5,
  },
  {
    label: 'CHOCOLAT CHAUD + CHANTILLY',
    price: 5.5,
  },
  {
    label: 'CHOCOLAT CHAUD + ALCOOL',
    price: 6,
  },
  {
    label: 'Thé vert rose - orange - mangue',
    price: 4,
  },
  {
    label: 'Thé vert grand jasmin',
    price: 4,
  },
  {
    label: 'Thé noir earl grey, bergamote',
    price: 4,
  },
  {
    label: 'Thé vert fleur d’oranger, menthe',
    price: 4,
  },
  {
    label: 'Thé rooibos vanille',
    price: 4,
  },
  {
    label: 'Tisane camomille, tilleul, lavande',
    price: 4,
  },
  {
    label: 'Thé de L’HIVER ORANGE - CANNELLE - AMAMDE',
    price: 4,
  },
  {
    label: 'chaï (thé d’épices + lait avoine) ',
    price: 4.5,
  },
];

export const softs: Soft[] = [
  { label: 'Jus de Pomme', price: 3.5 },
  { label: 'Jus de Poire', price: 3.5 },
  { label: 'Jus de Pomme/Rhubarbe', price: 3.5 },
  { label: 'Jus de Pomme/Cassis', price: 3.5, disabled: true },
  { label: 'Jus de Pamplemousse', price: 3.5, disabled: true },
  { label: 'Limo nature', price: 4.3 },
  { label: 'Limo mirabelle', price: 4.3 },
  { label: 'Limo rhubarbe', price: 4.3 },
  { label: 'Limo fleur de sureau', price: 4.3, disabled: true },
  { label: 'Fritz Cola sans sucre', price: 4.3 },
  { label: 'Meuh Cola', price: 4.3, disabled: true },
  { label: 'Kombucha', price: 4.6 },
  { label: 'Club Maté', price: 4.6 },
  { label: 'Thé glacé maison 🥶', price: 4 },
  { label: 'Café frappé 🥶', price: 4 },
  { label: 'Sirop Citron', price: 2.5 },
  { label: 'Sirop Grenadine', price: 2.5 },
  { label: 'Sirop Menthe', price: 2.5 },
  { label: 'Sirop Orgeat', price: 2.5 },
  { label: 'Eau Gazeuse Celtic', price: 3 },
];
export const food: FoodItem[] = [
  {
    label: 'Pot de tartinade du moment (150g)',
    price: 9,
  },
  {
    label: 'Olives',
    price: 2.5,
  },
];
