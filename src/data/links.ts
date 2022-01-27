import type { Link } from '$lib/types';
import { FACEBOOK_URL, INSTAGRAM_URL } from '$lib/url';

export const LINKS: Link[] = [
  {
    label: '💃 MiniClub#1 Event Facebook 🕺',
    href: 'https://www.facebook.com/events/619313212531323/',
  },
  {
    label: 'Instagram',
    href: INSTAGRAM_URL,
  },
  {
    label: 'Facebook',
    href: FACEBOOK_URL,
  },
  {
    label: 'Le site',
    href: '/',
    target: null,
  },
];
