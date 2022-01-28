<script lang="ts">
  import '../style/reset.css';
  import '../style/app.css';
  import Link from '$lib/components/Link.svelte';
</script>

<svelte:head>
  <style>
    @font-face {
      font-family: 'Bebas Neue';
      src: url('/fonts/BebasNeue.otf');
      font-display: auto;
    }
    @font-face {
      font-family: 'Trueno Light';
      src: url('/fonts/TruenoLt.otf');
      font-display: auto;
    }
  </style>
</svelte:head>

<main class="mx-auto">
  <header>
    <a href="/" class="no-underline">
      <h1 class="logo">Alices</h1>
    </a>

    <h2 class="cbsc mb-2 font-sans-2 text-dore">
      Café • Bar • Saisonnier • Culturel
    </h2>

    <div class="address">
      <Link href="https://goo.gl/maps/whMaXe8PMdZi9cXB7" target="_blank">
        <address>12 rue des 3 couronnes, 59000 Lille</address>
      </Link>
    </div>
  </header>

  <slot />
</main>

<style>
  main {
    max-width: var(--size-xs);
  }

  header {
    margin-bottom: var(--size-6);
  }

  .logo {
    font-size: var(--font-size-8);
    color: var(--alices-noir);
  }

  .cbsc {
    font-size: var(--font-size-0);
  }
</style>
