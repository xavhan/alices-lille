<script lang="ts">
  import { euro } from '$lib/money';
  import type { FoodItem } from 'src/data/types';
  import Stack from './Stack.svelte';
  export let food: FoodItem[];
</script>

<div class="flex flex-col pt-2">
  <Stack>
    {#each food as { label, price }}
      <div class="flex items-end">
        <div class="flex-1 text-left">
          <div>
            <div>{label}</div>
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
