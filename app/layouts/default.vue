<script setup lang="ts">
import TbtMenu from '@/components/organisms/TbtMenu.vue'
import TbtMain from '@/components/organisms/TbtMain.vue'
import TbtFooter from '@/components/organisms/TbtFooter.vue'
</script>

<template>
  <div id="app">
    <tbt-menu />
    <tbt-main>
      <slot></slot>
      <tbt-footer />
    </tbt-main>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
}

@media screen and (width <= 900px) {
  #app {
    display: block;
  }
}

body {
  margin: 0;
}
</style>
