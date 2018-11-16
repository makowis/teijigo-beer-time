<template>
  <tbt-section>
    <tbt-h2>音けっとスペース配置</tbt-h2>
    <table border="1" :class="$style.spaceTable">
      <tr>
        <th>サークル名</th>
        <td>クレオフーガ</td>
      </tr>
      <tr>
        <th>スペース番号</th>
        <td>F3-c</td>
      </tr>
    </table>
    <tbt-section>
      <tbt-h3>音けっと開催情報</tbt-h3>
      <p>日時：2018/12/2(日) 12:00〜16:00</p>
      <p>場所：難波御堂筋ホール7階</p>
      <a href="https://otoketto.jimdo.com/">音けっと公式サイト</a>
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
