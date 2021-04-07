<template>
  <tbt-section>
    <tbt-h-2>メニュー</tbt-h-2>
    <p>
      <tbt-disco-link> ＞＞＞＞DISCOGRAPHY＜＜＜＜ </tbt-disco-link>
    </p>
    <p>
      <tbt-member-link> 🍺🍺🍺🍺️メンバー紹介🍺🍺🍺🍺 </tbt-member-link>
    </p>
  </tbt-section>
</template>

<script lang="ts">
import TbtH2 from '@/components/atoms/TbtH2.vue'
import TbtSection from '@/components/atoms/TbtSection.vue'
import TbtDiscoLink from '@/components/atoms/TbtDiscoLink.vue'
import TbtMemberLink from '@/components/atoms/TbtMemberLink.vue'

export default {
  components: {
    TbtH2,
    TbtSection,
    TbtDiscoLink,
    TbtMemberLink,
  },
}
</script>
