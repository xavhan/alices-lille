import { DJS } from './djs';
import type { Event } from './types';

export const EVENTS: Event[] = [
  {
    label: 'MiniClub#2',
    guests: [DJS.Donov, DJS.JimIrie],
    date: '2022-03-05',
    facebookEvent: 'https://www.facebook.com/events/278939877539123/',
    description: [
      `WELCOME TO la #2 édition du MINICLUB X JIMI IRE`,
      '              🔥🔥🔥🔥🔥🔥🔥',
      ``,
      `Au premier étage du ALICES sous la boule à facettes, viens bouger et transpirer comme si demain n'existait pas avec cette fois ci aux platines JIM IRE et la participation du légendaire DONOV 💃🏻🕺🏻`,
      ``,
      `Au programme des bières, du vin, des cocktails, des shooters et du son du son du son ! ☄️🍷🍻🍸☄️`
    ].join('\n'),
    imageSrc: '/images/miniclub002.png',
  },
  {
    label: 'MiniClub#1',
    guests: [DJS.Donov, DJS.InnerSense],
    date: '2022-02-19',
    facebookEvent: 'https://www.facebook.com/events/619313212531323/',
    description: [
      `ALICES présente MINICLUB, son premier étage dédié à fête.`,
      '',
      `ENFIN !!! On l'attendait tous·tes ! `,
      '',
      `Pour ce premier événement de 2022 on se retrouve au premier étage du ALICES. Sous la boule à facettes, c'est le MINICLUB où tu pourras danser toute la soirée.`,
      `Au programme : des bières, du vin, des cocktails de fou et toujours des shots !`,
    ].join('\n'),
    imageSrc: '/images/miniclub001.png',
  },
  {
    label: 'Crémaillère',
    guests: [DJS.Donov],
    date: '2021-11-13',
    imageSrc: '/images/miniclub000.jpg',
  },
];
