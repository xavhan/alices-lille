<script context="module" lang="ts">
  import { browser, dev } from '$app/env';
  import SvelteSeo from 'svelte-seo';
  import Stack from '$lib/components/Stack.svelte';
  import ButtonLink from '$lib/components/ButtonLink.svelte';
  import { links } from '$lib/links';

  export const hydrate = dev;
  export const router = browser;
</script>

<SvelteSeo
  title="Alices | Liens"
  description="Tous les liens de la vie du bar"
  canonical="https://alices-lille.com/links"
/>

<Stack --spacing="var(--size-4)">
  <hr />

  {#each links as { href, label, target = '_blank' }}
    <ButtonLink {href} {target}>
      {label}
    </ButtonLink>
  {/each}

  <hr />
</Stack>
