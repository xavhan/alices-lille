<script context="module" lang="ts">
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
  import type { Cocktail } from '$data/types';
  export const hydrate = dev;
  export const router = browser;
  export const prerender = true;

  const SEO_DESCRIPTION =
    'Café torréfié à Lille, vins natures et surprenants, bières locales, cocktails délicieux, large gamme de softs et tartinables faits sur place';

  const CURRENT_SEASON = 'summer2022';
  const filter = (items) =>
    items.filter(
      (item) =>
        !item.disabled &&
        (item.availability === undefined ||
          item.availability.includes(CURRENT_SEASON))
    );

  const getCocktails = (items: string[]) => items.map(label => cocktails.find(c => c.label === label))
</script>

<SvelteSeo
  title="Alices | La Carte"
  description={SEO_DESCRIPTION}
  canonical="https://alices-lille.com/carte"
/>
<picture>
  <source srcset="/images/icons/friends-dark.png" media="(prefers-color-scheme: dark)" />
  <img src="/images/icons/friends.png" alt="Amis en train de partager des bières et du vin" width="120"/>
</picture>
<br/>
<br/>

<Stack>
  <MenuBlock title="Bières Pression" text="25, 33 ou 50cl">
    <Beers beers={taps} />
  </MenuBlock>

  <MenuBlock title="Bières Bouteilles">
    <Beers beers={bottles} />
  </MenuBlock>

  <MenuBlock title="Vin" text="Au verre ou en bouteille">
    <Wines wines={filter(wines)} />
  </MenuBlock>

  <MenuBlock title="Cocktails">
    <Cocktails cocktails={getCocktails([
      'Rome with a view',
      'Bramble',
      'Dark & stormy',
      'Moscow Mule',
      'Paddigfigue',
      'Mocktail - Sans Alcool',
    ])} />
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

  <picture>
    <source srcset="/images/icons/cocktail-dark.png" media="(prefers-color-scheme: dark)" />
    <img src="/images/icons/cocktail.png" alt="Cocktail" width="40"/>
  </picture>
</Stack>

