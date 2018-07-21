<template>
  <default-template>
    <div class="not-found">
      <tbt-h1>404 NOT FOUND</tbt-h1>
      <p>このページは存在しません。</p>
      <img src="@/assets/nomikai_salaryman.png" alt="飲み会のイラストです。ビール飲みましょう">
    </div>
  </default-template>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import DefaultTemplate from '@/components/templates/Default.vue';
import TbtH1 from '@/components/atoms/TbtH1.vue';

@Component({
  components: {
    DefaultTemplate,
    TbtH1,
  },
})
export default class NotFound extends Vue {}
</script>

<style scoped>
</style>
