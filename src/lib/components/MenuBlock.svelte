<script lang="ts">
  export let title;
  export let text = '';
</script>

<div class="pb-2">
  <hr />
  <div class="flex justify-between items-baseline">
    <div class="font-sans-2 text-emphase items-baseline">{title}</div>

    {#if text}
      <div>{text}</div>
    {/if}
  </div>
  <hr />

  <slot />
</div>
