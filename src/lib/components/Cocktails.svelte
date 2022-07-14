<script lang="ts">
  import { euro } from '$lib/money';
  import type { Cocktail } from 'src/data/types';
  import Stack from './Stack.svelte';
  export let cocktails: Cocktail[];
</script>

<div class="flex flex-col pt-2">
  <Stack>
    {#each cocktails as { label, price, composition, virgin }}
      <div class="flex items-end">
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
            <div>{euro(price)}</div>
          </Stack>
        </div>
      </div>
    {/each}
    <br />
    <div class="text-right text-rouge flex justify-between">
      <div>🍸🥂🥃🍹</div>
      <div>et encore plus sur demande au bar</div>
    </div>
  </Stack>
</div>
