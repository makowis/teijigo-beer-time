<template>
  <div class="member">
    <h1>MEMBER</h1>
    <table class="member-table">
      <thead>
        <tr>
          <th>名前</th>
          <th>担当</th>
          <th>自己紹介</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>さかもとP</td>
          <td>プロデューサー</td>
          <td>準備中</td>
        </tr>
        <tr>
          <td>管理人MAKO</td>
          <td>サイトの管理とお茶汲み</td>
          <td>
            サイトの管理人です。
            <br>
            音楽作れないのでホムペ担当になりました。
            <br>
            昔懐かしい雰囲気のサイトを作って行きたいと思います！
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Member extends Vue {}
</script>

<style scoped>
.member-table {
  max-width: 90%;
  margin: auto;
  border: solid 1px black;
  border-collapse: separate;
}

.member-table td,
.member-table th {
  border: solid 1px black;
  padding: 5px 10px;
}
</style>
