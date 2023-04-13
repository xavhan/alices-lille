import type { Link } from './types';

export const INSTAGRAM_URL = 'https://www.instagram.com/alices.lille/';
export const FACEBOOK_URL = 'https://www.facebook.com/Alices-100810122354194/';

export const LINKS: Link[] = [
  {
    label: 'La carte',
    href: '/carte',
    target: null,
  },
  {
    label: 'Nos cocktails 🍸🥂🥃🍹',
    href: '/cocktails',
    target: null,
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
    label: 'Avis Google',
    href: 'https://goo.gl/maps/whMaXe8PMdZi9cXB7',
  },
  {
    label: 'Le site',
    href: '/',
    target: null,
  },
];
