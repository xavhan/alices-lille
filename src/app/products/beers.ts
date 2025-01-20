type Beer = {
  label: string;
  price:
    | {
        25: number;
        50: number;
      }
    | number;
  type_label?: string;
  slug?: string;
  brewery?: string;
  abv?: number;
};

const BISE: Beer = {
  type_label: "Pils",
  slug: "bise",
  label: "La bise",
  brewery: "Duyck",
  price: {
    25: 3.5,
    50: 5.5,
  },
  abv: 5.4,
};

const PINPON: Beer = {
  type_label: "Saison",
  slug: "pinpon",
  label: "Pin Pon",
  brewery: "Tandem",
  price: {
    25: 4,
    50: 7.5,
  },
  abv: 7,
};

const ETOILEDUNORD: Beer = {
  type_label: "Saison",
  slug: "etoiledunord",
  label: "Étoile du Nord",
  brewery: "Thiriez",
  price: {
    25: 3.5,
    50: 6.5,
  },
  abv: 5.5,
};

const THIRIEZTRIPLE: Beer = {
  type_label: "Triple",
  slug: "thirieztriple",
  label: "Thiriez Triple",
  brewery: "Thiriez",
  price: {
    25: 4.2,
    50: 8,
  },
  abv: 8.5,
};

const BISEBLANCHE: Beer = {
  label: "La Bise Blanche",
  brewery: "Duyck",
  price: {
    25: 3.6,
    50: 6.5,
  },
};

const OISEAUBLANC: Beer = {
  label: "Oiseau Blanc",
  type_label: "Blanche",
  brewery: "Brasserie du grand Paris",
  abv: 4.5,
  price: {
    25: 3.6,
    50: 6.5,
  },
};

const PASCAP: Beer = {
  type_label: "Triple",
  label: "Pas Cap",
  brewery: "Tandem",
  price: {
    25: 4.2,
    50: 8,
  },
  abv: 8,
};

const LILBLONDE: Beer = {
  type_label: "Blonde",
  label: "LIL Blonde",
  brewery: "Gobrecht",
  price: {
    25: 3.5,
    50: 6.5,
  },
  abv: 5.5,
};

const TARASBOULBA: Beer = {
  type_label: "IPA",
  label: "Taras Boulba",
  brewery: "Brasserie de la Senne",
  price: {
    25: 3.8,
    50: 7,
  },
  abv: 4.5,
};

const ZINNEBIR: Beer = {
  type_label: "Blonde",
  label: "Zinnebir",
  brewery: "Brasserie de la Senne",
  price: {
    25: 3.8,
    50: 7,
  },
  abv: 5.8,
};

const GREENKILLER: Beer = {
  type_label: "IPA",
  label: "Green Killer",
  brewery: "Brasserie Silly",
  price: {
    25: 3.7,
    50: 6.9,
  },
  abv: 6.5,
};

const POULEMOUILLEE: Beer = {
  type_label: "IPA",
  label: "Poule mouillée",
  brewery: "Tandem",
  price: {
    25: 3.8,
    50: 7,
  },
  abv: 6.5,
};

const XXBITTER: Beer = {
  type_label: "Belgian IPA",
  label: "XX Bitter",
  brewery: "De Ranke",
  price: {
    25: 3.8,
    50: 7,
  },
  abv: 6.2,
};

const MONGYAMBREE: Beer = {
  type_label: "Ambrée",
  label: "MONGY",
  brewery: "Cambier",
  price: {
    25: 4.2,
    50: 8,
  },
  abv: 8,
};

const MONGYTRIPLE: Beer = {
  type_label: "Triple",
  label: "MONGY",
  brewery: "Cambier",
  price: {
    25: 4.2,
    50: 8,
  },
  abv: 8,
};

const BELLENAERT: Beer = {
  type_label: "Triple",
  label: "bellenaert",
  brewery: "bellenaert",
  price: {
    25: 4.2,
    50: 8,
  },
  abv: 8,
};

const WINTERPEPPER: Beer = {
  type_label: "Ambrée",
  label: "Winter Pepper",
  brewery: "Thiriez",
  price: {
    25: 4.2,
    50: 8,
  },
  abv: 7,
};

const MONGYIPA: Beer = {
  type_label: "IPA",
  label: "MONGY",
  brewery: "Cambier",
  price: {
    25: 4,
    50: 7.5,
  },
  abv: 6,
};

const WAL: Beer = {
  type_label: "Triple",
  label: "Wal",
  brewery: "Célestin",
  price: {
    25: 4.4,
    50: 8,
  },
  abv: 8.3,
};

const FREEBIRD: Beer = {
  label: "Free Bird",
  brewery: "Le singe savant",
  price: {
    25: 4.8,
    50: 8.5,
  },
};

const SPRINGSIN: Beer = {
  label: "Spring Sin",
  abv: 5.8,
  brewery: "Le singe savant",
  price: {
    25: 4.8,
    50: 8.5,
  },
};

const BANDICOT: Beer = {
  label: "Bandicot",
  brewery: "Le singe savant",
  price: {
    25: 4.8,
    50: 8.5,
  },
};

const QUIDAM: Beer = {
  type_label: "IPA",
  label: "Quidam",
  brewery: "Brasserie Jenlain",
  price: {
    25: 4,
    50: 7.5,
  },
  abv: 6.5,
};

const APPIE: Beer = {
  label: "Cidre",
  brewery: "Appie",
  abv: 5,
  price: {
    25: 4,
    50: 7.5,
  },
};

const LESAUVAGE: Beer = {
  label: "Cidre - Le Sauvage",
  brewery: "Fils de pomme",
  abv: 5.5,
  price: {
    25: 4,
    50: 7.5,
  },
};

const SPECIALE: Beer = {
  slug: "speciale",
  label: "Bière Spéciale",
  brewery: "Brasserie du singe savant ou autres copains",
  price: {
    25: 4.5,
    50: 8.5,
  },
};

const MALICE: Beer = {
  slug: "malice",
  label: "LA MALICE",
  brewery: "Alices x Singe Savant",
  price: {
    25: 4.5,
    50: 8.5,
  },
};

const FRANCBELGE: Beer = {
  slug: "francbelge",
  label: "Franc Belge ambrée",
  brewery: "De ranke",
  price: {
    25: 4,
    50: 8,
  },
  abv: 5.2,
};

const LESINGESAVANT: Beer = {
  slug: "lesingesavant",
  label: "Le singe savant",
  brewery: "Le fut change toute les semaines",
  price: {
    25: 4.5,
    50: 8.5,
  },
};

const PHI: Beer = {
  type_label: "Sour",
  label: "Phi rabarber",
  price: 8,
  abv: 8,
  brewery: "Brasserie alvinne",
};

const BIERESDUMOMENT: Beer = {
  label: "Bières du moment",
  price: 7,
  brewery: "Singe Savant, Nautile, Cambier...",
};

const WESTMALLETRIPEL: Beer = {
  type_label: "Trappiste",
  label: "Westmalle tripel",
  price: 6.3,
  abv: 9.5,
  brewery: "Abbaye de Westmalle",
};

const ROCHEFORTTRIPLE: Beer = {
  type_label: "Trappiste",
  label: "Rochefort triple",
  price: 6,
  abv: 8.1,
  brewery: "Abbaye de Rochefort",
};

const TRAPPISTE: Beer = {
  type_label: "Trappiste",
  label: "Trappiste",
  price: 6.3,
  brewery: "Abbaye",
};

const ROCHEFORT8: Beer = {
  type_label: "Trappiste",
  label: "Rochefort 8",
  price: 6.3,
  abv: 9.2,
  brewery: "Abbaye de Rochefort",
};

const HAZY: Beer = {
  type_label: "Sour",
  label: "Hazy Diamond",
  price: 7,
  abv: 5,
  brewery: "La débauche",
};

const GUEUZECANTILLON: Beer = {
  type_label: "Gueuze",
  label: "GUEUZE 75cl",
  price: 30,
  brewery: "Brasserie Cantillon",
};

const BRUNEHAUT: Beer = {
  type_label: "Sans Gluten",
  label: "Blonde",
  price: 5.3,
  brewery: "Brunehaut",
};

const ALCOOLFREE: Beer = {
  label: "Bière sans Alcool",
  price: 6,
  brewery: "Trottinette",
};

const APPIECIDER: Beer = {
  label: "CIDRE - Brut",
  price: 6,
  brewery: "Appie",
};

const FDP: Beer = {
  label: "CIDRE - Brut",
  price: 6,
  brewery: "Fils de Pomme",
};

const APPIEPOIRE: Beer = {
  label: "POIRÉ - Brut",
  price: 6,
  brewery: "Appie",
};
