<template>
  <tbt-default>
    <div class="not-found">
      <tbt-h1>404 NOT FOUND</tbt-h1>
      <p>このページは存在しません。</p>
      <img
        src="@/assets/nomikai_salaryman.png"
        alt="飲み会のイラストです。ビール飲みましょう"
      />
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
export default class NotFound extends Vue {}
</script>

<style scoped></style>
