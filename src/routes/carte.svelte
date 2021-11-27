<script context="module">
  import SvelteSeo from 'svelte-seo';
  import { browser, dev } from '$app/env';
  import MenuBlock from '$lib/components/MenuBlock.svelte';
  import Beers from '$lib/components/Beers.svelte';
  import Shooters from '$lib/components/Shooters.svelte';
  import Wines from '$lib/components/Wines.svelte';
  import Cocktails from '$lib/components/Cocktails.svelte';
  import Stack from '$lib/components/Stack.svelte';
  export const hydrate = dev;
  export const router = browser;
  export const prerender = true;
  import { taps, bottles, shooters, wines, cocktails } from './menu';
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

  <MenuBlock title="Shooters" text="4€ l’unité & 20€ les 6">
    <Shooters {shooters} />
  </MenuBlock>

  <MenuBlock title="Vin" text="Au verre ou en bouteille">
    <Wines {wines} />
  </MenuBlock>

  <MenuBlock title="Cocktails">
    <Cocktails {cocktails} />
  </MenuBlock>

  <MenuBlock title="Et pleins d'autres pepites au bar !" />
</Stack>
