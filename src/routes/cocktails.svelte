<script context="module" lang="ts">
  import { browser } from '$app/env';
  import MenuBlock from '$lib/components/MenuBlock.svelte';
  import Stack from '$lib/components/Stack.svelte';
  import SvelteSeo from 'svelte-seo';
  import { writable } from 'svelte/store';

  import Cocktails from '$lib/components/Cocktails.svelte';

  import { cocktails } from '$data/menu';

  export const router = browser;
  export const prerender = true;

  const SEO_DESCRIPTION =
    'Tous les cocktails du Alices, des plus classiques aux plus aventureux';

  const collator = new Intl.Collator('fr-FR');
  let selected = writable('');
</script>

<SvelteSeo
  title="Alices | Les Cocktails"
  description={SEO_DESCRIPTION}
  canonical="https://alices-lille.com/cocktails"
/>
<picture>
  <source
    srcset="/images/icons/cocktail-dark.png"
    media="(prefers-color-scheme: dark)"
  />
  <img src="/images/icons/cocktail.png" alt="Cocktail" width="40" />
</picture>
<br />
<br />

<Stack>
  <MenuBlock title="Tous nos cocktails">
    <select
      bind:value={$selected}
      class="w-full p-2 mt-2 mb-2 rounded"
      style={[
        'color: var(--app-text)',
        'font-family: "Trueno Light"',
        'font-size: var(--font-size-1)',
        'border: 1px solid var(--app-text-emphase)',
        'background-color: var(--app-background)',
      ].join(';')}
    >
      <option selected value="">Choisir la base</option>
      <option value="amaretto">Amaretto</option>
      <option value="bourbon">Bourbon</option>
      <option value="campari">Campari</option>
      <option value="chartreuse">Chartreuse</option>
      <option value="cognac">Cognac</option>
      <!-- comma hack to avoid gin / ginger overlap 🙃 -->
      <option value="gin,">Gin</option>
      <option value="ginger">Ginger</option>
      <option value="rhum">Rhum</option>
      <option value="tequila">Tequila</option>
      <option value="vodka">Vodka</option>
      <option value="whisky">Whisky</option>
    </select>
    <Cocktails
      cocktails={cocktails
        .filter((c) => c.everyday)
        .filter((c) => c.composition.toLocaleLowerCase().includes($selected))
        .sort((a, b) => collator.compare(a.label, b.label))}
    />
  </MenuBlock>

  <br />
  <div class="text-right text-emphase flex justify-between">
    <div>🍻🍷🥂🥤</div>
    <a href="/carte">Revenir à la carte</a>
  </div>
</Stack>
