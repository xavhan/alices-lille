<script context="module">
  export const prerender = true;
  export async function load({ params, fetch }) {
    const product = await fetch(`/products/${params.slug}.json`).then((r) =>
      r.json()
    );
    return {
      props: {
        product,
      },
    };
  }
</script>

<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import SvelteSeo from 'svelte-seo';
  import Stack from '$lib/components/Stack.svelte';
  import type { Beer } from '$data/types';

  export let product: Beer;
</script>

<SvelteSeo
  title="Alices | Produits | {product.label}"
  canonical={'https://alices-lille.com/products/' + product.slug}
/>

<Stack>
  <Header>
    {product.label}
  </Header>
  <br />
  <div>
    type: {product.type_label}
  </div>
  <div>
    brasserie: {product.brewery}
  </div>
  <div>
    alcool: {product.abv}
  </div>

  <br />

  <Header>{product.label} aux Alices</Header>
  <br />
  <ol>
    <Stack>
      {#each product.availability as season}
        <li class="flex flex-col">
          {season}
        </li>
      {/each}
    </Stack>
  </ol>
</Stack>
