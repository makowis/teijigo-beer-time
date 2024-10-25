<script setup lang="ts">
import TbtH1 from '@/components/atoms/TbtH1.vue'
import TbtMarquee from '@/components/atoms/TbtMarquee.vue'
import TbtBlink from '@/components/atoms/TbtBlink.vue'
import TbtAccessCounterSection from '@/components/organisms/TbtAccessCounterSection.vue'
import TbtCircleCutSection from '@/components/organisms/TbtCircleCutSection.vue'
import TbtCircleSpaceInfoSection from '@/components/organisms/TbtCircleSpaceInfoSection.vue'
import TbtMenuSection from '@/components/organisms/TbtMenuSection.vue'
import TbtMailSection from '@/components/organisms/TbtMailSection.vue'
import TbtNewsSection from '@/components/organisms/TbtNewsSection.vue'

const accessCount = `0000000000000000${Math.floor(
  Math.random() * 9999999999999,
)}`.slice(-16)
</script>

<template>
  <div class="Top">
    <tbt-h-1><tbt-blink>定時後ビールタイム公式サイト</tbt-blink></tbt-h-1>
    <p>
      <tbt-blink>🎉🎉🎉🎉🎉🎉🎉M3-2024秋参戦決定！🎉🎉🎉🎉🎉🎉</tbt-blink>
    </p>
    <tbt-marquee>
      ＼奇跡の2年連続参戦！／ M3-2024秋に参戦！
    </tbt-marquee>
    <tbt-access-counter-section :access-count="accessCount" />
    <tbt-news-section />
    <tbt-circle-cut-section />
    <tbt-circle-space-infoSection />
    <tbt-mail-section />
    <tbt-menu-section />
  </div>
</template>
