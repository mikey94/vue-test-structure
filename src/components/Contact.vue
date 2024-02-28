<template>
    <div class="contact">
      <h1>{{ msg }}</h1>
      <p>
        Contact Page
      </p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Contact',
    props: {
      msg: String
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .contact {
    display: flex;
    background-color: rgb(127, 127, 255);
    height: 40vh;
    justify-content: center;
    align-items: center;
  }
  </style>
  