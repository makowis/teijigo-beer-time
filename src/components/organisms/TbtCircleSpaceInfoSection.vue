<template>
  <tbt-section>
    <tbt-h2>M3スペース配置</tbt-h2>
    <table border="1" :class="$style.spaceTable">
      <tr>
        <th>サークル名</th>
        <td>クレオフーガ定時後ビールタイム</td>
      </tr>
      <tr>
        <th>配置場所</th>
        <td>第一展示場</td>
      </tr>
      <tr>
        <th>スペース番号</th>
        <td>N-16b</td>
      </tr>
    </table>
    <tbt-section>
      <tbt-h3>M3開催情報</tbt-h3>
      <p>日時：2018/10/28(日) 11:00〜15:30</p>
      <p>場所：東京流通センター(TRC)</p>
      <a href="http://www.m3net.jp/index.html">M3公式サイト</a>
    </tbt-section>
    <tbt-section>
      <tbt-h3>頒布CDクロスフェード</tbt-h3>
      <tbt-hope-cross-fade :class="$style.crossFade" />
    </tbt-section>
  </tbt-section>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import TbtH2 from '@/components/atoms/TbtH2.vue';
import TbtH3 from '@/components/atoms/TbtH3.vue';
import TbtSection from '@/components/atoms/TbtSection.vue';
import TbtHopeCrossFade from '@/components/atoms/TbtHopeCrossFade.vue';

@Component({
  components: {
    TbtH2,
    TbtH3,
    TbtSection,
    TbtHopeCrossFade,
  },
})
export default class TbtCircleSpaceInfoSection extends Vue {}
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
