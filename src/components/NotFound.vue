<template>
  <div class="not-found">
    <h1>404 NOT FOUND</h1>
    <p>このページは存在しません。</p>
    <img src="../assets/nomikai_salaryman.png" alt="飲み会のイラストです。ビール飲みましょう">

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class NotFound extends Vue {}
</script>

<style scoped>
</style>
