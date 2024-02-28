<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Hello Page
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  display: flex;
  background-color: aquamarine;
  height: 40vh;
  justify-content: center;
  align-items: center;
}
</style>
