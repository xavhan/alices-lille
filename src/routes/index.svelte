<script context="module" lang="ts">
  import { browser, dev } from '$app/env';
  import SvelteSeo from "svelte-seo";

  export const hydrate = dev;
  export const router = browser;
  export const prerender = true;
</script>


<SvelteSeo
  title="Alices | Lille"
  description="Café Bar Saisonnier Culturel"
  jsonLd={{
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Alices",
    "description": "Café Bar Saisonnier Culturel",
    "currenciesAccepted": "EUR",
    "openingHours":[
      "Tu-Th 16:00-00:00", 
      "Fr 16:00-01:00", 
      "Sa 15:00-02:00"
    ],
    "address": "12 rue des 3 couronnes, 59000 Lille, France",
    "paymentAccepted":"Cash, Credit Card",
    "latitude": "50.6375004",
    "longitude": "3.0638824",
    "maximumAttendeeCapacity": 50,
    "url": "https://alices-lille.com",
  }}
/>

<!-- <div class="buttons">
  <div class="menu">
    <a href="carte"> Découvrir la carte </a>
  </div>

  <div class="map">
    <a href="venir"> Nous rendre visite </a>
  </div>
</div> -->

<hr />

<div class="title">Horaires d'ouverture</div>

<hr />

<div class="open_hours">
  Mardi au Jeudi: 16h - 00H
  <br />
  Vendredi: 16h - 1h
  <br />
  Samedi: 15h - 2h
</div>

<hr />

<div class="title">Reseaux sociaux</div>

<hr />


<div class="social_networks">
  <!-- Facebook
  - -->
  <a href="https://www.instagram.com/alices.lille/" target="_blank">Instagram</a>
  <!-- -
  Mapster -->
</div>

