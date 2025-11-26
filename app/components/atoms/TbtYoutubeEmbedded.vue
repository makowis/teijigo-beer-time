<script setup lang="ts">
defineProps<{
  youtubeEmbedUrl: string
  videoTitle?: string
}>()
</script>

<template>
  <div class="video">
    <iframe
      width="560"
      height="315"
      :src="youtubeEmbedUrl"
      :title="videoTitle || 'YouTube動画'"
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen
    ></iframe>
  </div>
</template>

<style scoped>
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
