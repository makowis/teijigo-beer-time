<template>
  <div id="app">
    <nav id="menu-container">
      <ul class="menu">
        <li class="menu-item">
          <tbt-top-link>
            トップ
          </tbt-top-link>
        </li>
        <li class="menu-item">
          <tbt-disco-link>
            DISCOGRAPHY
          </tbt-disco-link>
        </li>
        <li class="menu-item">
          <tbt-member-link>
            メンバー紹介
          </tbt-member-link>
        </li>
        <li class="menu-item">
          <tbt-bbs-link>
            一言掲示板
          </tbt-bbs-link>
        </li>
      </ul>
    </nav>
    <div id="main-container">
      <tbt-top-link>
        <img class="logo" src="@/assets/logo_1.png">
      </tbt-top-link>
      <slot />
      <footer>
        <p>©定時後ビールタイム</p>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import TbtBbsLink from '@/components/atoms/TbtBbsLink.vue';
import TbtDiscoLink from '@/components/atoms/TbtDiscoLink.vue';
import TbtMemberLink from '@/components/atoms/TbtMemberLink.vue';
import TbtTopLink from '@/components/atoms/TbtTopLink.vue';

@Component({
  components: {
    TbtBbsLink,
    TbtDiscoLink,
    TbtMemberLink,
    TbtTopLink,
  },
})
export default class Default extends Vue {}
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

#main-container {
  width: 80%;
  margin-left: 20%;
  border-left: 5px solid gainsboro;
  padding-top: 60px;
  text-align: center;
}

#menu-container {
  position: fixed;
  width: 20%;
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

  #main-container {
    width: 100%;
    padding-top: 20px;
    margin: 0;
    border-top: 1px solid black;
    border-left: none;
  }

  #menu-container {
    position: relative;
    width: 100%;
    padding-top: 0;
    border-bottom: 5px solid gainsboro;
  }

  #menu-container .menu {
    justify-content: space-around;
    margin: 10px;
    padding: 0;
  }

  #menu-container .menu .menu-item {
    display: inline-block;
    margin-bottom: 10px;
  }
}

body {
  margin: 0;
  background-image: url('../../assets/bg.png');
}

footer {
  padding: 30px;
}
</style>
