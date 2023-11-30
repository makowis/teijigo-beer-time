<script setup lang="ts">
import TbtH2 from '@/components/atoms/TbtH2.vue'
import TbtH3 from '@/components/atoms/TbtH3.vue'
import TbtSection from '@/components/atoms/TbtSection.vue'
</script>

<template>
  <tbt-section>
    <tbt-h-2>M3-2023秋スペース配置</tbt-h-2>
    <table border="1" :class="$style.spaceTable">
      <tr>
        <th>サークル名</th>
        <td>定時後ビールタイム</td>
      </tr>
      <tr>
        <th>配置場所</th>
        <td>リアルイベントスペース</td>
      </tr>
      <tr>
        <th>スペース番号</th>
        <td>い-16a</td>
      </tr>
    </table>

    <tbt-section>
      <tbt-h-3>M3-2023秋</tbt-h-3>
      <p>日時：2023年10月29日(日)</p>
      <a href="http://www.m3net.jp/">M3公式サイト</a>
    </tbt-section>
    <tbt-section>
      <tbt-h-3>頒布CDクロスフェード</tbt-h-3>
      <p>Coming Soon...</p>
    </tbt-section>
  </tbt-section>
</template>

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
