<template>
  <div id="app">
    <nav id="menu-container">
      <ul class="menu">
        <li class="menu-item">
          <router-link to="/">
            トップ
          </router-link>
        </li>
        <li class="menu-item">
          <router-link to="/disco">
            DISCOGRAPHY
          </router-link>
        </li>
        <li class="menu-item">
          <router-link to="/member">
            メンバー紹介
          </router-link>
        </li>
        <li class="menu-item">
          <router-link to="/bbs">
            一言掲示板
          </router-link>
        </li>
      </ul>
    </nav>
    <div id="main-content">
      <router-link to="/">
        <img class="logo" src="./assets/logo_1.png">
      </router-link>
      <router-view/>
      <footer>
        <p>©定時後ビールタイム</p>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
});
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
}

#app .logo {
  max-height: 400px;
  max-width: 90%;
  margin: 0 10px;
  box-sizing: border-box;
}

#main-content {
  width: 80%;
  padding-top: 60px;
  text-align: center;
}

#menu-container {
  width: 20%;
  border-right: 5px solid gainsboro;
  padding-top: 60px;
}

#menu-container .menu {
  list-style: none;
}

#menu-container .menu .menu-item {
  margin-bottom: 20px;
}

#menu-container .menu .menu-item:before {
  content: '🍺';
}

@media screen and (max-width: 900px) {
  #app {
    display: block;
  }

  #main-content {
    width: 100%;
    padding-top: 20px;
    border-top: 1px solid black;
  }

  #menu-container {
    width: 100%;
    padding-top: 20px;
    border-right: none;
    border-bottom: 5px solid gainsboro;
  }

  #menu-container .menu {
    display: flex;
    justify-content: space-around;
    margin: 0;
    padding: 0;
  }
}

body {
  margin: 0;
  background-image: url('./assets/bg.png');
}

footer {
  padding: 30px;
}
</style>
