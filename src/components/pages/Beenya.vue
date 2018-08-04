<template>
  <tbt-default>
    <div class="beenya">
      <tbt-h1>びーにゃの部屋</tbt-h1>
      <img src="@/assets/beenya.png" alt="びーにゃのイラスト" :class="$style.icon">
      <table :class="$style.beenyaTable">
        <tbody>
          <tr>
            <th>名前</th>
            <td>びーにゃ</td>
          </tr>
          <tr>
            <th>役割</th>
            <td>アイドル</td>
          </tr>
          <tr>
            <th>自己紹介</th>
            <td>にゃにゃにゃにゃにゃにゃにゃー！(定時後ビールタイムだー！！)</td>
          </tr>
        </tbody>
      </table>
    </div>
  </tbt-default>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import TbtDefault from '@/components/templates/TbtDefault.vue';
import TbtH1 from '@/components/atoms/TbtH1.vue';

@Component({
  components: {
    TbtDefault,
    TbtH1,
  },
})
export default class Beenya extends Vue {}
</script>

<style module>
.icon {
  max-width: 90%;
  margin-bottom: 20px;
}

.beenyaTable {
  max-width: 90%;
  margin: auto;
  border: solid 1px black;
  border-collapse: separate;
}

.beenyaTable td,
.beenyaTable th {
  border: solid 1px black;
  padding: 5px 10px;
}
</style>
