<template>
  <h3 :class="$style.h3">
    <slot/>
  </h3>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class TbtH3 extends Vue {}
</script>

<style module>
.h3 {
  font-weight: normal;
}
</style>
