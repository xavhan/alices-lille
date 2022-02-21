<script lang="ts">
  import type { Event } from '$data/types';
  import Stack from '$lib/components/Stack.svelte';
  import { format } from '$lib/date';
  import { isPast, linkToCalendar } from '$lib/events';
  import Link from './Link.svelte';

  export let event: Event;
</script>

<!-- TODO: build the image -->
<Stack>
  {#if event.imageSrc}
    <div>
      <div>
        <img
          src={event.imageSrc}
          alt={`${event.label} ${format(event.date)} avec ${event.guests
            .map((dj) => dj.label)
            .join(' x ')}`}
          width="100%"
          height="100%"
        />
      </div>

      <div class="py-2">
        {#if event.facebookEvent}
          <Link href={event.facebookEvent} target="_blank">Event facebook</Link>
        {/if}

        {#if !isPast(event)}
          • <Link href={linkToCalendar(event)} target="_blank"
            >Save the date</Link
          >
        {/if}
      </div>
    </div>
  {:else}
    <h2>{event.label}</h2>

    <div class="flex justify-between items-center">
      <div class="flex flex-col text-left">
        <div>
          {format(event.date)}
        </div>

        {#if event.facebookEvent}
          <div>
            <Link href={event.facebookEvent} target="_blank"
              >Event facebook</Link
            >
          </div>
        {/if}

        {#if !isPast(event)}
          <div>
            <Link href={linkToCalendar(event)} target="_blank"
              >Note la date</Link
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
  {/if}
</Stack>
