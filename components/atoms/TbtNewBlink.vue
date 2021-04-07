<template>
  <tbt-blink :class="$style.newsBlink">NEW</tbt-blink>
</template>

<script lang="ts">
import TbtBlink from '@/components/atoms/TbtBlink.vue'

export default {
  components: {
    TbtBlink,
  },
}
</script>

<style module>
.newsBlink {
  color: red;
}
</style>
