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
        <a
          href="https://x.com/tbt_cf"
          target="_blank"
          rel="noopener noreferrer"
        >
          公式X（旧Twitter）アカウント
          <span class="visually-hidden">（新しいタブで開きます）</span>
        </a>
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

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
}
</style>
