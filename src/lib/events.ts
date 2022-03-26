import { EVENTS } from '$data/events';
import type { DJ, Event } from '$data/types';
import { groupBy } from './array';
import { afterYesterday } from './date';
import { list } from './list';
import { url } from './url';

export const isPast = (e: Event): boolean => !afterYesterday(new Date(e.date));

const groupByDate = groupBy((e: Event) => (isPast(e) ? 'past' : 'future'));

export const eventList: { future: Event[]; past: Event[] } = {
  future: [],
  past: [], // TODO: use applySpec instead of groupby
  ...groupByDate(EVENTS),
};

export const getEventsByDj = (slug: DJ['slug']) =>
  EVENTS.filter((e) => e.guests.map((g) => g.slug).includes(slug));
export const getEvent = (n: Event['n']) => EVENTS.find((e) => e.n === n);
export const getNextEvent = () =>
  [...EVENTS].sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  )[0];

const toGoogleDateRange = (date: string) => {
  const [y, m, d] = date.split('-');
  const ninePMFrance = '200000';
  const twoAMFrance = '010000';
  return [
    y + m + d + 'T' + ninePMFrance + 'Z',
    y + m + String(Number(d) + 1).padStart(2, '0') + 'T' + twoAMFrance + 'Z',
  ].join('/');
};

export const nextDay = (date: string): string => {
  const d = new Date(date).setDate(new Date(date).getDate() + 1);
  const [shortIso] = new Date(d).toISOString().split('T');
  return shortIso;
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
    text: `💃 ${event.label} aux Alices avec ${list(
      event.guests.map((dj) => dj.label)
    )}`,
  });
};
