<script lang="ts">
    export let title = '';
</script>

<div>
    <hr >
    <div class="title">{title}</div>
    <hr >
</div>

<div class="content">
    <slot/>
</div>

<style>
    .title {
        color: var(--alices-gold);
        font-family: 'Trueno Light';
    }
    .content {
        padding-top: var(--spacing);
        padding-bottom: var(--spacing);
    }
</style>