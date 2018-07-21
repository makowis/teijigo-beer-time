<template>
  <tbt-section>
    <tbt-h2>アクセスカウンター</tbt-h2>
    <p>あなたは{{ access }}人目の訪問者です。</p>
    <p>現在の累計訪問者数は{{ realtime }}人です。</p>
    <small>
      <router-link to="/bbs">キリ番報告はこちらで！！！</router-link>
    </small>
  </tbt-section>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import TbtH2 from '@/components/atoms/TbtH2.vue';
import TbtSection from '@/components/atoms/TbtSection.vue';

@Component({
  props: ['access', 'realtime'],
  components: {
    TbtH2,
    TbtSection,
  },
})
export default class TbtAccessCounterSection extends Vue {}
</script>
