<template>
  <router-link to="/bbs">
    <slot />
  </router-link>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class TbtBbsLink extends Vue {}
</script>
