<template>
  <section>
    <tbt-h2>サークルカット</tbt-h2>
    <img :class="$style.circleCut" src="@/assets/cut.png" alt="サークルカット">
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import TbtH2 from '@/components/atoms/TbtH2';

@Component({
  components: {
    TbtH2,
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
