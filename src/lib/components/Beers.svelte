<script lang="ts">
  import { euro } from '$lib/money';
  import type { Beer } from 'src/data/types';
  import Stack from './Stack.svelte';
  export let beers: Beer[];

  const main_label = ({ abv, label, type_label }) => {
    return [
      type_label ? `${type_label} - ` : '',
      label,
      abv ? ` ${abv}°` : '',
    ].join('');
  };
</script>

<div class="flex flex-col pt-2">
  <Stack>
    {#each beers as { type_label, label, brewery, price, abv }}
      <div class="flex items-end">
        <div class="flex-1 text-left">
          <div>
            <div>{main_label({ abv, label, type_label })}</div>
            <div class="text-dore">{brewery}</div>
          </div>
        </div>
        <div>
          <Stack horizontal>
            {#if typeof price === 'number'}
              <div>{euro(price)}</div>
            {:else}
              {#each Object.entries(price) as [_, p]}
                <div>{euro(p)}</div>
              {/each}
            {/if}
          </Stack>
        </div>
      </div>
    {/each}
  </Stack>
</div>
