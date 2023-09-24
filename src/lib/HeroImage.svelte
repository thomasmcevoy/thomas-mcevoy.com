<script>
  import portraitSmall from "../assets/thomas-portrait-s.jpg";
  import portraitMedium from "../assets/thomas-portrait-m.jpg";
  import medium from "../assets/thomas-m.jpg";
  import large from "../assets/thomas-l.jpg";
  import extraLarge from "../assets/thomas-xl.jpg";
</script>

<section id="hero-image">
  <img
    src={large}
    srcset="{portraitSmall} 320w, 
            {portraitMedium} 640w,
            {medium} 960w,
            {large} 1920w,
            {extraLarge} 5237w"
    alt="Thomas"
  />
</section>

<style>
  #hero-image {
    padding: 0;
  }
</style>
