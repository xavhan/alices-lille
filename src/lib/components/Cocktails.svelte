<script lang="ts">
  import { euro } from '$lib/money';
  import type { Cocktail } from 'src/data/types';
  import Stack from './Stack.svelte';
  export let cocktails: Cocktail[];
</script>

<div class="flex flex-col pt-2">
  <Stack>
    {#each cocktails as { label, prices, composition, virgin }}
      <div class="flex items-center">
        <div class="flex-1 text-left">
          <div>
            <div>
              {label}
              {#if virgin}
                <span class="text-rouge">(sans alcool)</span>
              {/if}
            </div>
            <div class="text-dore">{composition}</div>
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
