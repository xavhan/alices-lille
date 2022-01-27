import { EVENTS } from '$data/events';
import type { Event } from '$data/types';
import { groupBy } from './array';
import { url } from './url';

const groupByDate = groupBy((e: Event) =>
  new Date() < new Date(e.date) ? 'future' : 'past')

export const eventList: { future: Event[]; past: Event[] } = groupByDate(EVENTS);
export const linkToCalendar = (event: Event): string => {
  return url('https://calendar.google.com/calendar/render', {
    action: 'TEMPLATE',
    dates: '20220219T200000Z/20220220T010000Z',
    details: event.description,
    location: 'Alices, 12 Rue des 3 Couronnes, 59800 Lille, France',
    text: `💃 ${event.label} 🕺 ${event.guests.map(dj => dj.label).join(' / ')}`
  });
}

