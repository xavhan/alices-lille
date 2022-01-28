<script context="module">
  import Event from '$lib/components/Event.svelte';

  import SvelteSeo from 'svelte-seo';
  import { browser, dev } from '$app/env';
  import Stack from '$lib/components/Stack.svelte';
  import { eventList } from '$lib/events';
  import Header from '$lib/components/Header.svelte';

  export const hydrate = dev;
  export const router = browser;
  // export const prerender = true; // WIP for now
</script>

<SvelteSeo title="Alices | Events" description="Alices c'est aussi la fête !" />

<Stack>
  <Header>Bientôt au Mini-Club</Header>

  <ol>
    <Stack>
      {#each eventList.future as event}
        <li class="flex flex-col">
          <Event {event} />
        </li>
      {/each}
    </Stack>
  </ol>

  <br />
  <br />

  <Header>Les succès du Mini-Club</Header>

  <ol>
    <Stack>
      {#each eventList.past as event}
        <li class="flex flex-col">
          <Event {event} />
        </li>
      {/each}
    </Stack>
  </ol>
</Stack>
