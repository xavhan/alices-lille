<script>
  export let horizontal = false;
</script>

<div class="stack" class:horizontal>
  <slot />
</div>

<style>
  /* look at my cute face*/
  .stack :global(> * + *) {
    margin-top: var(--spacing, var(--size-2));
  }
  .stack.horizontal {
    display: flex;
    flex-direction: row;
  }
  .stack.horizontal :global(> * + *) {
    margin-top: 0;
    margin-left: var(--spacing, var(--size-2));
  }
</style>
