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

  export let miniclub: EventT;
</script>

<SvelteSeo
  title="Alices | {miniclub.label}"
  description={`${
    miniclub.label
  } aux Alices c'était génial ! Merci à ${miniclub.guests
    .map((dj) => dj.label)
    .join(
      ' et '
    )} pour le son et l'ambiance de folie. On se souviendra de ce ${format(
    miniclub.date
  )}`}
  canonical={"https://alices-lille.com/miniclub/" + miniclub.n + '-' + miniclub.slug}
  jsonLd={{
    '@type': 'Event',
    name: miniclub.label,
    url: {"https://alices-lille.com/miniclub/" + miniclub.n + '-' + miniclub.slug},
    description: `${miniclub.label} c'était génial ! Merci à ${miniclub.guests
      .map((dj) => dj.label)
      .join(' et ')} pour le son et l'ambiance de folie. ${format(
      miniclub.date
    )}`,
    startDate: miniclub.date + ' 09:00PM',
    endDate: miniclub.date + ' 02:00AM',
    location: {
      '@type': 'Place',
      name: 'Alices',
      sameAs: 'https://alices-lille.com',
      address: '12 rue des 3 couronnes, 59000 Lille, France',
    },
  }}
/>

<Stack>
  <Header>
    {miniclub.label}
  </Header>

  <br />

  <Event event={miniclub} />
</Stack>
