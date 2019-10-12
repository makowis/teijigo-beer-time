<template>
  <tbt-section>
    <tbt-h2>連絡先</tbt-h2>
    <p>
      お問い合わせは<a href="mailto:staff@teijigo-beer-ti.me"
        >staff🍺teijigo-beer-ti.me</a
      >（🍺を@マークに変える）にお願いします。
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
export default class TbtMailSection extends Vue {}
</script>
