<script context="module" lang="ts">
  import SvelteSeo from 'svelte-seo';
  import { browser, dev } from '$app/env';
  import MenuBlock from '$lib/components/MenuBlock.svelte';
  import Stack from '$lib/components/Stack.svelte';
  import { writable } from "svelte/store";

  import Cocktails from '$lib/components/Cocktails.svelte';

  import {
    cocktails,
  } from '$data/menu';
  
  export const hydrate = dev;
  export const router = browser;
  export const prerender = true;

  const SEO_DESCRIPTION =
    'Tous les cocktails du Alices, des plus classiques aux plus aventureux';

  const collator = new Intl.Collator('fr-FR');
  let selected = writable('')
</script>

<SvelteSeo
  title="Alices | Les Cocktails"
  description={SEO_DESCRIPTION}
  canonical="https://alices-lille.com/cocktails"
/>
<picture>
  <source srcset="/images/icons/cocktail-dark.png" media="(prefers-color-scheme: dark)" />
  <img src="/images/icons/cocktail.png" alt="Cocktail" width="40"/>
</picture>
<br/>
<br/>

<Stack>
  <select bind:value={$selected} class="w-full p-2 rounded">
    <option selected value="">Tous les cocktails</option>
    <option value="gin">Gin</option>
    <option value="vodka">Vodka</option>
    <option value="campari">Campari</option>
    <option value="rhum">Rhum</option>
    <option value="mezcal">Mezcal</option>
    <option value="ginger">Ginger</option>
    <option value="tequila">Tequila</option>
    <option value="whisky">Whisky</option>
    <option value="bourbon">Bourbon</option>
  </select>

  <MenuBlock title="Tous nos cocktails">
    <Cocktails cocktails={
      cocktails
        .filter(c => c.everyday)
        .filter(c => c.composition.toLocaleLowerCase().includes($selected))
        .sort((a,b) => collator.compare(a.label,b.label))} />
  </MenuBlock>
  
  <br />
  <div class="text-right text-emphase flex justify-between">
    <div>🍻🍷🥂🥤</div>
    <a href='/carte'>Revenir à la carte</a>
  </div>
</Stack>

