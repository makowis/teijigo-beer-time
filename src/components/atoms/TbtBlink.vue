<template>
  <span :class="$style.blink">
    <slot />
  </span>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class TbtBlink extends Vue {}
</script>

<style module>
.blink {
  animation: blink 1s step-end infinite;
  -webkit-animation: blink 1s step-end infinite;
}

@keyframes blink {
  75% {
    opacity: 0;
  }
}

@-webkit-keyframes blink {
  75% {
    opacity: 0;
  }
}
</style>
