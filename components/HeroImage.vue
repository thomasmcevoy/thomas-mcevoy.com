<template>
  <section id="hero-image">
    <img
      src="~/assets/thomas-l.jpg"
      srcset="~/assets/thomas-portrait-s.jpg 320w, ~/assets/thomas-portrait-m.jpg 640w, ~/assets/thomas-m.jpg 960w, ~/assets/thomas-l.jpg 1920w, ~/assets/thomas-xl.jpg 5237w"
    >
  </section>
</template>

<script>
export default {
  name: 'HeroImage'
}
</script>

<style>
#hero-image {
  padding: 0;
}
</style>
