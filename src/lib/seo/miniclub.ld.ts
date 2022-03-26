import type { Event } from '$data/types';
import { format } from '$lib/date';
import { nextDay } from '$lib/events';
import { list } from '$lib/list';
import type { SvelteSeoProps } from 'svelte-seo/types/SvelteSeo';

export const miniclubJSONLD = (miniclub: Event): SvelteSeoProps['jsonLd'] => ({
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: miniclub.label,
  url: 'https://alices-lille.com/miniclub/next',
  description: `${list(
    miniclub.guests.map((dj) => dj.label)
  )}, bientôt dans le mini club, pour vous faire danser toute la nuit ! Notez la date: ${format(
    miniclub.date
  )}`,
  startDate: miniclub.date + ' 09:00PM',
  endDate: nextDay(miniclub.date) + ' 02:00AM',
  location: {
    '@type': 'Place',
    name: 'Alices',
    sameAs: 'https://alices-lille.com',
    address: '12 rue des 3 couronnes, 59000 Lille, France',
  },
  performers: miniclub.guests.map((dj) => ({
    '@type': 'Person',
    name: dj.label,
  })),
  offers: {
    '@type': 'Offer',
    price: 'free',
  },
  image: {
    '@type': 'ImageObject',
    url: 'https://alices-lille.com' + miniclub.imageSrc,
  },
  eventAttendanceMode: 'OfflineEventAttendanceMode',
});
