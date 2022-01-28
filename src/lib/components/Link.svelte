<script lang="ts">
  export let href;
  export let target = undefined;
</script>

<a {href} {target} rel="nofollow noopener">
  <slot />
</a>
