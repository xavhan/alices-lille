<script lang="ts">
  import type { Event } from '$data/types';
  import Stack from '$lib/components/Stack.svelte';
  import { format } from '$lib/date';
  import { isPast, linkToCalendar } from '$lib/events';
  import Link from './Link.svelte';

  export let event: Event;
  export let hideDesc = false;
</script>

<Stack>
  <div>
    <div class="mb-4">
      <a
        href={isPast(event)
          ? `miniclub/${event.n}-${event.slug}`
          : event.facebookEvent}
        title={`Aller sur l'event${isPast(event) ? '' : ' Facebook'} - ${
          event.label
        }`}
        target={isPast(event) ? null : '_blank'}
        rel={isPast(event) ? null : 'nofollow'}
      >
        <img
          src={event.imageSrc}
          title={`${event.label} ${format(event.date)} avec ${event.guests
            .map((dj) => dj.label)
            .join(' x ')}`}
          alt={`${event.label} ${format(event.date)} avec ${event.guests
            .map((dj) => dj.label)
            .join(' x ')}`}
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
      {/if}

      {#if !hideDesc}
        {#if event.html}
          <div class="mb-2">
            {@html event.html}
          </div>
        {/if}

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
                    {#if typeof link === 'string'}
                      <Link
                        external
                        href={link}
                        title={'aller ecouter sur ' + link}>{link}</Link
                      >
                    {:else if link.type === 'soundcloud'}
                      <Link
                        external
                        href={link.href}
                        title="aller sur son Soundcloud">Soundcloud</Link
                      >
                    {:else if link.type === 'facebook'}
                      <Link
                        external
                        href={link.href}
                        title="aller sur son Facebook">Facebook</Link
                      >
                    {:else if link.type === 'instagram'}
                      <Link
                        external
                        href={link.href}
                        title="aller sur son Instagram">Instagram</Link
                      >
                    {/if}
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
    <div />
  </div></Stack
>
