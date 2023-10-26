<template>
  <table border="1" :class="$style.table">
    <thead>
      <tr>
        <th>No</th>
        <th>曲名</th>
        <th>アーティスト</th>
        <th v-if="displayCredit">クレジット</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="track in tracks" :key="track.no">
        <td :class="$style.trackNo">{{ track.no }}</td>
        <td>{{ track.name }}</td>
        <td>{{ track.artist }}</td>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <td v-if="displayCredit" v-html="track.credit"></td>
      </tr>
    </tbody>
  </table>
</template>

<style module>
.table {
  margin: auto;
  text-align: left;
}

.table th,
.table td {
  padding: 5px 10px;
}

.trackNo {
  text-align: right;
}
</style>

<script setup lang="ts">
import type { TrackInfo } from '@/resources/discos'

defineProps<{
  displayCredit: boolean
  tracks: TrackInfo[]
}>()
</script>
