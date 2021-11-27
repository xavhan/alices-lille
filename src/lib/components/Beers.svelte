<script lang="ts">
  import { euro } from '$lib/money';
  import type { Beer } from '$lib/types';
  import Stack from './Stack.svelte';
  export let beers: Beer[];
</script>

<div class="beers">
  <Stack --space="10px">
    {#each beers as { label, brewery, prices }}
      <div class="beer">
        <div class="names">
          <div>
            <div class="label">{label}</div>
            <div class="brewery">{brewery}</div>
          </div>
        </div>
        <div>
          <Stack horizontal>
            {#if prices['25']}
              <div class="price">{euro(prices['25'])}</div>
            {/if}
            {#if prices['33']}
              <div class="price">{euro(prices['33'])}</div>
            {/if}
            {#if prices['50']}
              <div class="price">{euro(prices['50'])}</div>
            {/if}
          </Stack>
        </div>
      </div>
    {/each}
  </Stack>
</div>

<style>
  .beers {
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    /* font-family: 'Trueno Light'; */
  }
  .beer {
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
  .brewery {
    color: var(--alices-gold);
  }
</style>
