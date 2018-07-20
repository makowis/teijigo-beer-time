<template>
  <section>
    <tbt-h2>サークルカット</tbt-h2>
    <tbt-circle-cut-img :class="$style.circleCut" />
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import TbtH2 from '@/components/atoms/TbtH2';
import TbtCircleCutImg from '@/components/atoms/TbtCircleCutImg';

@Component({
  components: {
    TbtH2,
    TbtCircleCutImg,
  },
})
export default class TbtAccessCounterSection extends Vue {}
</script>

<style module>
.circleCut {
  width: 200px;
  max-width: 100%;
}
</style>
