<template>
  <footer :class="$style.footer">
    <p>©定時後ビールタイム</p>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class TbtFooter extends Vue {}
</script>

<style module>
.footer {
  padding: 30px;
}
</style>
