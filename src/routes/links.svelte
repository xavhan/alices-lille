<script context="module" lang="ts">
  import { browser, dev } from '$app/env';
  import SvelteSeo from 'svelte-seo';
  import Stack from '$lib/components/Stack.svelte';
  import { LINKS } from '$data/links';

  export const hydrate = dev;
  export const router = browser;
  export const prerender = true;
</script>

<SvelteSeo
  title="Alices | Liens"
  description="Tous les liens de la vie du bar"
/>

<Stack>
  <hr />

  {#each LINKS as {href, label, target = '_blank' }}
    <a {href} {target} rel="nofollow noopener">
      {label}
    </a>
  {/each}

  <hr />
</Stack>

<style>
  a {
    display: block;
    text-transform: uppercase;
    color: var(--alices-white);
    padding: var(--size-4) var(--size-6);
    border-radius: var(--radius-round);
    text-decoration: none;
    font-family: 'Trueno Light';
    background-color: var(--alices-darkred);
    box-shadow: var(--shadow-1);
  }
  a:hover {
    box-shadow: var(--shadow-3);
  }
</style>
