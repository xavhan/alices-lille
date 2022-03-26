<script context="module">
  export const prerender = true;
  export async function load({ params, fetch }) {
    const miniclub = await fetch(`${params.n}.json`).then((r) => r.json());
    return {
      props: {
        miniclub,
      },
    };
  }
</script>

<script lang="ts">
  import type { Event as EventT } from '$data/types';
  import Header from '$lib/components/Header.svelte';
  import Event from '$lib/components/Event.svelte';
  import SvelteSeo from 'svelte-seo';
  import { format } from '$lib/date';
  import Stack from '$lib/components/Stack.svelte';
  import { list } from '$lib/list';
  import { miniclubJSONLD } from '$lib/seo/miniclub.ld';

  export let miniclub: EventT;
</script>

<SvelteSeo
  title="Alices | {miniclub.label}"
  description={`${miniclub.label} aux Alices c'était génial ! Merci à ${list(
    miniclub.guests.map((dj) => dj.label)
  )} pour le son et l'ambiance de folie. On se souviendra de ce ${format(
    miniclub.date
  )}`}
  canonical={'https://alices-lille.com/miniclub/' +
    miniclub.n +
    '-' +
    miniclub.slug}
  jsonLd={miniclubJSONLD(miniclub)}
/>

<Stack>
  <Header>
    {miniclub.label}
  </Header>

  <br />

  <Event event={miniclub} />
</Stack>
