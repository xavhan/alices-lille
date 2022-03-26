<script lang="ts">
import type { DJ } from "$data/types";

import Link from "./Link.svelte";


  export let dj: DJ;
</script>

<div class="flex items-center justify-between ">
  {#if dj.imageSrc}
    <a href={`/dj/${dj.slug}`} title={`Aller sur la page de ${dj.label}`}>
      <img
        class="rounded-full shadow-lg"
        src={dj.imageSrc}
        title={dj.label}
        alt="Photo de {dj.label}"
        width="200"
        height="200"
        loading="lazy"
      />
    </a>
  {/if}
  <div>

    <ul class="text-right">
      {#each dj.links as link}
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
          {:else if link.type === 'mixcloud'}
            <Link
              external
              href={link.href}
              title="aller sur son mixcloud">Mixcloud</Link
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
    </ul>
  </div>
</div>
<br />
<p class="text-justify">{dj.description}</p>
<br />

