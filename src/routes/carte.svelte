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
    shooters,
    wines,
    cocktails,
    spirits,
    softs,
    food,
  } from '../data/menu';

  export const hydrate = dev;
  export const router = browser;
  export const prerender = true;
</script>

<SvelteSeo
  title="Alices | La Carte"
  description="Venez decouvrir la carte des boissons et tartinables du Alices"
/>

<Stack>
  <MenuBlock title="Bières Pression" text="Disponibles en 25, 33 ou 50cl">
    <Beers beers={taps} />
  </MenuBlock>

  <MenuBlock title="Bières Bouteilles">
    <Beers beers={bottles} />
  </MenuBlock>

  <MenuBlock title="Vin" text="Au verre ou en bouteille">
    <Wines {wines} />
  </MenuBlock>

  <MenuBlock title="Cocktails">
    <Cocktails {cocktails} />
  </MenuBlock>

  <MenuBlock title="Shooters" text="4€ l’unité & 20€ les 6">
    <Shooters {shooters} />
  </MenuBlock>

  <MenuBlock title="Spiritueux">
    <Spirits {spirits} />
  </MenuBlock>

  <MenuBlock title="Softs">
    <Softs {softs} />
  </MenuBlock>

  <MenuBlock title="Tartinades" text="pots de 200g faits sur place">
    <Food {food} />
  </MenuBlock>

  <MenuBlock title="Et pleins d'autres surprises au bar" />
</Stack>
