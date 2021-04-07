<template>
  <tbt-section>
    <tbt-h-2>連絡先</tbt-h-2>
    <p>
      お問い合わせは<a href="mailto:staff@teijigo-beer-ti.me"
        >staff🍺teijigo-beer-ti.me</a
      >（🍺を@マークに変える）にお願いします。
    </p>
  </tbt-section>
</template>

<script lang="ts">
import TbtH2 from '@/components/atoms/TbtH2.vue'
import TbtSection from '@/components/atoms/TbtSection.vue'

export default {
  components: {
    TbtH2,
    TbtSection,
  },
}
</script>
