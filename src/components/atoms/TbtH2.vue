<template>
  <h2 :class="$style.h2">
    <slot />
  </h2>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class TbtH2 extends Vue {}
</script>

<style module>
.h2 {
  font-weight: normal;
}
</style>
