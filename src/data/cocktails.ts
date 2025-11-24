export type Cocktail = {
  label: string;
  composition: string;
  price?: number;
  availableEveryday?: boolean;
  vegan?: boolean;
  spicy?: boolean;
  virgin?: boolean;
};

export const AMARETTOSOUR: Cocktail = {
  label: "Amaretto Sour",
  composition: "Amaretto, Calvados, Citron, Sucre, Angostura, Vegan foam",
  price: 9,
  vegan: true,
  availableEveryday: true,
};
export const ROMEWITHAVIEW: Cocktail = {
  label: "Rome with a view",
  composition: "campari, vermouth extra dry, citron",
  price: 8,
};
export const Bramble: Cocktail = {
  label: "Bramble",
  composition: "Gin, mûre, citron, Liqueur de mûre",
  price: 9,
  availableEveryday: true,
};
export const DarkAndStormy: Cocktail = {
  label: "Dark & stormy",
  composition: "rhum ambré, ginger beer, citron & more",
  price: 9,
  availableEveryday: true,
};
export const LemonDrop: Cocktail = {
  label: "Lemon Drop",
  composition: "Vodka citron, Triple sec, sucre, citron",
  price: 10,
  availableEveryday: true,
};
export const Paddigfigue: Cocktail = {
  label: "Paddigfigue",
  composition:
    "rhum, confiture de figue, lillet, pamplemousse, dash d’absinthe",
  price: 10,
};
export const Paddington: Cocktail = {
  label: "Paddington",
  composition: "Rhum, Marmelade, Lillet, Pamplemousse",
  price: 9,
};
export const ClearMILKPUNCH2: Cocktail = {
  label: "Clear milk punch #2",
  composition: "Mezcal, poire, girole, quinine",
  price: 9,
};
export const LONDONMULE: Cocktail = {
  label: "LONDON MULE",
  composition: "Gin, Cordial de gingembre, Ginger Beer, citron",
  price: 9,
};
export const Pimmscup: Cocktail = {
  label: "Pimm’s cup",
  composition: `Pimm’s, Ginger ale, Tellement de fruits`,
  price: 7.5,
};
export const Margarita: Cocktail = {
  label: "Margarita",
  composition: "Tequila, Citron Vert, Cointreau, Agave, Piment",
  price: 11,
  availableEveryday: true,
  spicy: true,
};
export const BloodyMary: Cocktail = {
  label: "Bloody Mary (existe en baby)",
  composition: "Vodka, Jus de tomate, Épices, Céleri",
  price: 8,
};
export const Negroni: Cocktail = {
  label: "Negroni",
  composition: "Gin, Campari, Vermouth rouge",
  price: 9,
  availableEveryday: true,
};
export const NegroniMezcal: Cocktail = {
  label: "Negroni Mezcal",
  composition: "Mezcal, Campari, Vermouth",
  price: 12,
  availableEveryday: true,
};
export const Gintonic: Cocktail = {
  label: "Hendricks & Tonic",
  composition: "Gin Hendricks, Tonic Fever Tree",
  price: 11,
  availableEveryday: true,
};
export const Carafe: Cocktail = {
  label: "Carafe du moment",
  composition: "Surprises de saison",
  price: 30,
};
export const Babydirtymartini: Cocktail = {
  label: "Baby dirty martini",
  composition: "Gin infusé du moment, Vermouth extra dry",
  price: 6.5,
};
export const Mojito: Cocktail = {
  label: "Mojito",
  composition: "Menthe, citron, Rhum ambré, eau pétillante",
  price: 8,
};
export const WHITERUSSIAN: Cocktail = {
  label: "WHITE RUSSIAN",
  composition: "Vodka, café, mousse de lait",
  price: 9,
};
export const Paloma: Cocktail = {
  label: "Paloma",
  composition:
    "Tequila, Jus Pamplemousse acidifié, Tonic Pamplemousse, Spray Mezcal",
  price: 11,
  availableEveryday: true,
};
export const CocktailChaud: Cocktail = {
  label: "Cocktail chaud",
  composition: "Irish coffee, Grog, Calva Chaud, ...",
};
export const ClubmatéVodka: Cocktail = {
  label: "Club maté vodka",
  composition: "Du club maté, de la vodka",
  price: 9,
};
export const Pamela: Cocktail = {
  label: "Pamela",
  composition: "Tequila, pamplemousse, citron, Fleur oranger, Miel",
  price: 10,
};
export const IrishCoffee: Cocktail = {
  label: "Irish Coffee (ou  jamaican, french)",
  composition: "whisky, café, chantilly maison",
  price: 7.5,
};
export const Gimlet: Cocktail = {
  label: "Gimlet",
  composition: "gin feuille de clementine, Cordial d’agrume, Citron",
  price: 9,
};
export const GénéralClemto: Cocktail = {
  label: "Général Clem'to",
  composition: "Cordial d'agrumes, pamplemousse, citron, tonic",
  virgin: true,
  price: 6,
};
export const MoscowMule: Cocktail = {
  label: "Moscow Mule",
  composition: "Vodka, Cordial de gingembre, Ginger Beer, Citron",
  price: 9,
  availableEveryday: true,
};
export const NEGRONIBLANC: Cocktail = {
  label: "NEGRONI BLANC",
  composition: "Gin, Suze, Vermouth Dry, Sherry Fino",
  price: 9,
  availableEveryday: true,
};
export const ElDiablo: Cocktail = {
  label: "El Diablo",
  composition: "Tequila, Crème de Cassis, Citron, Ginger Beer, Piment",
  price: 10,
  availableEveryday: true,
  spicy: true,
};
export const OldFashioned: Cocktail = {
  label: "Old Fashioned",
  composition: "Bourbon, Angostura Bitter, Sucre",
  price: 8,
  availableEveryday: true,
};
export const EspressoMartini: Cocktail = {
  label: "Espresso Martini",
  composition: "Vodka, Liqueur café maison, Espresso MUDA, Sucre (+1€ tequila)",
  price: 11,
  availableEveryday: true,
};
export const ClearMilkPunch1: Cocktail = {
  label: "Clear Milk Punch #1",
  composition: "Rhum, Argousier, Thé noir, Miel, Citron, Lait",
  price: 9,
};
export const Mocktail: Cocktail = {
  label: "Mocktail",
  virgin: true,
  composition:
    "un large choix à demander au bar - notre carte du moment fait maison",
  price: 7,
  availableEveryday: true,
};

// Nouveaux cocktails automne 2025
// export const EndlessSummer: Cocktail = {
//   label: "Endless Summer",
//   composition: "Gin, concombre, basilic, liqueur de sureau, tonic",
//   price: 9,
// };

export const NewCuban: Cocktail = {
  label: "New Cuban",
  composition: "rhum infusé aux fruits rouges, Citron, Sucre, Prosecco",
  price: 9,
};

// export const GimletFigue: Cocktail = {
//   label: "Gimlet Figue",
//   composition: "Gin feuille de figuier, Verjus, Sirop de figue",
//   price: 9,
// };

// export const CherryWine: Cocktail = {
//   label: "Cherry Wine",
//   composition: "Vodka infusée cerise vanille, Liqueur de marasquin, Club Soda",
//   price: 10,
// };

export const DirtyMartini: Cocktail = {
  label: "Dirty Martini",
  composition: "Vodka, Saumure, Vermouth Dry",
  price: 10,
  availableEveryday: true,
};

export const SpicyTequilaBerry: Cocktail = {
  label: "Spicy Tequila Berry",
  composition: "Tequila, Mure, Piment, Ginger Beer",
  price: 11,
  spicy: true,
};

// Champs-Élysées déjà présent plus bas: on l'utilise et on met à jour son contenu

export const GoldMonkeyRush: Cocktail = {
  label: "Gold Monkey Rush",
  composition: "Monkey Shoulder Whisky, Poire, Miel, Cannelle",
  price: 11,
};

// Mezcalita existe déjà plus bas, on garde la version existante

export const AngelDraft: Cocktail = {
  label: "Angel Draft",
  composition: "Rhum infusé Menthe, Chartreuse Jaune, Citron, Agave, VeganFoam",
  price: 12,
  vegan: true,
  availableEveryday: true,
};
export const ChristmasFrench75: Cocktail = {
  label: "Christmas French 75",
  composition: "Cognac, Citron, Sucré d’airelle, Prosecco",
  price: 9,
};
export const GimletPoire: Cocktail = {
  label: "Gimlet Poire",
  composition: "Gin poire, Jus poire acidifié, Sirop vanille",
  price: 9,
};
export const Marseillan: Cocktail = {
  label: "Marseillan",
  composition: "Whisky fatwash beurre salé, Noilly Prat ambré, Cerise confite",
  price: 10,
};
export const HotMargarita: Cocktail = {
  label: "Hot Margarita",
  composition: "Tequila, Agave, Citron, Piment",
  price: 11,
  spicy: true,
  availableEveryday: true,
};
export const Aviation: Cocktail = {
  label: "Aviation",
  composition:
    "Gin, Liqueur de violette, Citron, Liqueur de Marasquin, Cerise Marasquin",
  price: 9,
  availableEveryday: true,
};
export const Daiquiri: Cocktail = {
  label: "Daiquiri",
  composition: "choisis ton rhum infusé, citron, sucre",
  price: 9,
  availableEveryday: true,
};
export const GinFizz: Cocktail = {
  label: "Gin Fizz",
  composition: "Gin, citron, sucre, eau gazeuse",
  price: 8,
  availableEveryday: true,
};
export const LastWord: Cocktail = {
  label: "Last Word",
  composition: "Gin, Chartreuse, Marasquin, Citron",
  price: 11,
  availableEveryday: true,
};
export const WhiskySour: Cocktail = {
  label: "Whisky Sour",
  vegan: true,
  composition: "Whisky, Sucre, Citron, Angostura",
  price: 9,
  availableEveryday: true,
};
export const Sazerac: Cocktail = {
  label: "Sazerac",
  composition: "Cognac, rye, sucre, peychaud, absinthe",
  price: 11,
  availableEveryday: true,
};
export const PiscoSour: Cocktail = {
  label: "Pisco Sour",
  vegan: true,
  composition: "Pisco, Citron, Sucre, Foam",
  price: 10,
  availableEveryday: true,
};
export const ChampsÉlysées: Cocktail = {
  label: "Champs-Élysées",
  composition: "Cognac, Chartreuse, citron, sucre, angostura",
  price: 11,
  availableEveryday: true,
};
export const NegroniSbagliato: Cocktail = {
  label: "Negroni Sbagliato",
  composition: "Campari, Vermouth Rouge, Prosecco, Orange",
  price: 7,
  availableEveryday: true,
};
export const Cosmo: Cocktail = {
  label: "Cosmo",
  composition: "Vodka, Cointreau, Citron, Cranberry",
  price: 10,
  availableEveryday: true,
};
// export const Penicillin: Cocktail = {
//   label: "Penicillin",
//   composition: "Gingembre, Sirop de miel, Jus de citron, Whisky scotch, Islay",
//   price: 11,
//   availableEveryday: true,
// };
export const VieuxCarré: Cocktail = {
  label: "Vieux Carré",
  composition: "Rye, Vermouth rouge, Cognac, Bénédictine, Angostura, Peychaud’s",
  price: 12,
  availableEveryday: true,
};
export const NewYorkSour: Cocktail = {
  label: "New York Sour",
  composition: "bourbon, sucre, citron, vin rouge",
  price: 9,
  availableEveryday: true,
  vegan: true,
};
export const HemingwayDaïquiri: Cocktail = {
  label: "Hemingway Daïquiri",
  composition: "rhum blanc, liqueur de marasquin, pamplemousse, citron vert",
  price: 9,
  availableEveryday: true,
};
export const CloverAndAlex: Cocktail = {
  label: "Clover & Alex",
  composition: "gin, citron, liqueur de framboise, prosecco",
  price: 8,
};
export const CloverClub: Cocktail = {
  label: "Clover Club",
  composition: "Gin, Framboise, Citron, Sucre, Foam",
  price: 9,
  availableEveryday: true,
  vegan: true,
};
export const SpritzCampari: Cocktail = {
  label: "Spritz Campari ou Limoncello maison",
  composition: "Choisis ta base, Prosecco, eau pétillante",
  price: 8,
  availableEveryday: true,
};
export const LimoncelloSpritz: Cocktail = {
  label: "Limoncello Spritz",
  composition: "Limoncello maison, prosecco, eau pétillante",
  price: 8,
};
export const NakedAndFamous: Cocktail = {
  label: "Naked & Famous",
  composition: "Mezcal, Campari, Chartreuse Jaune, Citron vert",
  price: 12,
  availableEveryday: true,
};
export const InnaDiYard: Cocktail = {
  label: "Inna Di Yard",
  composition: "Suze, rhum, citron, sirop d’orgeat",
  price: 9,
  availableEveryday: true,
};
export const SuzeTonic: Cocktail = {
  label: "Suze Tonic",
  composition: "de la suze et du tonic",
  price: 7,
  availableEveryday: true,
};
export const RhubarbeFizz: Cocktail = {
  label: "Rhubarbe Fizz",
  composition: "gin, sirop rhubarbe, citron, eau pétillante",
  price: 8,
};
export const SpicyMargarita: Cocktail = {
  label: "Spicy Margarita",
  spicy: true,
  composition: "Tequila, Agave, Citron, Sel au piment",
  price: 10,
};
export const SpicyTequilaberry: Cocktail = {
  label: "Spicy Tequilaberry",
  spicy: true,
  composition: "Tequila, triple sec, Mure, Piment agave",
  price: 10,
  availableEveryday: true,
};
export const CloudLily: Cocktail = {
  label: "Cloud Lily",
  vegan: true,
  composition: "Gin, Cointreau, Liqueur de Violette, Citron",
  price: 8,
};
export const PumpkinAmarettoSour: Cocktail = {
  label: "Pumpkin spice amaretto sour",
  composition: "Amaretto, Calvados, Citron, Épices de l’automne",
  price: 8,
};
export const MaiTai: Cocktail = {
  label: "Mai tai",
  composition: "Rhum blanc, Rhum Ambré, Cointreau, Orgeat",
  price: 10,
  availableEveryday: true,
};
export const Manhattan: Cocktail = {
  label: "Manhattan",
  composition: "Whisky, Vermouth Rouge, Angostura",
  price: 10,
  availableEveryday: true,
};
export const ClosingArgument: Cocktail = {
  label: "Closing Argument",
  composition: "Mezcal, Chartreuse, Liqueur Marasquin, Citron",
  price: 12,
  availableEveryday: true,
};
export const BasilSmash: Cocktail = {
  label: "Basil Smash",
  composition: "Gin, Basilic, Citron, Sucre",
  price: 9,
};
export const FrenchBlond: Cocktail = {
  label: "French Blond",
  composition: "Lillet, Pamplemousse, Gin, St Germain, Citron, Bitter",
  price: 10,
  availableEveryday: true,
};
export const Mezcalita: Cocktail = {
  label: "Mezcalita",
  composition: "Mezcal, Citron, Liqueur d’orange, Sel fumé",
  price: 12,
  availableEveryday: true,
};
export const GrannyDaddy: Cocktail = {
  label: "Granny Daddy",
  composition: "Granny Smith, Lillet, Absinthe",
  price: 8,
};
export const BerryPlease: Cocktail = {
  label: "Berry Please",
  composition: "Vodka Myrtille, Liqueur de mûre, Citron, VeganFoam",
  price: 9,
  availableEveryday: true,
  vegan: true,
};
// export const OliveDryMartini: Cocktail = {
//   label: "Olive Dry Martini",
//   composition: "Gin Fatwash Huile d’Olive, Vermouth Dry, Saumure d’olive",
//   price: 9,
//   availableEveryday: true,
// };
export const FrenchMargarita: Cocktail = {
  label: "French Margarita",
  composition: "Cognac, Grand Marnier, Citron Jaune, Piment d’Espelette",
  price: 12,
  availableEveryday: true,
  spicy: true,
};
// export const Garibaldi: Cocktail = {
//   label: "Garibaldi",
//   composition: "Campari, jus d'Orange",
//   price: 7.5,
//   availableEveryday: true,
// };
export const HibiscusFizz: Cocktail = {
  label: "Hibiscus Fizz",
  composition: " Gin hibiscus, citron, sucre, vegan foam",
  price: 9,
  vegan: true,
};
export const LitchiMartini: Cocktail = {
  label: "Litchi Martini",
  composition: "Vodka, litchi, vermouth dry, st germain",
  price: 10,
  availableEveryday: false,
};
// export const SumacManhattan: Cocktail = {
//   label: "Sumac Manhattan",
//   composition: "Whisky infusé au sumac, Vermouth rouge, cerise marasqui",
//   price: 11,
//   availableEveryday: true,
// };
// export const HoneyDeuce: Cocktail = {
//   label: "Honey Deuce",
//   composition: "Vodka melon, liqueur de framboise, citron, limonade",
//   price: 9,
//   availableEveryday: true,
// };
// export const DirtyTonicMartini: Cocktail = {
//   label: "Dirty Tonic Martini",
//   composition: "Gin fat wash huile d'olive, vermouth dry, tonic, olives",
//   price: 9,
//   availableEveryday: true,
// };
export const SummerFizz: Cocktail = {
  label: "Summer Fizz",
  composition: "Tequila feuille de figuier, suze, citron, veganfoam",
  price: 10,
  availableEveryday: true,
  vegan: true,
};
export const MonkeyPenicillin: Cocktail = {
  label: "Monkey Penicillin",
  composition: "Whisky Monkey Shoulder, miel, gingembre, citron, Islay",
  price: 11,
  availableEveryday: true,
};
// export const Hot Honey Margarita: Cocktail = {
//   label: "Hot Honey Margarita",
//   composition: "Tequila, Cointreau, miel, piment, citron",
//   price: 11,
//   availableEveryday: true,
//   spicy: true,
// };
