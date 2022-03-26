import type { SvelteSeoProps } from 'svelte-seo/types/SvelteSeo';

export const alicesJSONLD = (
  description: string
): SvelteSeoProps['jsonLd'] => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Alices',
  description,
  currenciesAccepted: 'EUR',
  openingHours: ['Tu-Th 16:00-00:00', 'Fr 16:00-01:00', 'Sa 15:00-02:00'],
  address: '12 rue des 3 couronnes, 59000 Lille, France',
  paymentAccepted: 'Cash, Credit Card',
  latitude: '50.6375004',
  longitude: '3.0638824',
  maximumAttendeeCapacity: 50,
  url: 'https://alices-lille.com',
});
