import type { DJ } from './types';

export const Donov: DJ = {
  label: 'Donov',
  links: [
    'https://www.instagram.com/donovlamalice',
    'https://www.facebook.com/donovdj',
    'https://soundcloud.com/donovdj/sets/dj-set',
  ],
  description: `Joyeux luron de la scène électro/disco/bizarro lilloise, fossoyeur des brocantes et autres stocks poussiéreux à la recherche de vinyles oubliés, Donov organise également avec Bisenesse et Martine Au Bruit des soirées cools, tout en prenant part à foule d'autres projets festifs ou musicaux dans la métropole.`,
};

export const InnerSense: DJ = {
  label: 'Inner Sense',
  links: [
    'https://soundcloud.com/inner-sense',
    'https://www.facebook.com/InnerSenseFr',
    `https://www.instagram.com/donovlamalice`,
  ],
  description:
    'Passionné de musique et collectionneur de disques depuis 30 ans Inner Sense affectionne les sonorités House, Garage, Disco et Funky. Il a également produit plusieurs morceaux pour le label My Love Is Underground dont il est très proche.',
};

export const JimIrie: DJ = {
  label: 'Jim Irie',
  links: ['https://www.soundcloud.com/jimirieonelove'],
  description: [
    'JIM IRE one love = French Boogie/ Zouk / Reggae / Disco / Modern Soul / Gospel / Folk et bien plus encore...',
    `Que ce soit au sein des crews Discomatin, La Freak, Babylon Rockerz / Red Lebanese ou avec sa résidence sur les ondes de Rinse France, Jim Irie est partout, toujours chaud bouillant !`,
    `Disquaire extraordinaire, ambianceur intersidéral, on est super heureuses de l’accueillir chez nous, chez Alices !`,
  ].join('\n'),
};

export const DJS = {
  Donov,
  InnerSense,
  JimIrie,
};
