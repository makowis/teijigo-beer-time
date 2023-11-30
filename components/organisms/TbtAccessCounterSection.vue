<script setup lang="ts">
import TbtH2 from '@/components/atoms/TbtH2.vue'
import TbtSection from '@/components/atoms/TbtSection.vue'

defineProps<{
  access: string
}>()
</script>

<template>
  <tbt-section>
    <tbt-h-2>アクセスカウンター</tbt-h-2>
    <p>あなたは{{ access }}人目の訪問者です。</p>
  </tbt-section>
</template>
