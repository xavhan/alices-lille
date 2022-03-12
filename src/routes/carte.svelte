<script context="module">
  import SvelteSeo from 'svelte-seo';
  import { browser, dev } from '$app/env';
  import MenuBlock from '$lib/components/MenuBlock.svelte';
  import Stack from '$lib/components/Stack.svelte';

  import Beers from '$lib/components/Beers.svelte';
  import Shooters from '$lib/components/Shooters.svelte';
  import Wines from '$lib/components/Wines.svelte';
  import Cocktails from '$lib/components/Cocktails.svelte';
  import Spirits from '$lib/components/Spirits.svelte';
  import Softs from '$lib/components/Softs.svelte';
  import Food from '$lib/components/Food.svelte';

  import {
    taps,
    bottles,
    wines,
    cocktails,
    spirits,
    softs,
    food,
  } from '$data/menu';
  export const hydrate = dev;
  export const router = browser;
  export const prerender = true;

  const SEO_DESCRIPTION =
    'Café torréfié à Lille, vins natures et surprenants, bières locales, cocktails délicieux, large gamme de softs et tartinables faits sur place';

  const CURRENT_SEASON = 'spring2022';
  const filter = (items) =>
    items.filter(
      (item) =>
        !item.disabled &&
        (item.availability === undefined ||
          item.availability.includes(CURRENT_SEASON))
    );
</script>

<SvelteSeo
  title="Alices | La Carte"
  description={SEO_DESCRIPTION}
  canonical="https://alices-lille.com/carte"
/>

<Stack>
  <MenuBlock title="Bières Pression" text="25, 33 ou 50cl">
    <Beers beers={filter(taps)} />
  </MenuBlock>

  <MenuBlock title="Bières Bouteilles">
    <Beers beers={filter(bottles)} />
  </MenuBlock>

  <MenuBlock title="Vin" text="Au verre ou en bouteille">
    <Wines wines={filter(wines)} />
  </MenuBlock>

  <MenuBlock title="Cocktails">
    <Cocktails cocktails={filter(cocktails)} />
  </MenuBlock>

  <MenuBlock title="Shooters" text="4€ l’unité & 20€ les 6">
    <Shooters />
  </MenuBlock>

  <MenuBlock title="Spiritueux">
    <Spirits spirits={filter(spirits)} />
  </MenuBlock>

  <MenuBlock title="Softs">
    <Softs softs={filter(softs)} />
  </MenuBlock>

  <MenuBlock title="Tartinades">
    <Food {food} />
  </MenuBlock>

  <MenuBlock title="Et pleins d'autres surprises au bar" />
</Stack>
