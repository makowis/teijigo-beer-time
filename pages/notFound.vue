<template>
  <div class="not-found">
    <tbt-h-1>404 NOT FOUND</tbt-h-1>
    <p>このページは存在しません。</p>
    <img
      src="@/assets/nomikai_salaryman.png"
      alt="飲み会のイラストです。ビール飲みましょう"
    />
  </div>
</template>

<script lang="ts">
import TbtH1 from '@/components/atoms/TbtH1.vue'

export default {
  components: {
    TbtH1,
  },
}
</script>
