<script context="module">
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

<svelte:head>
  <title>La Carte</title>
</svelte:head>

<Stack>
  <MenuBlock
    title="Bières Pression"
    text="Disponibles en 25, 33 ou 50cl"
  >
    <Beers beers={taps}></Beers>
  </MenuBlock>

  <MenuBlock
    title="Bières Bouteilles"
  >
    <Beers beers={bottles}></Beers>
  </MenuBlock>

  <MenuBlock
    title="Shooters"
    text="4€ l’unité & 20€ les 6"
  >
    <Shooters shooters={shooters}></Shooters>
  </MenuBlock>

  <MenuBlock
    title="Vin"
    text="Au verre ou en bouteille"
  >
    <Wines wines={wines}></Wines>
  </MenuBlock>

  <MenuBlock
    title="Cocktails"
  >
    <Cocktails cocktails={cocktails}></Cocktails>
  </MenuBlock>
</Stack>

<!-- {#each menu.categoriesOrder as cat}
  <hr />
  <div class="title">{menu.categories[cat].label}</div>
  <hr />
  <dl>
    {#each menu.products[cat] as product}
      <div>
        <dt>{product.label}</dt>
        <dd>
          {menu.categories[cat].formats
            .reduce(
              (acc, format) =>
                product.prices[format] ? [...acc, product.prices[format]] : acc,
              []
            )
            .join(' / ')}
        </dd>
      </div>
    {/each}
  </dl>
{/each}
<hr /> -->

<style>
</style>
