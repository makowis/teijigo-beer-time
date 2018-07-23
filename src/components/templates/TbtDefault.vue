<template>
  <div id="app">
    <tbt-menu />
    <tbt-main>
      <slot />
      <tbt-footer />
    </tbt-main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import TbtMenu from '@/components/organisms/TbtMenu.vue';
import TbtMain from '@/components/organisms/TbtMain.vue';
import TbtFooter from '@/components/organisms/TbtFooter.vue';

@Component({
  components: {
    TbtMenu,
    TbtMain,
    TbtFooter,
  },
})
export default class TbtDefault extends Vue {}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
}

@media screen and (max-width: 900px) {
  #app {
    display: block;
  }
}

body {
  margin: 0;
  background-image: url('../../assets/bg.png');
}
</style>
