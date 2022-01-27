<script lang="ts">
  import { euro } from '$lib/money';
  import type { FoodItem } from 'src/data/types';
  import Stack from './Stack.svelte';
  export let food: FoodItem[];
</script>

<div class="food">
  <Stack --space="10px">
    {#each food as { label, prices }}
      <div class="fooditem">
        <div class="names">
          <div>
            <div class="label">{label}</div>
          </div>
        </div>
        <div>
          <Stack horizontal>
            {#if prices['200']}
              <div class="price">{euro(prices['200'])}</div>
            {/if}
          </Stack>
        </div>
      </div>
    {/each}
  </Stack>
</div>

<style>
  .food {
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    /* font-family: 'Trueno Light'; */
  }
  .fooditem {
    display: flex;
    align-items: center;
  }
  .names {
    flex: 1;
    text-align: start;
  }
</style>
