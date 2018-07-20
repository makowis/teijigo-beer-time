<template>
  <h1 :class="$style.h1">
    <slot/>
  </h1>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class TbtH1 extends Vue {}
</script>

<style module>
.h1 {
  font-weight: normal;
}
</style>
