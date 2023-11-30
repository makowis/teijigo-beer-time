<script setup lang="ts">
import TbtBlink from '@/components/atoms/TbtBlink.vue'
</script>

<template>
  <tbt-blink :class="$style.newsBlink">NEW</tbt-blink>
</template>

<style module>
.newsBlink {
  color: red;
}
</style>
