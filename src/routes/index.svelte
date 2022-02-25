<script context="module" lang="ts">
  import { browser, dev } from '$app/env';
  import SvelteSeo from 'svelte-seo';
  import { GOOGLE_URL } from '$lib/url';
  import { FACEBOOK_URL, INSTAGRAM_URL } from '$data/links';
  import HomeBlock from '$lib/components/HomeBlock.svelte';
  import Stack from '$lib/components/Stack.svelte';
  import { timerange } from '$lib/time';
  import ButtonLink from '$lib/components/ButtonLink.svelte';
  import Link from '$lib/components/Link.svelte';

  export const hydrate = dev;
  export const router = browser;
  export const prerender = true;
</script>

<SvelteSeo
  title="Alices | Lille"
  description="Café Bar Saisonnier Culturel"
  canonical="https://alices-lille.com"
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
  <div class="menu mb-4">
    <Stack>
      <ButtonLink href="./carte">Découvrir la carte</ButtonLink>
      <ButtonLink href="./events">Nos events</ButtonLink>
    </Stack>
  </div>

  <HomeBlock title="Horaires d'ouverture">
    Mardi au Jeudi : {timerange(['16:00', '00:00'])}
    <br />
    Vendredi : {timerange(['16:00', '1:00'])}
    <br />
    Samedi : {timerange(['15:00', '2:00'])}
  </HomeBlock>

  <HomeBlock title="Réseaux sociaux">
    <Link href={INSTAGRAM_URL} target="_blank" title="Aller sur Instagram">Instagram</Link>
    •
    <Link href={FACEBOOK_URL} target="_blank" title="Aller sur Facebook">Facebook</Link>
  </HomeBlock>

  <HomeBlock title="Soutien">
    <Link href={GOOGLE_URL} target="_blank"  title="Mettre une note sur Google">
      Ça vous a plu ? faites-le savoir !
    </Link>
  </HomeBlock>
</Stack>
