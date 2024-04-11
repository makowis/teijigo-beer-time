<script setup lang="ts">
import TbtH2 from '@/components/atoms/TbtH2.vue'
import TbtCircleCutImg from '@/components/atoms/TbtCircleCutImg.vue'
import TbtSection from '@/components/atoms/TbtSection.vue'
</script>

<template>
  <tbt-section>
    <tbt-h-2>サークルカット</tbt-h-2>
    <tbt-circle-cut-img class="circle-cut" />
  </tbt-section>
</template>

<style scoped>
.circle-cut {
  width: 200px;
  max-width: 100%;
}
</style>
