<template>
  <div id="app">
    <img class="logo" src="./assets/logo_1.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#app .logo {
  max-height: 400px;
  max-width: 90%;
  margin: 0 10px;
  box-sizing: border-box;
}

body {
  margin: 0;
  background-image: url("./assets/bg.png");
  background-attachment: fixed;
}
</style>
