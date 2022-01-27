<script context="module">
  import SvelteSeo from 'svelte-seo';
  import { browser, dev } from '$app/env';
  import Stack from '$lib/components/Stack.svelte';
  import { format } from '$lib/date';
  import { eventList, linkToCalendar } from '$lib/events';

  export const hydrate = dev;
  export const router = browser;
  // export const prerender = true; WIP for now
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
        <li>
          <div>
            <div>
              {format(event.date)}
            </div>
            <div>
              <a href={linkToCalendar(event)} title="Note la date" target="_blank">Note la date</a>
            </div>
          </div>
          <div>
            <h2>{event.label}</h2>
            <ul>
              {#each event.guests as guest}
                <li>{guest.label}</li>
              {/each}
            </ul>
          </div>
        </li>    
      {/each}
    </Stack>
  </ol>

  <hr>
  <h1>Les succès du Mini-Club</h1>
  <hr>

  <ol>
    <Stack>
      {#each eventList.past as event}
        <li>
          <h2>{format(event.date)} - {event.label}</h2>
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
