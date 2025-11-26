<script setup lang="ts">
import TbtH2 from '@/components/atoms/TbtH2.vue'
import TbtSection from '@/components/atoms/TbtSection.vue'
import TbtNewBlink from '@/components/atoms/TbtNewBlink.vue'
</script>

<template>
  <tbt-section>
    <tbt-h-2>News</tbt-h-2>
    <ul class="news-list">
      <li>
        <tbt-new-blink>NEW</tbt-new-blink>
        M3-2024秋に参加予定です！
      </li>
      <li>
        <a href="https://twitter.com/tbt_cf">公式Twitterアカウント</a>
        作りました！最新情報をつぶやいていきます！
      </li>
    </ul>
    <p></p>
  </tbt-section>
</template>

<style scoped>
.news-list {
  list-style: none;
}

.news-list li {
  margin-bottom: 10px;
}
</style>
