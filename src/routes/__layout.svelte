<script lang="ts">
  import '../reset.css';
  import '../app.css';
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

<main>
  <header>
    <a href="/">
      <div class="logo">Alices</div>
    </a>

    <div class="cbsc">Café • Bar • Saisonnier • Culturel</div>

    <div class="address">
      <a href="https://goo.gl/maps/whMaXe8PMdZi9cXB7">
        12 rue des 3 couronnes, 59000 Lille
      </a>
    </div>
  </header>

  <slot />
</main>

<style>
  main {
    max-width: 400px;
    margin: 0 auto;
  }
  
  header {
    margin-bottom: var(--spacing-huge);
  }

  .logo {
    font-size: 60px;
  }

  .cbsc {
    color: var(--alices-gold);
    font-family: 'Trueno Light';
    font-size: 12px;
    margin-bottom: var(--spacing);
  }
  a {
    text-decoration: none;
  }
  a:visited {
    color: white;
  }
</style>
