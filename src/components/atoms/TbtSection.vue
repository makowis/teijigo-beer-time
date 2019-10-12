<template>
  <section :class="$style.section">
    <slot />
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class TbtSection extends Vue {}
</script>

<style module>
.section {
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
