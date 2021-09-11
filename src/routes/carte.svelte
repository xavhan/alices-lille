<script context="module">
  import { browser, dev } from '$app/env';
  export const hydrate = dev;
  export const router = browser;
  export const prerender = true;
  import { menu } from './menu';
</script>

<svelte:head>
  <title>La Carte</title>
</svelte:head>

{#each menu.categoriesOrder as cat}
  <hr />
  <h2>{menu.categories[cat].label}</h2>
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
<hr />

<style>
  hr {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  dt {
    display: inline-block;
  }
  dd {
    margin-left: 10px;
    display: inline-block;
  }
  dl div {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
