<script context="module" lang="ts">
  import { browser } from '$app/env';
  import MenuBlock from '$lib/components/MenuBlock.svelte';
  import Stack from '$lib/components/Stack.svelte';
  import SvelteSeo from 'svelte-seo';

  import Beers from '$lib/components/Beers.svelte';
  import BottlesAndCans from '$lib/components/BottlesAndCans.svelte';
  import Cocktails from '$lib/components/Cocktails.svelte';
  import Coffee from '$lib/components/Coffee.svelte';
  import Food from '$lib/components/Food.svelte';
  import Shooters from '$lib/components/Shooters.svelte';
  import Softs from '$lib/components/Softs.svelte';
  import Spirits from '$lib/components/Spirits.svelte';
  import Wines from '$lib/components/Wines.svelte';

  import {
    cocktails,
    coffee,
    food,
    softs,
    spirits,
    taps,
    wines,
  } from '$data/menu';
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

  const getCocktails = (items: string[]) =>
    items.map((label) => cocktails.find((c) => c.label === label));
</script>

<SvelteSeo
  title="Alices | La Carte"
  description={SEO_DESCRIPTION}
  canonical="https://alices-lille.com/carte"
/>
<picture>
  <source
    srcset="/images/icons/friends-dark.png"
    media="(prefers-color-scheme: dark)"
  />
  <img
    src="/images/icons/friends.png"
    alt="Amis en train de partager des bières et du vin"
    width="120"
  />
</picture>
<br />
<br />

<Stack>
  {#if new Date().getHours() >= 15 && new Date().getHours() <= 17}
    <MenuBlock title="Cafés">
      <Coffee {coffee} />
    </MenuBlock>
  {/if}

  {#if new Date().getDay() === 6 && new Date().getHours() >= 17}
    <MenuBlock title="🍸 Samedi c'est espresso Martini !">
      <Cocktails cocktails={getCocktails(['Espresso Martini'])} />
    </MenuBlock>
  {/if}

  <MenuBlock title="Bières Pression" text="25, 33 ou 50cl">
    <Beers beers={taps} />
  </MenuBlock>

  <MenuBlock title="Bières Bouteilles">
    <BottlesAndCans />
  </MenuBlock>

  <MenuBlock title="Vin" text="Au verre ou en bouteille">
    <Wines wines={filter(wines)} />
  </MenuBlock>

  <MenuBlock title="Cocktails">
    <Cocktails
      cocktails={getCocktails([
        'Mocktail',
        'Granny Daddy',
        'Berry Please',
        'Gimlet',
        'Amaretto Sour',
        'Olive Dry Martini',
        'Daiquiri',
        'Negroni',
        'Dark & stormy',
        'French Margarita',
        'Paloma',
        'Espresso Martini',
        'Penicillin',
        'Vieux Carré',
      ])}
    />
  </MenuBlock>

  <div class="text-right text-emphase flex justify-between">
    <div>🍸🥂🥃🍹</div>
    <a href="/cocktails">Voir tous nos cocktails</a>
  </div>
  <br />

  <MenuBlock title="Shooters" text="3.5€ l’unité & 18€ les 6">
    <Shooters />
  </MenuBlock>

  <MenuBlock title="Spiritueux">
    <Spirits spirits={filter(spirits)} />
  </MenuBlock>

  <MenuBlock title="Softs">
    <Softs softs={filter(softs)} />
  </MenuBlock>

  <MenuBlock title="A manger">
    <Food />
  </MenuBlock>

  {#if new Date().getHours() < 15 || new Date().getHours() > 17}
    <MenuBlock title="Cafés">
      <Coffee {coffee} />
    </MenuBlock>
  {/if}

  <MenuBlock title="Et pleins d'autres surprises au bar" />

  <picture>
    <source
      srcset="/images/icons/cocktail-dark.png"
      media="(prefers-color-scheme: dark)"
    />
    <img src="/images/icons/cocktail.png" alt="Cocktail" width="40" />
  </picture>
</Stack>
