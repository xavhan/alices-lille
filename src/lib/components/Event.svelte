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
        <a
          href={event.facebookEvent}
          title={`Aller sur l'event Facebook - ${event.label}`}
          target="_blank"
        >
          <img
            src={event.imageSrc}
            alt={`${event.label} ${format(event.date)} avec ${event.guests
              .map((dj) => dj.label)
              .join(' x ')}`}
            width="100%"
            height="100%"
          />
        </a>
      </div>

      <div class="py-2">
        {#if !isPast(event)}
          {#if event.facebookEvent}
            <Link href={event.facebookEvent} target="_blank"
              >Event facebook</Link
            >
          {/if}

          • <Link href={linkToCalendar(event)} target="_blank"
            >Save the date</Link
          >

          <br />
          <br />

          <ol class="text-left font-serif leading-6">
            {#each event.guests as guest}
              <li>
                <h3 class="text-right text-rouge">{guest.label}</h3>
                <br />
                <p class="text-justify">{guest.description}</p>
                <br />
                <ul class="text-right">
                  {#each guest.links as link}
                    <li>
                      <a href={link}>{link}</a>
                    </li>
                  {/each}
                  <br />
                  <br />
                </ul>
              </li>
            {/each}
          </ol>
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
