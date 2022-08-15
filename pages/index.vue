<template>
  <div id="app">
    <Header/>
    <main>
      <HeroImage/>
      <About/>
      <Music/>
      <Shows/>
      <Contact @toggleModal="toggleModal"/>
    </main>
    <Footer/>
    <Modal v-show="showModal" @toggleModal="toggleModal"/>
  </div>
</template>

<script>
import {
  Header,
  HeroImage,
  About,
  Music,
  Shows,
  Contact,
  Footer,
  Modal
} from '~/components'

export default {
  name: 'App',
  components: {
    Header,
    HeroImage,
    About,
    Music,
    Shows,
    Contact,
    Footer,
    Modal
  },
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

html,
body {
  margin: 0 auto;
  padding: 0;
}

#app {
  font: 100% 'Futura', 'Futura Standard', 'Trebuchet MS', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #222;
}

a {
  text-decoration: none;
}

ol {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

svg {
  width: 100%;
  height: 100%;
}

img {
  max-width: 100%;
}
@media (min-width: 880px) {
  img {
    max-width: 94%;
  }
}
@media (min-width: 94em) {
  img {
    max-width: 94em;
  }
}

section {
  padding: 3.6875em 0;
  background-color: white;
}
@media (min-width: 750px) {
  section {
    padding: 4.625em 0;
  }
}
@media (min-width: 880px) {
  section {
    padding: 7em 0;
  }
}

h1 {
  margin: 0;
  color: inherit;
  font-weight: 400;
  font-size: 1.625em;
  letter-spacing: 0.125em;
}
@media (min-width: 450px) {
  h1 {
    font-size: 2.25em;
  }
}

h2 {
  font-weight: 100;
  font-size: 0.4375em;
  letter-spacing: 0.6875em;
  margin: 0 0 6em;
}
@media (min-width: 750px) {
  h2 {
    font-size: 0.5625em;
    margin-bottom: 8em;
  }
}
@media (min-width: 880px) {
  h2 {
    font-size: 0.75em;
    margin-bottom: 8.75em;
  }
}

h3 {
  margin: 0 0 0.5em;
  font-weight: 400;
  font-size: 1.0625em;
  letter-spacing: 0.1875em;
}
@media (min-width: 880px) {
  h3 {
    font-size: 1.25em;
  }
}

h4 {
  margin: 0 0 1.33em;
  font-weight: 400;
  font-size: 1.4375em;
  letter-spacing: 0.1em;
}
@media (min-width: 880px) {
  h4 {
    font-size: 2.5em;
  }
}

@font-face {
  font-family: 'Futura Standard';
  src: url('../assets/futura-standard.ttf') format('ttf');
}
@font-face {
  font-family: 'Futura Light';
  src: url('../assets/futura-light.woff2') format('woff2');
}
@font-face {
  font-family: 'Futura Book';
  src: url('../assets/futura-book.woff2') format('woff2');
}

button {
  border: none;
  padding: 0.875em 2.75em 0.625em;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.12);
  background: inherit;
  font: 0.625em/1.675 'Futura Book', 'Futura', 'Futura Standard', 'Trebuchet MS',
    sans-serif;
  letter-spacing: 0.2em;
  transition: 0.5s ease;
}
button:hover {
  cursor: pointer;
}
@media (min-width: 750px) {
  button {
    font-size: 0.6875em;
  }
}
@media (min-width: 880px) {
  button {
    font-size: 0.75em;
  }
}

button:active,
.no-js button:hover,
.no-touch button:hover {
  color: #fff;
  background-color: #222;
}

.expandable {
  overflow: hidden;
  transition: 0.5s;
}
</style>
