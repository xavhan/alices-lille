import { DJS } from './djs';
import type { Event } from './types';

export const EVENTS: Event[] = [
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
  },
  {
    label: 'Cremaillère',
    guests: [DJS.Donov],
    date: '2021-11-13',
  },
];
