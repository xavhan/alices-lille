<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  export let title = '';
</script>

<Header>
  {title}
</Header>

<div class="pt-2 pb-2">
  <slot />
</div>
