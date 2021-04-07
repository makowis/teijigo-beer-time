<template>
  <div class="beenya">
    <tbt-h-1>びーにゃの部屋</tbt-h-1>
    <tbt-beenya-img :class="$style.icon" />
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
</template>

<script lang="ts">
import TbtH1 from '@/components/atoms/TbtH1.vue'
import TbtBeenyaImg from '@/components/atoms/TbtBeenyaImg.vue'

export default {
  components: {
    TbtH1,
    TbtBeenyaImg,
  },
}
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
