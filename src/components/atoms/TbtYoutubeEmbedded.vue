<template>
  <div :class="$style.video">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class TbtYoutubeEmbedded extends Vue {}
</script>

<style module>
.video {
  position: relative;
  height: 0;
  padding: 30px 0 56.25%;
  overflow: hidden;
}

.video iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
