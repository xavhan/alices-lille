<script lang="ts">
  import { euro } from '$lib/money';
  import type { Cocktail } from 'src/data/types';
  import Stack from './Stack.svelte';
  export let cocktails: Cocktail[];
</script>

<div class="flex flex-col pt-2">
  <Stack>
    {#each cocktails as { label, price, composition, virgin, vegan }}
      <div class="flex items-end">
        <div class="flex-1 text-left">
          <div>
            <div>
              {label}
              {#if virgin}
                <span class="text-emphase">(sans alcool)</span>
              {/if}
              {#if vegan}
                <span role="img" aria-label="vegan">🌱</span>
              {/if}
            </div>
            <div class="text-hide">
              {@html composition.replace(
                'Liqueur de violette',
                '<span class="violette">Liqueur de violette</span>'
              )}
            </div>
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
