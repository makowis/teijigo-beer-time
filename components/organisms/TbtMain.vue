<template>
  <div id="main-container" :class="$style.mainContainer">
    <tbt-top-link>
      <tbt-logo />
    </tbt-top-link>
    <slot />
  </div>
</template>

<script lang="ts">
import TbtTopLink from '@/components/atoms/TbtTopLink.vue'
import TbtLogo from '@/components/atoms/TbtLogo.vue'

export default {
  components: {
    TbtTopLink,
    TbtLogo,
  },
}
</script>

<style module>
.mainContainer {
  width: 80%;
  min-height: 100vh;
  box-sizing: border-box;
  margin-left: 20%;
  border-left: 5px solid gainsboro;
  padding-top: 60px;
  text-align: center;
  background-image: url('../../assets/bg.png');
}

@media screen and (max-width: 900px) {
  .mainContainer {
    width: 100%;
    padding-top: 20px;
    margin: 0;
    border-top: 1px solid black;
    border-left: none;
  }
}
</style>
