<script context="module" lang="ts">
  import SvelteSeo from 'svelte-seo';
  import { browser, dev } from '$app/env';
  import MenuBlock from '$lib/components/MenuBlock.svelte';
  import Stack from '$lib/components/Stack.svelte';

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
  <MenuBlock title="Tous nos cocktails">
    <Cocktails cocktails={cocktails.filter(c => c.everyday).sort((a,b) => collator.compare(a.label,b.label))} />
  </MenuBlock>
  
  <br />
  <div class="text-right text-emphase flex justify-between">
    <div>🍻🍷🥂🥤</div>
    <a href='/carte'>Revenir à la carte</a>
  </div>
</Stack>

