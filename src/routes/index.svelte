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
  import { getNextEvent } from '$lib/events';
  import { formatShort } from '$lib/date';
  import { list } from '$lib/list';
  import { alicesJSONLD } from '$lib/seo/alices.ld';

  export const hydrate = dev;
  export const router = browser;
  export const prerender = true;

  const SEO_DESCRIPTION =
    "Situé entre la grand place et l'opéra de Lille, Alices vous accueille pour un café, un verre de vin nature, une pinte de bière locale ou même faire la fête le soir dans son Mini Club. Réservation possible sur Instagram ou Facebook.";

  const next = getNextEvent();
</script>

<SvelteSeo
  title="Alices | Lille"
  description={SEO_DESCRIPTION}
  canonical="https://alices-lille.com"
  jsonLd={alicesJSONLD(SEO_DESCRIPTION)}
/>

<Stack>
  <div class="menu">
    <Stack --spacing="var(--size-4)">
      <ButtonLink href="/carte">Découvrir la carte</ButtonLink>
      {#if next}
        <div class="my-4">
          <Link href="/miniclub/next" title="Voir le prochain miniclub">
            {formatShort(next.date)}: {next.label}
            <br />
            avec {list(next.guests.map((g) => g.label))}
          </Link>
        </div>
      {/if}
      <ButtonLink href="/events">Tous nos events</ButtonLink>
    </Stack>
  </div>

  <HomeBlock title="Horaires d'ouverture">
    Lundi : {timerange(['16:00', '23:00'])}
    <br />
    Mardi, Mercredi : {timerange(['16:00', '00:00'])}
    <br />
    Jeudi, Vendredi : {timerange(['16:00', '1:00'])}
    <br />
    Samedi : {timerange(['15:00', '1:00'])}
  </HomeBlock>

  <HomeBlock title="Réseaux sociaux">
    <Link external href={INSTAGRAM_URL} title="aller sur notre Instagram"
      >Instagram</Link
    >
    •
    <Link external href={FACEBOOK_URL} title="aller sur notre Facebook"
      >Facebook</Link
    >
  </HomeBlock>

  <HomeBlock title="Soutien">
    ⭐
    <Link external href={GOOGLE_URL} title="Laisser 5 etoiles sur Google">
      Ça vous a plu ? faites-le savoir !
    </Link>
    ⭐
  </HomeBlock>

  <br />
  <br />
  <picture>
    <source
      srcset="/images/icons/alices-dark.png"
      media="(prefers-color-scheme: dark)"
    />
    <img src="/images/icons/alices.png" alt="Alice et Alice" width="80" />
  </picture>
</Stack>
