<script lang="ts">
  import { euro } from '$lib/money';
  import type { Spirit } from 'src/data/types';
  import Stack from './Stack.svelte';
  export let spirits: Spirit[];
</script>

<div class="flex flex-col pt-2">
  <Stack>
    {#each spirits as { label, prices, description, degree }}
      <div class="flex items-center">
        <div class="flex-1 text-left">
          <div>
            <div class="label">
              {label}<span class="ml-1 text-ropuge">{degree.toString()}°</span>
            </div>
            <div class="text-dore">{description}</div>
          </div>
        </div>
        <div>
          <Stack horizontal>
            {#if prices['12']}
              <div>{euro(prices['12'])}</div>
            {/if}
          </Stack>
        </div>
      </div>
    {/each}
  </Stack>
</div>
