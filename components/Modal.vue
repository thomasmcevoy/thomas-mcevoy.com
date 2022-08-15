<template>
  <div id="modal-container" @click="$emit('toggleModal')">
    <div id="overlay"/>
    <div id="modal">
      <div id="content">
        <p>YOUR MESSAGE HAS BEEN SENT.</p>
        <p>THANKS FOR WRITING!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal'
}
</script>

<style>
#modal-container {
  z-index: 1;
}

#overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.7;
  filter: alpha(opacity=70);
}

#modal {
  position: fixed;
  top: 37.5%;
  top: calc(50% - 87.5px);
  left: 25%;
  left: calc(50% - 200px);
  width: 400px;
  padding: 3.5em;
  background: black;
}

#content p {
  padding: 0.4em 0;
  color: white;
  font-size: 0.75em;
  letter-spacing: 0.2em;
  text-align: center;
}
</style>
