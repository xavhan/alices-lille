<script lang="ts">
    import Stack from './Stack.svelte'
    export let shooters = []
</script>

<div class="shooters">
    <Stack --space="10px">
        {#each shooters as {label}}
            <div class="shooter">{label}</div>
        {/each}
    </Stack>
</div>

<style>
    .shooters {
        text-align: start;
    }
</style>