<template>
  <div class="linksWrapper">
    <RouterLink to="/" active-class="active" class="links">Hello</RouterLink>
    <RouterLink to="/contact" active-class="active" class="links">Contact</RouterLink>
  </div>
  <RouterView/>
  <Navbar :on-selected="onSelected"/>
  <Counter v-if="selectedIndex == 0"/>
  <Crypto v-if="selectedIndex == 1"/>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/navbar/Navbar.vue'
import HelloWorld from './components/HelloWorld.vue'
import Counter from './components/Counter.vue'
import Crypto from './components/Crypto.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Navbar,
    Counter,
    Crypto,
    RouterLink,
    RouterView
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


<style scoped>
.active {
  color: green;
}
.linksWrapper {
  background-color: aqua;
  text-align: start;
  padding: 20px;
}
.links {
  padding-right: 20px;
}
</style>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
