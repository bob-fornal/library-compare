
<template>
  <div class="toolbar">
    <router-link class="item" to="/cards">Cards</router-link>
    <router-link class="item" to="/deck">Deck</router-link>
  </div>
</template>

<script>
export default {
  name: 'Header'
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.toolbar {
  background-color: #9af946;
  border-bottom: 2px solid black;
  position: fixed;
  top: 0;
  left: 0;
  padding: 1em;
  width: 100vw;
  height: 1.5em;
  text-align: left;
  z-index: 1000;
}

.item {
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  margin-right: 1em;
}
</style>
