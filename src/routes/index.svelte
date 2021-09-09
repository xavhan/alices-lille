<script context="module" lang="ts">
  import { browser, dev } from '$app/env';

  // we don't need any JS on this page, though we'll load
  // it in dev so that we get hot module replacement...
  export const hydrate = dev;

  // ...but if the client-side router is already loaded
  // (i.e. we came here from elsewhere in the app), use it
  export const router = browser;

  // since there's no dynamic data here, we can prerender
  // it so that it gets served as a static asset in prod
  export const prerender = true;
</script>

<script lang="ts">
</script>

<svelte:head>
  <title>Alices | Lille</title>
</svelte:head>

<div class="wrapper">
  <div class="logo">
    Alices
  </div>

  <div class="cbsc">
    Café • Bar • Saisonnier • Culturel
  </div>

  <div class="buttons">
    <div class="menu">
      <button>
        Découvrir la carte
      </button>
    </div>

    <div class="map">
      <button>
        Nous rendre visite
      </button>
    </div>
  </div>

  <hr/>

  <div class="open_title">
    Horaires d'ouverture
  </div>

  <hr/>

  <div class="open_hours">
    Mardi au Jeudi: 15h - 00H
    <br/>
    Vendredi: 15h - 1h
    <br/>
    Samedi: 15h - 2h
  </div>

  <hr/>

  <div class="social_networks">
    Facebook - Insta - Mapster
  </div>

  <hr/>
</div>
