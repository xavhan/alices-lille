import { DJS } from './djs';
import type { Event } from './types';

export const EVENTS: Event[] = [
  {
    n: 2,
    slug: 'jimirie-donov',
    label: 'MiniClub#2',
    guests: [DJS.JimIrie, DJS.Donov],
    date: '2022-03-05',
    facebookEvent: 'https://www.facebook.com/events/278939877539123/',
    description: [
      `WELCOME TO la #2 édition du MINICLUB X JIMI IRE`,
      '              🔥🔥🔥🔥🔥🔥🔥',
      ``,
      `Au premier étage du ALICES sous la boule à facettes, viens bouger et transpirer comme si demain n'existait pas avec cette fois ci aux platines JIM IRE et la participation du légendaire DONOV 💃🏻🕺🏻`,
      ``,
      `Au programme des bières, du vin, des cocktails, des shooters et du son du son du son ! ☄️🍷🍻🍸☄️`,
    ].join('\n'),
    imageSrc: '/images/miniclub002.jpg',
  },
  {
    n: 1,
    slug: 'innersense-donov',
    label: 'MiniClub#1',
    guests: [DJS.InnerSense, DJS.Donov],
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
    imageSrc: '/images/miniclub001.jpg',
    html: '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1221838078&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>',
  },
  {
    n: 0,
    slug: 'cremaillere',
    label: 'Crémaillère',
    guests: [DJS.Donov],
    date: '2021-11-13',
    imageSrc: '/images/miniclub000.jpg',
  },
];
