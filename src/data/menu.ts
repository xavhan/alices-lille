import { BEERS } from './beers';
import type { Cocktail, Coffee, FoodItem, Soft, Spirit, Wine } from './types';
export const taps = [
  'bise',
  'quidam',
  'lesauvage',
  'mongytriple',
  'speciale',
].map((slug) => BEERS.get(slug));

export const shooters = [
  { label: 'Vodka Airelles Sauge' },
  { label: 'Rhum Poires Épices' },
];

export const wines: Wine[] = [
  {
    label: 'VIN ROUGE FRUITÉ',
    text: 'Full glouglou',
    price: 6,
  },
  {
    label: 'VIN ROUGE CORSÉ',
    text: "Du corps, du fruit et un peu d'astringence",
    price: 6.5,
  },
  // {
  //   label: 'VIN ROSÉ',
  //   text: 'Fruité comme une piscine en centre ville',
  //   price: 7,
  // },
  {
    label: 'VIN BLANC sec',
    text: 'Bien sec ça ce boit si bien',
    price: 7.5,
  },
  {
    label: "VIN BLANC de l'hiver",
    text: '💣 de fruits sans sucre !!',
    price: 7.5,
  },
  {
    label: 'MOELLEUX',
    text: 'Doux mais pas trop sucré',
    price: 7.5,
  },
  {
    label: 'Orange',
    text: 'Macération, acidité ou autres bizarreries, toujours fait avec talent',
    price: 8.5,
  },
  {
    label: 'Pétillant Naturel',
    text: 'Pas besoin d’une grande occasion pour boire des bulles ! Le stock change souvent',
    price: 8,
    highlight: true,
  },
  {
    label: 'CHAMPAGNE BOUtEILLE 75CL',
    grapes: 'PINOT MEUNIER',
    estate: 'Champagne André Heucq',
    price: 60,
  },
];

export const cocktails: Cocktail[] = [
  {
    label: 'Amaretto Sour',
    composition: 'Amaretto, calvados, citron, sucre',
    price: 9,
    vegan: true,
    everyday: true,
  },
  {
    label: 'Rome with a view',
    composition: 'campari, vermouth extra dry, citron',
    price: 8,
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
    label: 'Lemon drop',
    composition: 'Vodka citron, Triple sec, sucre, citron',
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
    label: 'Paddington',
    composition: 'Rhum, Marmelade, Lillet, Pamplemousse',
    price: 9,
    // everyday: true,
  },
  {
    label: 'Clear milk punch #2',
    composition: 'Mezcal, poire, girole, quinine',
    price: 9,
  },
  {
    label: 'LONDON MULE',
    composition: 'Gin, Cordial de gingembre, Ginger Beer, citron',
    price: 9,
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
    label: 'Bloody Mary (existe en baby)',
    composition: 'Vodka, Jus de tomate, Épices, Céleri',
    price: 8,
  },
  {
    label: 'Negroni',
    composition: 'Gin, Campari, Vermouth rouge',
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
    label: 'Gin tonic',
    composition: 'Gin du moment, Tonic Thomas Henry',
    everyday: true,
  },
  {
    label: 'Carafe du moment',
    composition: 'Surprises de saison',
    price: 30,
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
    composition:
      'Tequila, Jus Pamplemousse acidifié, Tonic Pamplemousse, Spray Mezcal',
    price: 10,
    everyday: true,
  },
  {
    label: 'Cocktail chaud',
    composition: 'Irish coffee, Grog, Calva Chaud, ...',
    everyday: true,
  },
  {
    label: 'Club maté vodka',
    composition: 'Du club maté, de la vodka',
    price: 9,
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
    label: 'Irish Coffee (ou  jamaican, french)',
    composition: 'whisky, café, chantilly maison',
    price: 7.5,
    everyday: true,
  },
  {
    label: 'Gimlet',
    composition: 'gin feuille de clementine, Cordial d’agrume, Citron',
    price: 9,
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
    price: 10,
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
    composition: 'Vodka, Liqueur de Café maison, Espresso Muda',
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
    price: 7,
    everyday: true,
  },
  {
    label: 'Aviation',
    composition:
      'Gin, Liqueur de violette, Citron, Liqueur de Marasquin, Cerise Marasquin',
    price: 9,
    everyday: true,
  },
  {
    label: 'Daiquiri',
    composition: 'Rhum infusé du moment, citron vert, sucre',
    price: 9,
    everyday: true,
  },
  {
    label: 'Gin Fizz',
    composition: 'Gin, citron, sucre, eau gazeuse',
    price: 8,
    everyday: true,
  },
  {
    label: 'Last Word et ses variantes',
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
    label: 'Sazerac',
    composition: 'Cognac, rye, sucre, peychaud, absinthe',
    price: 11,
    everyday: true,
  },
  {
    label: 'Pisco Sour',
    vegan: true,
    composition: 'Pisco, Citron, Sucre, Foam',
    price: 10,
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
    price: 7,
    everyday: true,
  },
  {
    label: 'Cosmo',
    composition: 'Vodka, Cointreau, Citron, Cranberry',
    price: 10,
    everyday: true,
  },
  {
    label: 'Penicillin',
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
    label: 'Clover Club',
    composition: 'Gin, Framboise, Citron, Sucre, Foam',
    price: 8,
    everyday: true,
    vegan: true,
  },
  {
    label: 'Spritz Campari ou Limoncello maison',
    composition: 'Choisis ta base, Prosecco, eau pétillante',
    price: 8,
    everyday: true,
  },
  {
    label: 'Limoncello Spritz',
    composition: 'Limoncello maison, prosecco, eau pétillante',
    price: 8,
    everyday: true,
    disabled: true,
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
  {
    label: 'Spicy Tequilaberry',
    spicy: true,
    composition: 'Tequila, triple sec, Mure, Piment agave',
    price: 10,
    everyday: true,
  },
  {
    label: 'Cloud Lily',
    vegan: true,
    composition: 'Gin, Cointreau, Liqueur de Violette, Citron',
    price: 8,
    // everyday: true,
  },
  {
    label: 'Pumpkin spice amaretto sour',
    composition: 'Amaretto, Calvados, Citron, Épices de l’automne',
    price: 8,
    disabled: true,
  },
  {
    label: 'Mai tai',
    composition: 'Rhum blanc, Rhum Ambré, Cointreau, Orgeat',
    price: 9,
    everyday: true,
  },
  {
    label: 'Manhattan',
    composition: 'Whisky, Vermouth Rouge, Angostura',
    price: 10,
    everyday: true,
  },
  {
    label: 'Closing Argument',
    composition: 'Mezcal, Chartreuse, Liqueur Marasquin, Citron',
    price: 12,
    everyday: true,
  },
  {
    label: 'Basil Smash',
    composition: 'Gin, Basilic, Citron, Sucre',
    price: 9,
    // everyday: true,
  },
  {
    label: 'French Blond',
    composition: 'Lillet, Pamplemousse, Gin, St Germain, Citron, Bitter',
    price: 10,
    everyday: true,
  },
  {
    label: 'Mezcalita',
    composition: 'Mezcal, Citron, Liqueur d’orange, Sel fumé',
    price: 12,
    everyday: true,
  },
  //
  {
    label: 'Granny Daddy',
    composition: 'Granny Smith, Lillet, Absinthe',
    price: 8,
    everyday: true,
  },
  {
    label: 'Berry Please',
    composition: 'Vodka Myrtille, Liqueur de mûre, Citron, VeganFoam',
    price: 9,
    everyday: true,
    vegan: true,
  },
  {
    label: 'Olive Dry Martini',
    composition: 'Gin Fatwash Huile d’Olive, Vermouth Dry, Saumure d’olive',
    price: 9,
    everyday: true,
  },
  {
    label: 'French Margarita',
    composition: 'Cognac, Triple Sec, Citron Jaune, (piment d’espelette 🌶️)',
    price: 12,
    everyday: true,
    spicy: true,
  },
  {
    label: 'Mezcalita',
    composition: 'Mezcal, Citron, Liqueur d’orange, Sel fumé',
    price: 12,
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
    disabled: true,
  },
  {
    label: 'WHISKY BULLEIT BOURBON/RYE',
    description: 'Frontier Whiskey 🇺🇸',
    abv: 45,
    price: 8,
  },
  {
    label: 'WHISKY COFFEY GRAIN',
    description: 'Nikka 🇯🇵',
    abv: 45,
    price: 9,
  },
  {
    label: 'scottish barley - the Classic laddie',
    description: 'Port Charlotte 🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    abv: 50,
    price: 12,
  },
  {
    label: 'CALVADOS',
    description: 'Christian Drouin 🇫🇷',
    abv: 40,
    price: 9,
  },
  {
    label: 'RHUM BAYOU',
    description: 'Louisiane 🇺🇸',
    abv: 43.4,
    price: 8,
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
    price: 4.5,
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
  //   label: 'CAFÉ Glacé',
  //   price: 4,
  // },
  {
    label: 'CHOCOLAT CHAUD',
    price: 5,
  },
  // {
  //   label: 'CHOCOLAT CHAUD + CHANTILLY',
  //   price: 5.5,
  // },
  {
    label: 'CHOCOLAT CHAUD + ALCOOL',
    price: 6,
  },
  {
    label: 'Grog',
    price: 6,
  },
  // {
  //   label: 'Irish Coffee (ou italian, jamaican, french)',
  //   price: 7.5,
  // },
  {
    label: 'Tisane',
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
  { label: 'Jus de Poire', price: 3.5, disabled: true },
  { label: 'Jus du moment', price: 3.5 },
  { label: 'Jus de Pomme/Cassis', price: 3.5, disabled: true },
  { label: 'Jus de Pamplemousse', price: 3.5, disabled: true },
  { label: 'Limo nature', price: 4.5 },
  { label: 'Limo mirabelle', price: 4.5, disabled: true },
  { label: 'Limo rhubarbe', price: 4.5 },
  { label: 'Limo fleur de sureau', price: 4.5 },
  { label: "Limo fleur d'oranger", price: 4.5, disabled: true },
  { label: 'Fritz Cola sans sucre', price: 4.5 },
  { label: 'Meuh Cola', price: 4.4, disabled: true },
  { label: 'Loven Soda', price: 5.5 },
  { label: 'Kombucha', price: 6 },
  { label: 'Club Maté', price: 6 },
  { label: 'Thé glacé maison 🥶', price: 4, disabled: true },
  { label: 'Café frappé 🥶', price: 4, disabled: true },
  { label: 'Sirop Citron', price: 2.5 },
  { label: 'Sirop Grenadine', price: 2.5 },
  { label: 'Sirop Menthe', price: 2.5 },
  { label: 'Sirop Orgeat', price: 2.5 },
  { label: 'Eau Gazeuse', price: 3 },
  { label: 'Ginger Beer', price: 4.5 },
];
export const food: FoodItem[] = [
  {
    label: 'Pot de tartinade du moment (120g)',
    price: 7,
  },
  {
    label: 'Olives',
    price: 2.5,
  },
];
