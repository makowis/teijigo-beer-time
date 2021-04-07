<template>
  <tbt-section>
    <tbt-h-2>News</tbt-h-2>
    <ul :class="$style.newsList">
      <li>
        <tbt-new-blink :class="$style.newsBlink">NEW</tbt-new-blink>
        通販開始しました！
        <a href="https://teijigo.booth.pm/items/1093403" target="_blank">
          BOOTH Festival APOLLO 第9回
        </a>
        に参加中です！
      </li>
      <li>
        <tbt-new-blink :class="$style.newsBlink">NEW</tbt-new-blink>
        <a href="https://twitter.com/tbt_cf">公式Twitterアカウント</a
        >作りました！最新情報をつぶやいていきます！
      </li>
    </ul>
    <p></p>
  </tbt-section>
</template>

<script lang="ts">
import TbtH2 from '@/components/atoms/TbtH2.vue'
import TbtSection from '@/components/atoms/TbtSection.vue'
import TbtNewBlink from '@/components/atoms/TbtNewBlink.vue'

export default {
  components: {
    TbtH2,
    TbtSection,
    TbtNewBlink,
  },
}
</script>

<style module>
.newsList {
  list-style: none;
}

.newsList li {
  margin-bottom: 10px;
}
</style>
