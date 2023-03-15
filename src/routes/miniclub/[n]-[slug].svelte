<script context="module">
  export const prerender = true;
  export async function load({ params, fetch }) {
    const miniclub = await fetch(`/miniclub/${params.n}.json`).then((r) =>
      r.json()
    );
    return {
      props: {
        miniclub,
      },
    };
  }
</script>

<script lang="ts">
  import type { Event as EventT } from '$data/types';
  import Event from '$lib/components/Event.svelte';
  import Header from '$lib/components/Header.svelte';
  import Stack from '$lib/components/Stack.svelte';
  import { format } from '$lib/date';
  import { list } from '$lib/list';
  import { miniclubJSONLD } from '$lib/seo/miniclub.ld';
  import SvelteSeo from 'svelte-seo';

  export let miniclub: EventT;
</script>

<SvelteSeo
  title={`Alices | ${miniclub.label} | ${list(
    miniclub.guests.map((dj) => dj.label)
  )}`}
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
