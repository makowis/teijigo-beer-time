<template>
  <tbt-section>
    <tbt-h2>News</tbt-h2>
    <ul :class="$style.newsList">
      <li>
        <tbt-blink :class="$style.newsBlink">NEW</tbt-blink>
        通販開始しました！
        <a href="https://teijigo.booth.pm/items/1093403" target="_blank">
          BOOTH Festival APOLLO 第9回
        </a>
        に参加中です！
      </li>
      <li>
        <tbt-blink :class="$style.newsBlink">NEW</tbt-blink>
        <a href="https://twitter.com/tbt_cf">公式Twitterアカウント</a>作りました！最新情報をつぶやいていきます！
      </li>
    </ul>
    <p>

    </p>
  </tbt-section>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import TbtH2 from '@/components/atoms/TbtH2.vue';
import TbtSection from '@/components/atoms/TbtSection.vue';
import TbtBlink from '@/components/atoms/TbtBlink.vue';

@Component({
  components: {
    TbtH2,
    TbtSection,
    TbtBlink,
  },
})
export default class TbtNewsSection extends Vue {}
</script>


<style module>
.newsList {
  list-style: none;
}

.newsList li {
  margin-bottom: 10px;
}

.newsBlink {
  color: red;
}
</style>
