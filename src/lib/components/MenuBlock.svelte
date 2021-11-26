<script lang="ts">
    export let title;
    // export let image;
    export let text = '';
</script>

<div class="menublock">
    <hr />
        <div class="menublock_title">
            <div class="title">{title}</div>
        
            {#if text}
                <div class="text">{text}</div>
            {/if}
        </div>
    <hr />

    <!-- {#if image}
      <img src={image} alt={title} />
    {/if} -->

    <slot></slot>
</div>


<style>
    .menublock_title {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
    }
</style>