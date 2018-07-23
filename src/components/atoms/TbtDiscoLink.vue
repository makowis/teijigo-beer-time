<template>
  <router-link to="/disco">
    <slot />
  </router-link>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class TbtDiscoLink extends Vue {}
</script>
