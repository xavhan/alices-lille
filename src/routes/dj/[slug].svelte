<script context="module">
  export const prerender = true;
  export async function load({ params, fetch }) {
    const dj = await fetch(`${params.slug}.json`).then((r) => r.json());
    return {
      props: {
        dj,
      },
    };
  }
</script>

<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import SvelteSeo from 'svelte-seo';
  import Stack from '$lib/components/Stack.svelte';
  import type { DJ } from '$data/types';
import Dj from '$lib/components/DJ.svelte';
import { djJSONLD } from '$lib/seo/dj.ld';

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

  <Dj dj={dj} />
</Stack>
