<script context="module">
  import SvelteSeo from 'svelte-seo';
  import { browser, dev } from '$app/env';
  import Stack from '$lib/components/Stack.svelte';
  import { events } from '$data/events';
  import { format } from '$lib/date';

  export const hydrate = dev;
  export const router = browser;
  export const prerender = true;
</script>

<SvelteSeo
  title="Alices | Events"
  description="Alices c'est aussi la fête !"
/>

<Stack>
  <h1>Les events du Mini-Club</h1>

  <ol>
    <Stack>
      {#each events as event}
        <li>
          {format(event.date)} - Miniclub#{event.number}
          <h2>{event.label}</h2>
          <ul>
            {#each event.guests as guest}
              <li>{guest.label}</li>
            {/each}
          </ul>
        </li>    
      {/each}
    </Stack>
  </ol>
</Stack>
