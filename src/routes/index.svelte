<script context="module" lang="ts">
  import { browser, dev } from '$app/env';
  import SvelteSeo from 'svelte-seo';
  import { FACEBOOK_URL, GOOGLE_URL, INSTAGRAM_URL } from '$lib/url';
  import HomeBlock from '$lib/components/HomeBlock.svelte';
  import Stack from '$lib/components/Stack.svelte';
  import { time, timerange } from '$lib/time';

  export const hydrate = dev;
  export const router = browser;
  export const prerender = true;
</script>

<SvelteSeo
  title="Alices | Lille"
  description="Café Bar Saisonnier Culturel"
  jsonLd={{
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Alices',
    description: 'Café Bar Saisonnier Culturel',
    currenciesAccepted: 'EUR',
    openingHours: ['Tu-Th 16:00-00:00', 'Fr 16:00-01:00', 'Sa 15:00-02:00'],
    address: '12 rue des 3 couronnes, 59000 Lille, France',
    paymentAccepted: 'Cash, Credit Card',
    latitude: '50.6375004',
    longitude: '3.0638824',
    maximumAttendeeCapacity: 50,
    url: 'https://alices-lille.com',
  }}
/>

<Stack>
  <div class="menu">
    <a href="./carte">Découvrir la carte</a>
  </div>

  <HomeBlock title="Horaires d'ouverture">
      Mardi au Jeudi : {timerange(['16:00', '0:00'])}
      <br>
      Vendredi : {timerange(['16:00', '1:00'])}
      <br>
      Samedi : {timerange(['15:00', '2:00'])}
  </HomeBlock>

  <HomeBlock title="Réseaux sociaux">
    <a href={INSTAGRAM_URL} target="_blank" rel="noopener">Instagram</a>
    •
    <a href={FACEBOOK_URL} target="_blank" rel="noopener">Facebook</a>
  </HomeBlock>

  <HomeBlock title="Soutien">
    <a href={GOOGLE_URL} target="_blank" rel="noopener">
      Ça vous a plu ? faites-le savoir !
    </a>
  </HomeBlock>
</Stack>