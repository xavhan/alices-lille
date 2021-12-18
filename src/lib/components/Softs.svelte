<script lang="ts">
  import { euro } from '$lib/money';
  import type { Soft } from '$lib/types';
  import Stack from './Stack.svelte';
  export let softs: Soft[];
</script>

<div class="softs">
  <Stack --space="10px">
    {#each softs as { label, prices }}
      <div class="soft">
        <div class="names">
          <div>
            <div class="label">
              {label}
            </div>
          </div>
        </div>
        <div>
          <Stack horizontal>
            {#if prices['33']}
              <div class="price">{euro(prices['33'])}</div>
            {/if}
          </Stack>
        </div>
      </div>
    {/each}
  </Stack>
</div>

<style>
  .softs {
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    /* font-family: 'Trueno Light'; */
  }
  .soft {
    display: flex;
    align-items: center;
  }
  .names {
    flex: 1;
    text-align: start;
  }
</style>
