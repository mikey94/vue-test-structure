<template>
  <Navbar :on-selected="onSelected"/>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <Counter v-if="selectedIndex == 0"/>
  <Crypto v-if="selectedIndex == 1"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar/Navbar.vue'
import Counter from './components/Counter.vue';
import Crypto from './components/Crypto.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Navbar,
    Counter,
    Crypto
  },
  data() {
    return {
      selectedIndex: 0
    }
  },
  methods: {
    onSelected: function(index) {
      this.selectedIndex = index
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
