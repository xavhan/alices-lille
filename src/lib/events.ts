import { EVENTS } from '$data/events';
import type { Event } from '$data/types';
import { groupBy } from './array';
import { afterYesterday } from './date';
import { url } from './url';

export const isPast = (e: Event): boolean => !afterYesterday(new Date(e.date));

const groupByDate = groupBy((e: Event) => (isPast(e) ? 'past' : 'future'));

export const eventList: { future: Event[]; past: Event[] } = {
  future: [],
  past: [], // TODO: use applySpec instead of groupby
  ...groupByDate(EVENTS),
};

const toGoogleDateRange = (date: string) => {
  const [y, m, d] = date.split('-');
  const ninePMFrance = '200000';
  const twoAMFrance = '010000';
  return [
    y + m + d + 'T' + ninePMFrance + 'Z',
    y + m + (parseInt(d) + 1) + 'T' + twoAMFrance + 'Z',
  ].join('/');
};

export const linkToCalendar = (event: Event): string => {
  return url('https://calendar.google.com/calendar/render', {
    action: 'TEMPLATE',
    dates: toGoogleDateRange(event.date),
    details: [
      event.description,
      ...event.guests.map((dj) => `${dj.label}: ${dj.description}`),
      event.facebookEvent,
    ]
      .filter(Boolean)
      .join('\n\n'),
    location: 'Alices, 12 Rue des 3 Couronnes, 59800 Lille, France',
    text: `💃 ${event.label} aux Alices avec ${event.guests.map((dj) => dj.label).join(' x ')}`,
  });
};
