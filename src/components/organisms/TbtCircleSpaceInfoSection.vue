<template>
  <tbt-section>
    <tbt-h2>スペース配置</tbt-h2>
    <table :class="$style.spaceTable">
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
  </tbt-section>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import TbtH2 from '@/components/atoms/TbtH2.vue';
import TbtSection from '@/components/atoms/TbtSection.vue';

@Component({
  components: {
    TbtH2,
    TbtSection,
  },
})
export default class TbtCircleSpaceInfoSection extends Vue {}
</script>

<style module>
.spaceTable {
  max-width: 90%;
  margin: auto;
  border: solid 1px black;
  border-collapse: separate;
}

.spaceTable td,
.spaceTable th {
  border: solid 1px black;
  padding: 5px 10px;
}
</style>
