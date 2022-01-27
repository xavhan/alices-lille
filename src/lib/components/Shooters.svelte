<script lang="ts">
  import Stack from './Stack.svelte';
  // export let shooters = [];
</script>

<div class="shooters">
  <Stack --space="10px">
    <div class="shooter">
      Nos recettes maison changent régulièrement <br />
      Viens voir les jarres au bar !
    </div>
  </Stack>
</div>

<style>
  .shooters {
    text-align: start;
  }
</style>
