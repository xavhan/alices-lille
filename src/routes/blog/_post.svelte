<script context="module">
  export const prerender = true;
</script>

<script>
  import { format } from '$lib/date';
  import Header from "$lib/components/Header.svelte";
  import SvelteSeo from 'svelte-seo';

  export let title
  export let date
</script>

<SvelteSeo title="Alices | Blog | {title}" />

<Header>{title}</Header>

<article>
  <slot />
</article>

<hr>

<small>Alices, le {format(date)}</small>

<style>
  :global(*) { 
    text-align: left;
  }
  :global(h2,h3) { 
    color: var(--alices-rouge);
    margin-bottom: var(--size-2);
    margin-top: var(--size-4);
  }
  :global(h2) { 
    font-size: var(--font-size-3); ;
  }
  :global(h3) { 
    font-size: var(--font-size-2); ;
  }
  
  :global(p,ul,ol) { 
    margin-bottom: var(--size-2);
  }
  :global(p, li) { 
    font-family: serif;
    text-transform: none;
    letter-spacing:normal
  }
  :global(ul,ol) { 
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }
  :global(li) { 
    list-style: disc;
  }
  :global(img) {
    width: 100%;
  }
  :global(strong) {
    font-weight: bold;
  }
  :global(em) {
    font-style: italic;
  }
  small {
    font-size: var(--font-size-0);
  }
</style>
