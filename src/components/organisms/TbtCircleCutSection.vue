<template>
  <tbt-section>
    <tbt-h2>サークルカット</tbt-h2>
    <tbt-circle-cut-img :class="$style.circleCut" />
  </tbt-section>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import TbtH2 from '@/components/atoms/TbtH2.vue';
import TbtCircleCutImg from '@/components/atoms/TbtCircleCutImg.vue';
import TbtSection from '@/components/atoms/TbtSection.vue';

@Component({
  components: {
    TbtH2,
    TbtCircleCutImg,
    TbtSection,
  },
})
export default class TbtCircleCutSection extends Vue {}
</script>

<style module>
.circleCut {
  width: 200px;
  max-width: 100%;
}
</style>
