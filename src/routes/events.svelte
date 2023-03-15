<script context="module">
  import Event from '$lib/components/Event.svelte';

  import SvelteSeo from 'svelte-seo';
  import { browser, dev } from '$app/env';
  import Stack from '$lib/components/Stack.svelte';
  import { eventList } from '$lib/events';
  import Header from '$lib/components/Header.svelte';

  export const hydrate = dev;
  export const router = browser;
  export const prerender = true;
</script>

<SvelteSeo
  title="Alices | Events"
  description="Sous la boule à facettes, c'est le Mini Club où tu pourras danser toute la soirée. Au programme : des bières, du vin, des cocktails de fou et toujours des shots ! Mais surtout du bon son avec ..."
  canonical="https://alices-lille.com/events"
/>

<Stack>
  <Header>Bientôt dans le Mini-Club</Header>
  <br />

  {#if eventList.future.length}
    <ol>
      <Stack>
        {#each eventList.future as event}
          <li class="flex flex-col">
            <Event {event} />
          </li>
        {/each}
        <Header>💫 INFOS PRATIQUES 💫</Header>
        <br />

        <div class="font-serif leading-6">
          ALICES est ouvert le samedi à partir de 16h La soirée commence à 21h
          <br/>
          ALICES est un lieu safe ! Nous attendons de vous que vous soyez
          <br/>
          respectueux.euses envers les autres, quels que soient leurs origines,
          genres, orientations sexuelles, religions ou âges
        </div>

        <br />
      </Stack>
    </ol>
  {:else}
    <br />
    <br />
    <br />
    <br />
    💃 🤔
    <br />
    <br />
    <br />
    <br />
  {/if}

  <Header>Les succès du Mini-Club</Header>
  <br />
  <ol>
    <Stack>
      {#each eventList.past as event}
        <li class="flex flex-col">
          <Event {event} hideDesc />
        </li>
      {/each}
    </Stack>
  </ol>
</Stack>
