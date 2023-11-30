<script setup lang="ts">
  defineProps<{
    youtubeUrl: string
  }>()
</script>

<template>
  <div :class="$style.video">
    <iframe
      width="560"
      height="315"
      :src= youtubeUrl
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen
    ></iframe>
  </div>
</template>

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
