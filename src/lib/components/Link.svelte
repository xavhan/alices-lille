<script lang="ts">
  export let href;
  export let target = undefined;
  export let title;
</script>

<a {href} {target} {title} rel="nofollow noopener">
  <slot />
</a>
