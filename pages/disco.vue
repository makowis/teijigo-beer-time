<script setup lang="ts">
import TbtH1 from '@/components/atoms/TbtH1.vue'
import TbtH2 from '@/components/atoms/TbtH2.vue'
import TbtSection from '@/components/atoms/TbtSection.vue'
import TbtBlink from '@/components/atoms/TbtBlink.vue'
import TbtNewBlink from '@/components/atoms/TbtNewBlink.vue'
import TbtYoutubeEmbedded from '@/components/atoms/TbtYoutubeEmbedded.vue'
import TbtDiscoTable from '@/components/atoms/TbtDiscoTable.vue'
import TbtHopeJacketImg from '@/components/atoms/TbtHopeJacketImg.vue'
import TbtStartJacketImg from '@/components/atoms/TbtStartJacketImg.vue'
import TbtRecycleJacketImg from '@/components/atoms/TbtRecycleJacketImg.vue'
import TbtBattleJacketImg from '@/components/atoms/TbtBattleJacketImg.vue'
import TbtRisingJacketImg from '@/components/atoms/TbtRisingJacketImg.vue'
import TbtLiberateJacketImg from '@/components/atoms/TbtLiberateJacketImg.vue'
import {
  recycle,
  battle,
  ma_start,
  hope,
  rising,
  libreate,
} from '@/resources/discos'

const discos = [
  {
    title: libreate.title,
    release: rising.release,
    jacketComponent: TbtLiberateJacketImg,
    displayCredit: libreate.displayCredit,
    tracks: libreate.tracks,
    youtubeEmbedUrl: libreate.youtubeEmbedUrl,
    isNew: true,
  },
  {
    title: rising.title,
    release: rising.release,
    jacketComponent: TbtRisingJacketImg,
    displayCredit: rising.displayCredit,
    tracks: rising.tracks,
    youtubeEmbedUrl: rising.youtubeEmbedUrl,
    isNew: false,
  },
  {
    title: battle.title,
    release: battle.release,
    jacketComponent: TbtBattleJacketImg,
    displayCredit: battle.displayCredit,
    tracks: battle.tracks,
    youtubeEmbedUrl: battle.youtubeEmbedUrl,
    isNew: false,
  },
  {
    title: recycle.title,
    release: recycle.release,
    jacketComponent: TbtRecycleJacketImg,
    displayCredit: recycle.displayCredit,
    tracks: recycle.tracks,
    youtubeEmbedUrl: recycle.youtubeEmbedUrl,
    isNew: false,
  },
  {
    title: ma_start.title,
    release: ma_start.release,
    jacketComponent: TbtStartJacketImg,
    displayCredit: ma_start.displayCredit,
    tracks: ma_start.tracks,
    youtubeEmbedUrl: ma_start.youtubeEmbedUrl,
    isNew: false,
  },
  {
    title: hope.title,
    release: hope.release,
    jacketComponent: TbtHopeJacketImg,
    displayCredit: hope.displayCredit,
    tracks: hope.tracks,
    youtubeEmbedUrl: hope.youtubeEmbedUrl,
    isNew: false,
  },
]
</script>

<template>
  <div class="disco">
    <tbt-h-1>DISCOGRAPHY</tbt-h-1>
    <template v-for="(disco, index) in discos" :key="index">
      <tbt-section>
        <tbt-h-2 class="album-title">
          {{ disco.title }}
          <tbt-new-blink v-if="disco.isNew" />
        </tbt-h-2>
        <p class="on-sale">
          <tbt-blink>{{ disco.release }} ON SALE!</tbt-blink>
        </p>
        <component :is="disco.jacketComponent" class="jacket" />
        <tbt-disco-table
          :display-credit="disco.displayCredit"
          :tracks="disco.tracks"
        />
        <tbt-youtube-embedded
          class="cross-fade"
          :youtube-embed-url="disco.youtubeEmbedUrl"
        />
      </tbt-section>
      <hr v-if="index < discos.length - 1" />
    </template>
  </div>
</template>

<style scoped>
.jacket {
  width: 400px;
  max-width: 70%;
  margin-bottom: 20px;
}

.album-title {
  margin-bottom: 5px;
}

.on-sale {
  color: red;
  font-weight: bold;
  margin: 0 0 15px;
}

.cross-fade {
  max-width: 80%;
  margin: 30px auto;
}
</style>
