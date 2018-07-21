<template>
  <default-template>
    <div class="disco">
      <tbt-h1>DISCOGRAPHY</tbt-h1>
      <p>★★★★★★★工事中★★★★★★★</p>
      <img src="@/assets/job_kouji_ojigi.png" alt="工事作業員のイラスト「おじぎ・お詫び」">
    </div>
  </default-template>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import DefaultTemplate from '@/components/templates/Default';
import TbtH1 from '@/components/atoms/TbtH1';

@Component({
  components: {
    DefaultTemplate,
    TbtH1,
  },
})
export default class Disco extends Vue {}
</script>

<style scoped>
</style>
