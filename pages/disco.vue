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
import TbtYoutubeEmbedded from '@/components/atoms/TbtYoutubeEmbedded.vue'
import TbtDiscoTable from '@/components/atoms/TbtDiscoTable.vue'
import { recycle, battle, ma_start, hope, rising } from '@/resources/discos'
</script>

<template>
  <div class="disco">
    <tbt-h-1>DISCOGRAPHY</tbt-h-1>
    <tbt-section>
      <tbt-h-2 :class="$style.albumTitle">
        {{ rising.title }}
        <tbt-new-blink />
      </tbt-h-2>
      <p :class="$style.onSale">
        <tbt-blink>{{ rising.release }} ON SALE!</tbt-blink>
      </p>
      <tbt-rising-jacket-img :class="$style.jacket" />
      <tbt-disco-table
        :display-credit="rising.displayCredit"
        :tracks="rising.tracks"
      >
      </tbt-disco-table>
      <tbt-youtube-embedded
        :class="$style.crossFade"
        :youtube-embed-url="rising.youtubeEmbedUrl"
      />
    </tbt-section>
    <hr />
    <tbt-section>
      <tbt-h-2 :class="$style.albumTitle">{{ battle.title }}</tbt-h-2>
      <p :class="$style.onSale">
        <tbt-blink>{{ battle.release }} ON SALE！</tbt-blink>
      </p>
      <tbt-battle-jacket-img :class="$style.jacket" />
      <tbt-disco-table
        :display-credit="battle.displayCredit"
        :tracks="battle.tracks"
      >
      </tbt-disco-table>
      <tbt-youtube-embedded
        :class="$style.crossFade"
        :youtube-embed-url="battle.youtubeEmbedUrl"
      />
    </tbt-section>
    <hr />
    <tbt-section>
      <tbt-h-2 :class="$style.albumTitle">{{ recycle.title }}</tbt-h-2>
      <p :class="$style.onSale">
        <tbt-blink>{{ recycle.release }} ON SALE！</tbt-blink>
      </p>
      <tbt-recycle-jacket-img :class="$style.jacket" />
      <tbt-disco-table
        :display-credit="recycle.displayCredit"
        :tracks="recycle.tracks"
      >
      </tbt-disco-table>
      <tbt-youtube-embedded
        :class="$style.crossFade"
        :youtube-embed-url="recycle.youtubeEmbedUrl"
      />
    </tbt-section>
    <hr />
    <tbt-section>
      <tbt-h-2 :class="$style.albumTitle">{{ ma_start.title }}</tbt-h-2>
      <p :class="$style.onSale">
        <tbt-blink>{{ ma_start.release }} ON SALE！</tbt-blink>
      </p>
      <tbt-start-jacket-img :class="$style.jacket" />
      <tbt-disco-table
        :display-credit="ma_start.displayCredit"
        :tracks="ma_start.tracks"
      >
      </tbt-disco-table>
      <tbt-youtube-embedded
        :class="$style.crossFade"
        :youtube-embed-url="ma_start.youtubeEmbedUrl"
      />
    </tbt-section>
    <hr />
    <tbt-section>
      <tbt-h-2 :class="$style.albumTitle">{{ hope.title }}</tbt-h-2>
      <p :class="$style.onSale">
        <tbt-blink>{{ hope.release }} ON SALE！</tbt-blink>
      </p>
      <tbt-hope-jacket-img :class="$style.jacket" />
      <tbt-disco-table
        :display-credit="hope.displayCredit"
        :tracks="hope.tracks"
      >
      </tbt-disco-table>
      <tbt-youtube-embedded
        :class="$style.crossFade"
        :youtube-embed-url="hope.youtubeEmbedUrl"
      />
    </tbt-section>
  </div>
</template>

<style module>
.jacket {
  width: 400px;
  max-width: 70%;
  margin-bottom: 20px;
}

.albumTitle {
  margin-bottom: 5px;
}

.onSale {
  color: red;
  font-weight: bold;
  margin: 0 0 15px;
}

.crossFade {
  max-width: 80%;
  margin: 30px auto 30px;
}
</style>
