<script setup lang="ts">
import members from '@/resources/members'
import TbtH1 from '@/components/atoms/TbtH1.vue'
</script>

<template>
  <div class="member">
    <tbt-h-1>MEMBER</tbt-h-1>
    <table class="member-table">
      <thead>
        <tr>
          <th>名前</th>
          <th>担当</th>
          <th>自己紹介</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="member in members" :key="member.name">
          <td>{{ member.name }}</td>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <td v-html="member.charge"></td>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <td v-html="member.profile"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

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
