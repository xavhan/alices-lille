<script lang="ts">
  import { euro } from '$lib/money';
  import type { Spirit } from 'src/data/types';
  import Stack from './Stack.svelte';
  export let spirits: Spirit[];
</script>

<div class="flex flex-col pt-2">
  <Stack>
    {#each spirits as { label, price, description, abv }}
      <div class="flex items-end">
        <div class="flex-1 text-left">
          <div>
            <div class="label">
              {label}<span class="ml-1 text-ropuge">{abv.toString()}°</span>
            </div>
            <div class="text-dore">{description}</div>
          </div>
        </div>
        <div>
          <Stack horizontal>
            <div>{euro(price)}</div>
          </Stack>
        </div>
      </div>
    {/each}
  </Stack>
</div>
