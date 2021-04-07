<template>
  <div class="Top">
    <tbt-h-1><tbt-blink>定時後ビールタイム公式サイト</tbt-blink></tbt-h-1>
    <p>
      <tbt-blink>🎉🎉🎉🎉🎉🎉🎉M3-2020春参戦決定！🎉🎉🎉🎉🎉🎉</tbt-blink>
    </p>
    <tbt-marquee>
      M3-2020春に参戦！パワーアップしたサウンドをお届けします！
    </tbt-marquee>
    <tbt-access-counter-section v-bind="counter" />
    <tbt-news-section />
    <tbt-circle-cut-section />
    <tbt-circle-space-infoSection />
    <tbt-mail-section />
    <tbt-menu-section />
  </div>
</template>

<script lang="ts">
import TbtH1 from '@/components/atoms/TbtH1.vue'
import TbtMarquee from '@/components/atoms/TbtMarquee.vue'
import TbtBlink from '@/components/atoms/TbtBlink.vue'
import TbtAccessCounterSection from '@/components/organisms/TbtAccessCounterSection.vue'
import TbtCircleCutSection from '@/components/organisms/TbtCircleCutSection.vue'
import TbtCircleSpaceInfoSection from '@/components/organisms/TbtCircleSpaceInfoSection.vue'
import TbtMenuSection from '@/components/organisms/TbtMenuSection.vue'
import TbtMailSection from '@/components/organisms/TbtMailSection.vue'
import TbtNewsSection from '@/components/organisms/TbtNewsSection.vue'

export default {
  components: {
    TbtH1,
    TbtMarquee,
    TbtBlink,
    TbtAccessCounterSection,
    TbtCircleCutSection,
    TbtCircleSpaceInfoSection,
    TbtMenuSection,
    TbtMailSection,
    TbtNewsSection,
  },
  data() {
    return {
      counter: { access: 0, realtime: 0 },
    }
  },
}
</script>
