<script lang="ts">
  import { euro } from '$lib/money';
  import type { Beer } from 'src/data/types';
  import Stack from './Stack.svelte';
  export let beers: Beer[];
</script>

<div class="flex flex-col pt-2">
  <Stack>
    {#each beers as { label, brewery, prices }}
      <div class="flex items-center">
        <div class="flex-1 text-left">
          <div>
            <div>{label}</div>
            <div class="text-dore">{brewery}</div>
          </div>
        </div>
        <div>
          <Stack horizontal>
            {#if prices['25']}
              <div>{euro(prices['25'])}</div>
            {/if}
            {#if prices['33']}
              <div>{euro(prices['33'])}</div>
            {/if}
            {#if prices['50']}
              <div>{euro(prices['50'])}</div>
            {/if}
          </Stack>
        </div>
      </div>
    {/each}
  </Stack>
</div>
