<script context="module">
  export const prerender = false;
  export async function load({ fetch }) {
    const miniclub = await fetch(`/miniclub/next.json`).then((r) => r.json());
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
  title="Alices | {miniclub.label}"
  description="{`${list(
    miniclub.guests.map((dj) => dj.label)
  )}, bientôt dans le mini club, pour vous faire danser toute la nuit ! Notez la date: ${format(
    miniclub.date
  )}`},"
  canonical={'https://alices-lille.com/miniclub/next'}
  jsonLd={miniclubJSONLD(miniclub)}
/>

<Stack>
  <Header>
    Next: {miniclub.label} avec {list(miniclub.guests.map((dj) => dj.label))}
  </Header>

  <br />

  <Event event={miniclub} />
</Stack>
