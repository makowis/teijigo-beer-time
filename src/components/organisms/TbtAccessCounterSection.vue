<template>
  <section>
    <tbt-h2>アクセスカウンター</tbt-h2>
    <p>あなたは{{ access }}人目の訪問者です。</p>
    <p>現在の累計訪問者数は{{ realtime }}人です。</p>
    <small>
      <router-link to="/bbs">キリ番報告はこちらで！！！</router-link>
    </small>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import TbtH2 from '@/components/atoms/TbtH2';

@Component({
  props: ['access', 'realtime'],
  components: {
    TbtH2,
  },
})
export default class TbtAccessCounterSection extends Vue {}
</script>
