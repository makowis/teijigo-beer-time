<template>
  <div id="app">
    <tbt-menu />
    <tbt-main>
      <Nuxt />
      <tbt-footer />
    </tbt-main>
  </div>
</template>

<script lang="ts">
import TbtMenu from '@/components/organisms/TbtMenu.vue'
import TbtMain from '@/components/organisms/TbtMain.vue'
import TbtFooter from '@/components/organisms/TbtFooter.vue'

export default {
  components: {
    TbtMenu,
    TbtMain,
    TbtFooter,
  },
}
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
}
</style>
