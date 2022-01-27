<script context="module">
  import Event from '$lib/components/Event.svelte'

  import SvelteSeo from 'svelte-seo';
  import { browser, dev } from '$app/env';
  import Stack from '$lib/components/Stack.svelte';
  import { eventList } from '$lib/events';

  export const hydrate = dev;
  export const router = browser;
  // export const prerender = true; // WIP for now
</script>

<SvelteSeo
  title="Alices | Events"
  description="Alices c'est aussi la fête !"
/>

<Stack>
  <hr>
  <h1>Bientôt au Mini-Club</h1>
  <hr>

  <ol>
    <Stack>
      {#each eventList.future as event}
        <li class="flex flex-col">
          <Event {event} />
        </li>    
      {/each}
    </Stack>
  </ol>
  
  <br>
  <br>
  <hr>
  <h1>Les succès du Mini-Club</h1>
  <hr>

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

<style>
  .flex {
    display: flex
  }
  .flex-col {
    flex-direction: column;
  }
</style>
