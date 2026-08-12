<script setup lang="ts">
import TbtH1 from '@/components/atoms/TbtH1.vue'
import TbtBeenyaImg from '@/components/atoms/TbtBeenyaImg.vue'
</script>

<template>
  <div class="beenya">
    <tbt-h-1>びーにゃの部屋</tbt-h-1>
    <tbt-beenya-img class="icon" />
    <table class="beenya-table">
      <tbody>
        <tr>
          <th scope="row">名前</th>
          <td>びーにゃ</td>
        </tr>
        <tr>
          <th scope="row">役割</th>
          <td>アイドル</td>
        </tr>
        <tr>
          <th scope="row">自己紹介</th>
          <td>にゃにゃにゃにゃにゃにゃにゃー！(定時後ビールタイムだー！！)</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.icon {
  max-width: 90%;
  margin-bottom: 20px;
}

.beenya-table {
  max-width: 90%;
  margin: auto;
  border: solid 1px black;
  border-collapse: separate;
}

.beenya-table td,
.beenya-table th {
  border: solid 1px black;
  padding: 5px 10px;
}
</style>
