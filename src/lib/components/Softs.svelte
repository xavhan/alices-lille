<script lang="ts">
  import { euro } from '$lib/money';
  import type { Soft } from 'src/data/types';
  import Stack from './Stack.svelte';
  export let softs: Soft[];
</script>

<div class="flex flex-col pt-2">
  <Stack>
    {#each softs as { label, prices }}
      <div class="flex items-center">
        <div class="flex-1 text-left">
          <div>
            <div>
              {label}
            </div>
          </div>
        </div>
        <div>
          <Stack horizontal>
            {#if prices['33']}
              <div>{euro(prices['33'])}</div>
            {/if}
          </Stack>
        </div>
      </div>
    {/each}
  </Stack>
</div>
