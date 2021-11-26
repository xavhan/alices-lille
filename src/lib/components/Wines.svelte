<script lang="ts">
    import { euro } from '$lib/money';
    import type { Wine } from '$lib/types'
    import Stack from './Stack.svelte';
    export let wines: Wine[];
</script>

<div class="wines">
    <Stack --space="10px">
        {#each wines as { label, estate, prices, grapes, text }}
            <div class="wine">
                <div class="names">
                    <div>
                        <div class="label">{label}</div>
                        {#if grapes}
                            <div class="grapes">{grapes}</div>
                        {/if}
                        {#if estate}
                            <div class="estate">{estate}</div>
                        {/if}
                        {#if text}
                            <div class="text">{text}</div>
                        {/if}
                    </div>
                </div>
                <div>
                    <Stack horizontal>  
                        {#if prices['12']}
                            <div class="price">{euro(prices['12'])}</div>
                        {/if}
                        {#if prices['75']}
                            <div class="price">{euro(prices['75'])}</div>
                        {/if}
                    </Stack>
                </div>
            </div>
        {/each}
    </Stack>
</div>

<style>
    .wines {
        display: flex;
        flex-direction: column;
        padding-top: 10px;
        /* font-family: 'Trueno Light'; */
    }
    .wine {
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
    .estate {
        color: var(--alices-gold)
    }
    .grapes, .text {
        color: var(--alices-darkred)
    }
</style>