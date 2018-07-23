<template>
  <tbt-default>
    <div class="disco">
      <tbt-h1>DISCOGRAPHY</tbt-h1>
      <p>★★★★★★★工事中★★★★★★★</p>
      <img src="@/assets/job_kouji_ojigi.png" alt="工事作業員のイラスト「おじぎ・お詫び」">
    </div>
  </tbt-default>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import TbtDefault from '@/components/templates/TbtDefault.vue';
import TbtH1 from '@/components/atoms/TbtH1.vue';

@Component({
  components: {
    TbtDefault,
    TbtH1,
  },
})
export default class Disco extends Vue {}
</script>

<style scoped>
</style>
