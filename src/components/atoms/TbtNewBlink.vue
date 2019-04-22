<template>
  <tbt-blink :class="$style.newsBlink">NEW</tbt-blink>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import TbtBlink from '@/components/atoms/TbtBlink.vue';

@Component({
  components: {
    TbtBlink,
  },
})
export default class TbtNewBlink extends Vue {}
</script>

<style module>
.newsBlink {
  color: red;
}
</style>
