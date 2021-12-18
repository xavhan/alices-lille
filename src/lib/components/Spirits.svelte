<script lang="ts">
  import { euro } from '$lib/money';
  import type { Spirit } from '$lib/types';
  import Stack from './Stack.svelte';
  export let spirits: Spirit[];
</script>

<div class="spirits">
  <Stack --space="10px">
    {#each spirits as { label, prices, description, degree }}
      <div class="spirit">
        <div class="names">
          <div>
            <div class="label">
              {label}<span class="degree">{degree.toString()}°</span>
            </div>
            <div class="description">{description}</div>
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
  .spirits {
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    /* font-family: 'Trueno Light'; */
  }
  .spirit {
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
  .description {
    color: var(--alices-gold);
  }
  .degree {
    color: var(--alices-darkred);
    margin-left: 5px;
  }
</style>
