<script context="module">
  export const prerender = true;
  export async function load({ fetch }) {
    const miniclub = await fetch(`next.json`).then((r) => r.json());
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

  export let miniclub: EventT;
</script>

<SvelteSeo
  title="Alices | {miniclub.label}"
  description={`Bientot dans le mini club, ${list(
    miniclub.guests.map((dj) => dj.label)
  )} pour vous faire danser toute la nuit ! Notez la date: ${format(
    miniclub.date
  )}`}
  canonical={'https://alices-lille.com/miniclub/next'}
  jsonLd={{
    '@type': 'Event',
    name: miniclub.label,
    url: 'https://alices-lille.com/miniclub/next',
    description: `Bientot dans le mini club, ${list(
      miniclub.guests.map((dj) => dj.label)
    )} pour vous faire danser toute la nuit ! Notez la date: ${format(
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
    Next: {miniclub.label} avec {list(miniclub.guests.map((dj) => dj.label))}
  </Header>

  <br />

  <Event event={miniclub} />
</Stack>
