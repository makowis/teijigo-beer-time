<template>
  <img :class="$style.logo" src="@/assets/logo_1.png">
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class TbtH2 extends Vue {}
</script>

<style module>
.logo {
  max-height: 400px;
  max-width: 90%;
  margin: 0 10px;
  box-sizing: border-box;
}
</style>
