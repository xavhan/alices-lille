<script lang="ts">
  import { euro } from '$lib/money';
  import type { Cocktail } from '$lib/types';
  import Stack from './Stack.svelte';
  export let cocktails: Cocktail[];
</script>

<div class="cocktails">
  <Stack --space="10px">
    {#each cocktails as { label, prices, composition }}
      <div class="cocktail">
        <div class="names">
          <div>
            <div class="label">{label}</div>
            <div class="composition">{composition}</div>
          </div>
        </div>
        <div>
          <Stack horizontal>
            {#if prices['12']}
              <div class="price">{euro(prices['12'])}</div>
            {/if}
          </Stack>
        </div>
      </div>
    {/each}
  </Stack>
</div>

<style>
  .cocktails {
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    /* font-family: 'Trueno Light'; */
  }
  .cocktail {
    display: flex;
    align-items: center;
  }
  .names {
    flex: 1;
    text-align: start;
  }
  /* .label{
        font-family: 'Trueno Light';
    } */
  .composition {
    color: var(--alices-gold);
  }
</style>
