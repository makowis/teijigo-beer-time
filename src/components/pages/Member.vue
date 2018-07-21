<template>
  <default-template>
    <div class="member">
      <tbt-h1>MEMBER</tbt-h1>
      <table class="member-table">
        <thead>
          <tr>
            <th>名前</th>
            <th>担当</th>
            <th>自己紹介</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="member in members" v-bind:key="member.name">
            <td>{{member.name}}</td>
            <td v-html="member.charge"></td>
            <td v-html="member.profile"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </default-template>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import members from '@/resources/members';
import DefaultTemplate from '@/components/templates/Default';
import TbtH1 from '@/components/atoms/TbtH1';

@Component({
  components: {
    DefaultTemplate,
    TbtH1,
  },
})
export default class Member extends Vue {
  members = members;
}
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
