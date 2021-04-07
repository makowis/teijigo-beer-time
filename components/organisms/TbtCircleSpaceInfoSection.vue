<template>
  <tbt-section>
    <tbt-h-2>M3-2019秋スペース配置</tbt-h-2>
    <table border="1" :class="$style.spaceTable">
      <tr>
        <th>サークル名</th>
        <td>クレオフーガ 定時後ビールタイム</td>
      </tr>
      <tr>
        <th>配置場所</th>
        <td>第一展示場</td>
      </tr>
      <tr>
        <th>スペース番号</th>
        <td>K-18a</td>
      </tr>
    </table>

    <tbt-section>
      <tbt-h-3>M3-2019秋</tbt-h-3>
      <p>日時：2019年 10月27日(日) 11:00～15:30</p>
      <p>場所：東京流通センター(TRC)第一展示場、第二展示場</p>
      <a href="http://www.m3net.jp/">M3公式サイト</a>
    </tbt-section>
    <tbt-section>
      <tbt-h-3>頒布CDクロスフェード</tbt-h-3>
      <tbt-recycle-cross-fade :class="$style.crossFade" />
    </tbt-section>
  </tbt-section>
</template>

<script lang="ts">
import TbtH2 from '@/components/atoms/TbtH2.vue'
import TbtH3 from '@/components/atoms/TbtH3.vue'
import TbtSection from '@/components/atoms/TbtSection.vue'
import TbtRecycleCrossFade from '@/components/atoms/TbtRecycleCrossFade.vue'

export default {
  components: {
    TbtH2,
    TbtH3,
    TbtSection,
    TbtRecycleCrossFade,
  },
}
</script>

<style module>
.spaceTable {
  max-width: 90%;
  margin: auto;
}

.spaceTable td,
.spaceTable th {
  padding: 5px 10px;
}

.crossFade {
  width: 90%;
  margin: auto;
}
</style>
