<script lang="ts">
  import '../reset.css';
  import '../app.css';
</script>

<svelte:head>
  <style>
    @font-face {
        font-family: "Albra Medium";
        src: url("/fonts/AlbraMedium.otf");
    }
    @font-face {
        font-family: "Bebas Neue";
        src: url("./fonts/BebasNeue.otf");
    }
    @font-face {
        font-family: "Trueno Light";
        src: url("/fonts/TruenoLt.otf");
    }
    @font-face {
        font-family: "Trueno Medium";
        src: url("/fonts/TruenoRg.otf");
    }
  </style>
</svelte:head>

<main>
  <div class="wrapper">
    <div class="logo">Alices</div>

    <div class="cbsc">Café • Bar • Saisonnier • Culturel</div>

    <slot />
  </div>
</main>
