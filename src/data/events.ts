import * as DJ from './djs';
import type { Event } from './types';

export const events: Event[] = [
  {
    label: 'La premiere',
    number: 1,
    guests: [
        DJ.Donov,
        DJ.InnerSense
    ],
    date: '2022-02-19',
  },
  {
    label: 'Cremaillere',
    number: 0,
    guests: [
        DJ.Donov,
    ],
    date: '2021-11-13',
  },
];
