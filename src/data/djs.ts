import type { DJ } from './types';

export const Donov: DJ = {
  label: 'Donov',
  links: [
    { type: 'instagram', href: 'https://www.instagram.com/donovlamalice' },
    { type: 'facebook', href: 'https://www.facebook.com/donovdj' },
    { type: 'soundcloud', href: 'https://soundcloud.com/donovdj/sets/dj-set' },
  ],
  description: `Joyeux luron de la scène électro/disco/bizarro lilloise, fossoyeur des brocantes et autres stocks poussiéreux à la recherche de vinyles oubliés, Donov organise également avec Bisenesse et Martine Au Bruit des soirées cools, tout en prenant part à foule d'autres projets festifs ou musicaux dans la métropole.`,
};

export const InnerSense: DJ = {
  label: 'Inner Sense',
  links: [
    { type: 'soundcloud', href: 'https://soundcloud.com/inner-sense' },
    { type: 'facebook', href: 'https://www.facebook.com/InnerSenseFr' },
    { type: 'instagram', href: `https://www.instagram.com/donovlamalice` },
  ],
  description:
    'Passionné de musique et collectionneur de disques depuis 30 ans Inner Sense affectionne les sonorités House, Garage, Disco et Funky. Il a également produit plusieurs morceaux pour le label My Love Is Underground dont il est très proche.',
};

export const JimIrie: DJ = {
  label: 'Jim Irie',
  links: [
    { type: 'soundcloud', href: 'https://www.soundcloud.com/jimirieonelove' },
  ],
  description: [
    'JIM IRE one love = French Boogie/ Zouk / Reggae / Disco / Modern Soul / Gospel / Folk et bien plus encore...',
    `Que ce soit au sein des crews Discomatin, La Freak, Babylon Rockerz / Red Lebanese ou avec sa résidence sur les ondes de Rinse France, Jim Irie est partout, toujours chaud bouillant !`,
    `Disquaire extraordinaire, ambianceur intersidéral, on est super heureuses de l’accueillir chez nous, chez Alices !`,
  ].join('\n'),
};
export const Ango: DJ = {
  label: 'Ango',
  links: [
    {
      type: 'mixcloud',
      href: 'https://www.mixcloud.com/ango_supagroovalistic/',
    },
    { type: 'instagram', href: 'https://www.instagram.com/ango_supa/' },
  ],
  description: [
    `Global Grooves // funk, soul, disco, house, brazil, afro, latin, jazz, hiphop ...`,
    `Ango est la moitié de Supa et fondateur de la web radio Comala Radio. Musicien et DJ derrière les platines depuis plus de 10 ans, ses mixs vous proposent un voyage dans la galaxie "Global Sounds" entre Rio, Téhéran, Lagos, Détroit, Los Angeles, Londres.`,
    `Il partage sa musique à travers les soirées, et bien sûr à travers les émissions SupaGroovalistic et Morning Sunrise`,
  ].join('\n'),
};

export const DJS = {
  Donov,
  InnerSense,
  JimIrie,
  Ango,
};
