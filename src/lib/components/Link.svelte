<script lang="ts">
  export let href;
  export let title: string;
  export let external = false;

  const rel = external ? 'nofollow noopener' : undefined;
  const target = external ? '_blank' : undefined;
</script>

<a {href} {target} {title} {rel}>
  <slot />
</a>
