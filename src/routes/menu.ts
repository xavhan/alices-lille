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
