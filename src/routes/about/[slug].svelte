<script context="module">
  export const prerender = true;
  export async function load({ params, fetch }) {
    const beer = await fetch(`/about/${params.slug}.json`).then((r) => r.json());
    return {
      props: {
        beer,
      },
    };
  }
</script>

<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import SvelteSeo from 'svelte-seo';
  import Stack from '$lib/components/Stack.svelte';
  import type { Beer } from '$data/types';
  import Link from '$lib/components/Link.svelte';
  import ButtonLink from '$lib/components/ButtonLink.svelte';

  export let beer: Beer;
</script>

<SvelteSeo
  title="Alices | Biere | {beer.about.title || beer.label}"
  description={`${beer.label} - ${beer.brewery}`}
  canonical={'https://alices-lille.com/beer/' + beer.slug}
/>

<Stack>
  <Header>
    {beer.about.title || beer.label}
  </Header>

  <br />

  {#if beer.about.imageSrc}
    <img
      class="max-w-full"
      src={beer.about.imageSrc}
      title={`Image illustrant ${beer.about.title || beer.label}`}
      alt={`Image illustrant ${beer.about.title || beer.label}`}
      loading="lazy"
    />
  {/if}

  <br />
  <br />
  <br />

  <div class="whitespace-pre-wrap text-left">
    {beer.about.description}
  </div>

  <br />
  <br />

  {#if beer.about.links?.length}
    <div class="text-left">
      <h3 class="text-emphase mb-4">Liens</h3>
      <ul>
        <Stack>
          {#each beer.about.links as link}
            <li>
              <Link href={link.href} title={link.label} external
                >{link.label}</Link
              >
            </li>
          {/each}
        </Stack>
      </ul>
    </div>
  {/if}
  <br />
  <br />
  <br />
  <ButtonLink href="/carte">Retour à la carte</ButtonLink>
</Stack>
