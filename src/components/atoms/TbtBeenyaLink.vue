<template>
  <router-link to="/beenya">
    <slot />
  </router-link>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class TbtBeenyaLink extends Vue {}
</script>
