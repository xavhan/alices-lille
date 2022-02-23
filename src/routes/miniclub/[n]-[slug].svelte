<script lang="typescript">
  import type { Event } from '$data/types';
  import { page } from '$app/stores';
  import { getEvent } from '$lib/events';
  import Header from '$lib/components/Header.svelte';

  const miniclub: Event = getEvent(parseInt($page.params.n));

</script>

<div>
  <Header>{miniclub.label}</Header>

  <img src={miniclub.imageSrc} alt={miniclub.label} width="100%" height="100%"> 
</div>



