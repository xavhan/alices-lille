<script lang="ts">
    import { euro } from '$lib/money';
    import type { Beer } from '$lib/types'
    import Stack from './Stack.svelte';
    export let beers: Beer[];
</script>

<div class="beertap">
    <Stack --space="10px">
        {#each beers as { label, brewery, prices }}
            <div class="beer">
                <div class="names">
                    <div>
                        <div>{label}</div>
                        <div>{brewery}</div>
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
    .beertap {
        display: flex;
        flex-direction: column;
    }
    .beer {
        display: flex;
        align-items: center;
    }
    .names {
        flex: 1;
        text-align: start;
    }
</style>