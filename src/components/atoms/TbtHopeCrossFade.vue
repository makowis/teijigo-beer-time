<template>
  <tbt-youtube-embedded>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/KE3It-tas0Y?rel=0"
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen
    ></iframe>
  </tbt-youtube-embedded>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import TbtYoutubeEmbedded from '@/components/atoms/TbtYoutubeEmbedded.vue';

@Component({
  components: {
    TbtYoutubeEmbedded,
  },
})
export default class TbtHopeCrossFade extends Vue {}
</script>
