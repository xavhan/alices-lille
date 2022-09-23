<script lang="ts">
  import { euro } from '$lib/money';
  import type { Coffee } from 'src/data/types';
  import Stack from './Stack.svelte';
  export let coffee: Coffee[];
</script>

<div class="flex flex-col pt-2">
  <Stack>
    {#each coffee as { label, price, description }}
      <div class="flex items-end">
        <div class="flex-1 text-left">
          <div>
            <div class="label">
              {label}
            </div>
            {#if description}
              <div class="text-hide">{description}</div>
            {/if}
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
