<script lang="ts">
  import type { DJ } from '$data/types';
  import { random } from '$lib/random';
  import { reducedMotion } from '$lib/reduced-motion'
  import { onMount } from 'svelte'
 
  import Link from './Link.svelte';

  export let dj: DJ;

  let n = random([1, 5]);
  onMount(() => {
    setInterval(() => {
      if(!$reducedMotion) {
        n = ((n + 1) % 5) + 1;
      }
    }, 1000);
  })
</script>

<div class="font-serif leading-6">
  <div class="flex items-center justify-between">
    <div>
      <h3 class="text-left text-emphase">{dj.label}</h3>
      <br />
      <ul class="text-left">
        {#each dj.links as link}
          <li>
            {#if typeof link === 'string'}
              <Link external href={link} title={'aller ecouter sur ' + link}
                >{link}</Link
              >
            {:else if link.type === 'soundcloud'}
              <Link external href={link.href} title="aller sur son Soundcloud"
                >Soundcloud</Link
              >
            {:else if link.type === 'mixcloud'}
              <Link external href={link.href} title="aller sur son mixcloud"
                >Mixcloud</Link
              >
            {:else if link.type === 'facebook'}
              <Link external href={link.href} title="aller sur son Facebook"
                >Facebook</Link
              >
            {:else if link.type === 'instagram'}
              <Link external href={link.href} title="aller sur son Instagram"
                >Instagram</Link
              >
            {/if}
          </li>
        {/each}
      </ul>
    </div>
    {#if dj.imageSrc}
      <a href={`/dj/${dj.slug}`} title={`Aller sur la page de ${dj.label}`}>
        <img
          class={'animate-blob blob-' + n}
          src={dj.imageSrc}
          title={dj.label}
          alt="Photo de {dj.label}"
          width="200"
          height="200"
          loading="lazy"
        />
      </a>
    {/if}
  </div>
  <br />
  <p class="text-justify font-serif leading-6 whitespace-pre-wrap">
    {dj.description}
  </p>
</div>
