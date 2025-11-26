<script setup lang="ts">
import TbtMenu from '@/components/organisms/TbtMenu.vue'
import TbtMain from '@/components/organisms/TbtMain.vue'
import TbtFooter from '@/components/organisms/TbtFooter.vue'
</script>

<template>
  <div id="app">
    <a href="#main-container" class="skip-link">メインコンテンツへスキップ</a>
    <VitePwaManifest />
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

.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #000;
  color: #fff;
  padding: 8px;
  z-index: 100;
  transition: top 0.3s;
}

.skip-link:focus {
  top: 0;
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
