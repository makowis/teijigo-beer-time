<script setup lang="ts">
import TbtH1 from '@/components/atoms/TbtH1.vue'
import TbtH2 from '@/components/atoms/TbtH2.vue'
import TbtSection from '@/components/atoms/TbtSection.vue'
import TbtBlink from '@/components/atoms/TbtBlink.vue'
import TbtNewBlink from '@/components/atoms/TbtNewBlink.vue'
import TbtHopeJacketImg from '@/components/atoms/TbtHopeJacketImg.vue'
import TbtStartJacketImg from '@/components/atoms/TbtStartJacketImg.vue'
import TbtRecycleJacketImg from '@/components/atoms/TbtRecycleJacketImg.vue'
import TbtBattleJacketImg from '@/components/atoms/TbtBattleJacketImg.vue'
import TbtRisingJacketImg from '@/components/atoms/TbtRisingJacketImg.vue'
import TbtLiberateJacketImg from '@/components/atoms/TbtLiberateJacketImg.vue'
import TbtYoutubeEmbedded from '@/components/atoms/TbtYoutubeEmbedded.vue'
import TbtDiscoTable from '@/components/atoms/TbtDiscoTable.vue'
import { recycle, battle, ma_start, hope, rising, libreate } from '@/resources/discos'
</script>

<template>
  <div class="disco">
    <tbt-h-1>DISCOGRAPHY</tbt-h-1>
    <tbt-section>
      <tbt-h-2 class="album-title">
        {{ libreate.title }}
        <tbt-new-blink />
      </tbt-h-2>
      <p class="on-sale">
        <tbt-blink>{{ rising.release }} ON SALE!</tbt-blink>
      </p>
      <tbt-liberate-jacket-img class="jacket" />
      <tbt-disco-table
        :display-credit="libreate.displayCredit"
        :tracks="libreate.tracks"
      >
      </tbt-disco-table>
      <tbt-youtube-embedded
        class="cross-fade"
        :youtube-embed-url="libreate.youtubeEmbedUrl"
      />
    </tbt-section>
    <hr />
    <tbt-section>
      <tbt-h-2 class="album-title">
        {{ rising.title }}
      </tbt-h-2>
      <p class="on-sale">
        <tbt-blink>{{ rising.release }} ON SALE!</tbt-blink>
      </p>
      <tbt-rising-jacket-img class="jacket" />
      <tbt-disco-table
        :display-credit="rising.displayCredit"
        :tracks="rising.tracks"
      >
      </tbt-disco-table>
      <tbt-youtube-embedded
        class="cross-fade"
        :youtube-embed-url="rising.youtubeEmbedUrl"
      />
    </tbt-section>
    <hr />
    <tbt-section>
      <tbt-h-2 class="album-title">{{ battle.title }}</tbt-h-2>
      <p class="on-sale">
        <tbt-blink>{{ battle.release }} ON SALE！</tbt-blink>
      </p>
      <tbt-battle-jacket-img class="jacket" />
      <tbt-disco-table
        :display-credit="battle.displayCredit"
        :tracks="battle.tracks"
      >
      </tbt-disco-table>
      <tbt-youtube-embedded
        class="cross-fade"
        :youtube-embed-url="battle.youtubeEmbedUrl"
      />
    </tbt-section>
    <hr />
    <tbt-section>
      <tbt-h-2 class="album-title">{{ recycle.title }}</tbt-h-2>
      <p class="on-sale">
        <tbt-blink>{{ recycle.release }} ON SALE！</tbt-blink>
      </p>
      <tbt-recycle-jacket-img class="jacket" />
      <tbt-disco-table
        :display-credit="recycle.displayCredit"
        :tracks="recycle.tracks"
      >
      </tbt-disco-table>
      <tbt-youtube-embedded
        class="cross-fade"
        :youtube-embed-url="recycle.youtubeEmbedUrl"
      />
    </tbt-section>
    <hr />
    <tbt-section>
      <tbt-h-2 class="album-title">{{ ma_start.title }}</tbt-h-2>
      <p class="on-sale">
        <tbt-blink>{{ ma_start.release }} ON SALE！</tbt-blink>
      </p>
      <tbt-start-jacket-img class="jacket" />
      <tbt-disco-table
        :display-credit="ma_start.displayCredit"
        :tracks="ma_start.tracks"
      >
      </tbt-disco-table>
      <tbt-youtube-embedded
        class="cross-fade"
        :youtube-embed-url="ma_start.youtubeEmbedUrl"
      />
    </tbt-section>
    <hr />
    <tbt-section>
      <tbt-h-2 class="album-title">{{ hope.title }}</tbt-h-2>
      <p class="on-sale">
        <tbt-blink>{{ hope.release }} ON SALE！</tbt-blink>
      </p>
      <tbt-hope-jacket-img class="jacket" />
      <tbt-disco-table
        :display-credit="hope.displayCredit"
        :tracks="hope.tracks"
      >
      </tbt-disco-table>
      <tbt-youtube-embedded
        class="cross-fade"
        :youtube-embed-url="hope.youtubeEmbedUrl"
      />
    </tbt-section>
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
