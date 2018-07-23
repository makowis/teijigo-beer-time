<template>
  <router-link to="/">
    <slot />
  </router-link>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class TbtTopLink extends Vue {}
</script>
