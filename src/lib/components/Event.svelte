<script lang="ts">
  import type { Event } from '$data/types';
  import Stack from '$lib/components/Stack.svelte';
  import { format } from '$lib/date';
  import { isPast, linkToCalendar } from '$lib/events';
  import { list } from '$lib/list';
  import Dj from './DJ.svelte';
  import Link from './Link.svelte';

  export let event: Event;
  export let hideDesc = false;
</script>

<Stack>
  <div>
    <div class="mb-4">
      <a
        href={isPast(event)
          ? `/miniclub/${event.n}-${event.slug}`
          : event.facebookEvent}
        title={`Aller sur l'event${isPast(event) ? '' : ' Facebook'} - ${
          event.label
        }`}
        target={isPast(event) ? null : '_blank'}
        rel={isPast(event) ? null : 'nofollow'}
      >
        <img
          src={event.imageSrc}
          title="{`${event.label} ${format(event.date)} avec ${list(
            event.guests.map((dj) => dj.label)
          )}`},"
          alt="{`${event.label} ${format(event.date)} avec ${list(
            event.guests.map((dj) => dj.label)
          )}`},"
          width="360"
          height="360"
          loading="lazy"
        />
      </a>
    </div>

    <div class="py-2">
      {#if !isPast(event)}
        {#if event.facebookEvent}
          <Link
            external
            href={event.facebookEvent}
            title="Aller sur l'event Facebook">Event facebook</Link
          > •
        {/if}

        <Link
          external
          href={linkToCalendar(event)}
          title="Sauvegarder dans le calendrier">Save the date</Link
        >

        <br />
        <br />
        <br />
      {/if}

      {#if !hideDesc}
        {#if event.html}
          <div class="mb-2">
            {@html event.html}
          </div>
        {/if}

        <br />

        <ol class="text-left">
          {#each event.guests as guest}
            <li>
              <Dj dj={guest} />
            </li>
          {/each}
        </ol>
      {/if}
    </div>
    <div />
  </div>
</Stack>
