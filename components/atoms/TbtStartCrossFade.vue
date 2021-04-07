<template>
  <tbt-youtube-embedded>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/IxTdbkoGM-Q"
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen
    ></iframe>
  </tbt-youtube-embedded>
</template>

<script lang="ts">
import TbtYoutubeEmbedded from '@/components/atoms/TbtYoutubeEmbedded.vue'

export default {
  components: {
    TbtYoutubeEmbedded,
  },
}
</script>
