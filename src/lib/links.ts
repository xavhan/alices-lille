import { FACEBOOK_URL, LINKS } from '$data/links';
import type { Link } from '$data/types';
import { eventList, linkToCalendar } from './events';

export const links: Link[] = [
  ...eventList.future.flatMap((event) => [
    {
      label: `💃 ${event.label} Event Facebook`,
      href: event.facebookEvent || FACEBOOK_URL,
    },
    {
      label: `🗓 ${event.label} save the date`,
      href: linkToCalendar(event),
    },
  ]),
  ...LINKS,
];
