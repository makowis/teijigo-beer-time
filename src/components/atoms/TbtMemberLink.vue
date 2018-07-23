<template>
  <router-link to="/member">
    <slot />
  </router-link>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class TbtMemberLink extends Vue {}
</script>
