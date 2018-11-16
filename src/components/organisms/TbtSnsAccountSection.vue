<template>
  <tbt-section>
    <tbt-h2>ソーシャルアカウント</tbt-h2>
    <p>
      最新情報を<a href="https://twitter.com/tbt_cf">公式Twitterアカウント</a>で配信中！
    </p>
  </tbt-section>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import TbtH2 from '@/components/atoms/TbtH2.vue';
import TbtSection from '@/components/atoms/TbtSection.vue';

@Component({
  components: {
    TbtH2,
    TbtSection,
  },
})
export default class TbtSnsAccountSection extends Vue {}
</script>
