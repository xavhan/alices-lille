<script context="module">
  export const prerender = true;
  export async function load({ params, fetch }) {
    const dj = await fetch(`/dj/${params.slug}.json`).then((r) => r.json());
    return {
      props: {
        dj,
      },
    };
  }
</script>

<script lang="ts">
  import type { DJ } from '$data/types';
  import Dj from '$lib/components/DJ.svelte';
  import Event from '$lib/components/Event.svelte';
  import Header from '$lib/components/Header.svelte';
  import Stack from '$lib/components/Stack.svelte';
  import { getEventsByDj } from '$lib/events';
  import { djJSONLD } from '$lib/seo/dj.ld';
  import SvelteSeo from 'svelte-seo';

  export let dj: DJ;
</script>

<SvelteSeo
  title="Alices | DJ | {dj.label}"
  description={`${dj.label}: ${dj.description}`}
  canonical={'https://alices-lille.com/dj/' + dj.slug}
  jsonLd={djJSONLD(dj)}
/>

<Stack>
  <Header>
    {dj.label}
  </Header>

  <br />

  <Dj {dj} />

  <br />
  <br />

  <Header>{dj.label} aux Alices</Header>
  <br />
  <ol>
    <Stack>
      {#each getEventsByDj(dj.slug) as event}
        <li class="flex flex-col">
          <Event {event} hideDesc />
        </li>
      {/each}
    </Stack>
  </ol>
</Stack>
