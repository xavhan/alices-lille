<script context="module" lang="ts">
  import { browser, dev } from '$app/env';
  export const hydrate = dev;
  export const router = browser;
  export const prerender = true;
</script>

<script lang="ts">
</script>

<svelte:head>
  <title>Alices | Lille</title>
</svelte:head>

<div class="buttons">
  <div class="menu">
    <a href="carte"> Découvrir la carte </a>
  </div>

  <div class="map">
    <a href="venir"> Nous rendre visite </a>
  </div>
</div>

<hr />

<div class="open_title">Horaires d'ouverture</div>

<hr />

<div class="open_hours">
  Mardi au Jeudi: 15h - 00H
  <br />
  Vendredi: 15h - 1h
  <br />
  Samedi: 15h - 2h
</div>

<hr />

<div class="social_networks">
  Facebook
  -
  <a href="https://www.instagram.com/alices.lille/" target="_blank">Insta</a>
  -
  Mapster
</div>

<hr />
