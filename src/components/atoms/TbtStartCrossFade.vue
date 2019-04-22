<template>
  <tbt-youtube-embedded>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/IxTdbkoGM-Q" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
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
export default class TbtStartCrossFade extends Vue {}
</script>
