<template>
  <tbt-section>
    <tbt-h2>メニュー</tbt-h2>
    <p>
      <tbt-disco-link>
        ＞＞＞＞DISCOGRAPHY＜＜＜＜
      </tbt-disco-link>
    </p>
    <p>
      <tbt-bbs-link>
        ★★★★★一言掲示板★★★★★
      </tbt-bbs-link>
    </p>
    <p>
      <tbt-member-link>
        🍺🍺🍺🍺️メンバー紹介🍺🍺🍺🍺
      </tbt-member-link>
    </p>
  </tbt-section>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import TbtH2 from '@/components/atoms/TbtH2.vue';
import TbtSection from '@/components/atoms/TbtSection.vue';
import TbtBbsLink from '@/components/atoms/TbtBbsLink.vue';
import TbtDiscoLink from '@/components/atoms/TbtDiscoLink.vue';
import TbtMemberLink from '@/components/atoms/TbtMemberLink.vue';

@Component({
  components: {
    TbtH2,
    TbtSection,
    TbtBbsLink,
    TbtDiscoLink,
    TbtMemberLink,
  },
})
export default class TbtMenuSection extends Vue {}
</script>
