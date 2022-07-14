<script lang="ts">
  export let href;
  export let target = undefined;
</script>

<a {href} {target} class="font-sans-2">
  <slot />
</a>

<style>
  a {
    display: block;
    text-transform: uppercase;
    text-decoration: none;
    padding: var(--size-4) var(--size-6);
    border: var(--border-size-2) solid var(--alices-rouge);
    border-radius: var(--radius-round);
    color: var(--app-text);
    box-shadow: var(--shadow-1);
  }
  a:hover {
    box-shadow: var(--shadow-3);
  }
</style>
