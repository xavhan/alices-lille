<script lang="ts">
  import type { Event } from '$data/types';
  import Stack from '$lib/components/Stack.svelte';
  import { format } from '$lib/date';
  import { isPast, linkToCalendar } from '$lib/events';

  export let event: Event;
</script>

<Stack>
  <h2>{event.label}</h2>

  <div class="flex justify-between">
    <div class="flex flex-col text-left">
      <div>
        {format(event.date)}
      </div>

      {#if event.facebookEvent}
        <div>
          <a
            href={event.facebookEvent}
            title="Event facebook"
            target="_blank"
            rel="nofollow noopener">Event facebook</a
          >
        </div>
      {/if}

      {#if !isPast(event)}
        <div>
          <a
            href={linkToCalendar(event)}
            title="Note la date"
            target="_blank"
            rel="nofollow noopener">Note la date</a
          >
        </div>
      {/if}
    </div>
    <div class="flex flex-col text-right">
      <ul>
        {#each event.guests as guest}
          <li>{guest.label}</li>
        {/each}

        {#if !event.guests.length}
          <li>🤔</li>
        {/if}
      </ul>
    </div>
  </div>
</Stack>

<style>
  .flex {
    display: flex;
  }
  .flex-col {
    flex-direction: column;
  }
  .justify-between {
    justify-content: space-between;
  }
  .text-left {
    text-align: left;
  }
  .text-right {
    text-align: right;
  }
</style>
