<script lang="ts">
  import { euro } from '$lib/money';
  import type { Wine } from 'src/data/types';
  import Stack from './Stack.svelte';
  export let wines: Wine[];
</script>

<div class="flex flex-col pt-2">
  <Stack>
    {#each wines as { label, estate, prices, grapes, text }}
      <div class="flex items-center">
        <div class="flex-1 text-left">
          <div>
            <div>{label}</div>
            {#if grapes}
              <div class="text-rouge">{grapes}</div>
            {/if}
            {#if estate}
              <div class="text-dore">{estate}</div>
            {/if}
            {#if text}
              <div class="text-rouge">{text}</div>
            {/if}
          </div>
        </div>
        <div>
          <Stack horizontal>
            {#if prices['12']}
              <div>{euro(prices['12'])}</div>
            {/if}
            {#if prices['75']}
              <div>{euro(prices['75'])}</div>
            {/if}
          </Stack>
        </div>
      </div>
    {/each}
  </Stack>
</div>
