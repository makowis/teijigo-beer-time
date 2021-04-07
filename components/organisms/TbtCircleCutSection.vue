<template>
  <tbt-section>
    <tbt-h-2>サークルカット</tbt-h-2>
    <tbt-circle-cut-img :class="$style.circleCut" />
  </tbt-section>
</template>

<script lang="ts">
import TbtH2 from '@/components/atoms/TbtH2.vue'
import TbtCircleCutImg from '@/components/atoms/TbtCircleCutImg.vue'
import TbtSection from '@/components/atoms/TbtSection.vue'

export default {
  components: {
    TbtH2,
    TbtCircleCutImg,
    TbtSection,
  },
}
</script>

<style module>
.circleCut {
  width: 200px;
  max-width: 100%;
}
</style>
