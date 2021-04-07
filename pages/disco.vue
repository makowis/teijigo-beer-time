<template>
  <div class="disco">
    <tbt-h-1>DISCOGRAPHY</tbt-h-1>
    <tbt-section>
      <tbt-h-2 :class="$style.albumTitle">
        3nd Mini Album 「RECYCLE」
        <tbt-new-blink />
      </tbt-h-2>
      <p :class="$style.onSale">
        <tbt-blink>2019.10.27 ON SALE！</tbt-blink>
      </p>
      <tbt-recycle-jacket-img :class="$style.jacket" />
      <table border="1" :class="$style.table">
        <thead>
          <tr>
            <th>No</th>
            <th>曲名</th>
            <th>アーティスト</th>
            <th>クレジット</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td :class="$style.trackNo">1</td>
            <td>paellero</td>
            <td>comorebi notes</td>
            <td>作詞・作曲・歌：comorebi notes</td>
          </tr>
          <tr>
            <td :class="$style.trackNo">2</td>
            <td>Carry on</td>
            <td>マッキー</td>
            <td>
              作詞・作曲：マッキー<br />
              歌：マッキー feat. IA
            </td>
          </tr>
          <tr>
            <td :class="$style.trackNo">3</td>
            <td>大都会フォーエバー</td>
            <td>comorebi notes</td>
            <td>
              作詞・作曲：comorebi notes<br />
              歌：IA
            </td>
          </tr>
          <tr>
            <td :class="$style.trackNo">4</td>
            <td>tanabatight</td>
            <td>u13</td>
            <td>作曲：u13</td>
          </tr>
        </tbody>
      </table>
      <tbt-recycle-cross-fade :class="$style.crossFade" />
    </tbt-section>
    <hr />
    <tbt-section>
      <tbt-h-2 :class="$style.albumTitle"> 2nd Mini Album 「START」 </tbt-h-2>
      <p :class="$style.onSale">
        <tbt-blink>2019.04.27 ON SALE！</tbt-blink>
      </p>
      <tbt-start-jacket-img :class="$style.jacket" />
      <table border="1" :class="$style.table">
        <thead>
          <tr>
            <th>No</th>
            <th>曲名</th>
            <th>アーティスト</th>
            <th>クレジット</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td :class="$style.trackNo">1</td>
            <td>桜風狂想</td>
            <td>Pecan nene.</td>
            <td>
              作曲：ビール飲まない社員K<br />
              作詞：ビール飲まない社員K、みーやん<br />
              歌：みーやん
            </td>
          </tr>
          <tr>
            <td :class="$style.trackNo">2</td>
            <td>未来ヒーロー</td>
            <td>マッキー</td>
            <td>
              作詞・作曲：マッキー<br />
              歌：IA
            </td>
          </tr>
          <tr>
            <td :class="$style.trackNo">3</td>
            <td>ストロボサイン</td>
            <td>tan3-16</td>
            <td>
              作詞・作曲：u13<br />
              編曲：comorebi notes<br />
              歌：フナモトアユミ
            </td>
          </tr>
          <tr>
            <td :class="$style.trackNo">4</td>
            <td>桜花</td>
            <td>珍珠奶茶</td>
            <td>
              企画：WestTail<br />
              作曲：comorebi notes<br />
              作詞：台湾豆乳を飲む人<br />
              歌：Shiho (the Clock Hands)
            </td>
          </tr>
        </tbody>
      </table>
      <tbt-start-cross-fade :class="$style.crossFade" />
    </tbt-section>
    <hr />
    <tbt-section>
      <tbt-h-2 :class="$style.albumTitle">1st Mini Album「HOPE」</tbt-h-2>
      <p :class="$style.onSale">
        <tbt-blink>2018.10.28 ON SALE！</tbt-blink>
      </p>
      <tbt-hope-jacket-img :class="$style.jacket" />
      <table border="1" :class="$style.table">
        <thead>
          <tr>
            <th>No</th>
            <th>曲名</th>
            <th>アーティスト</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td :class="$style.trackNo">1</td>
            <td>Alive</td>
            <td>WestTail feat. ruha</td>
          </tr>
          <tr>
            <td :class="$style.trackNo">2</td>
            <td>cresc.</td>
            <td>きむらじお feat.フナモトアユミ</td>
          </tr>
          <tr>
            <td :class="$style.trackNo">3</td>
            <td>瞬間</td>
            <td>山口真央 feat. すぴか</td>
          </tr>
          <tr>
            <td :class="$style.trackNo">4</td>
            <td>Calling</td>
            <td>NY2 feat. フナモトアユミ</td>
          </tr>
          <tr>
            <td :class="$style.trackNo">5</td>
            <td>Diary</td>
            <td>u13 feat. フナモトアユミ</td>
          </tr>
          <tr>
            <td :class="$style.trackNo">6</td>
            <td>ハルカユーグレハナヤイデ</td>
            <td>comorebi notes</td>
          </tr>
        </tbody>
      </table>
      <tbt-hope-cross-fade :class="$style.crossFade" />
    </tbt-section>
  </div>
</template>

<script lang="ts">
import TbtH1 from '@/components/atoms/TbtH1.vue'
import TbtH2 from '@/components/atoms/TbtH2.vue'
import TbtSection from '@/components/atoms/TbtSection.vue'
import TbtBlink from '@/components/atoms/TbtBlink.vue'
import TbtNewBlink from '@/components/atoms/TbtNewBlink.vue'
import TbtHopeJacketImg from '@/components/atoms/TbtHopeJacketImg.vue'
import TbtStartJacketImg from '@/components/atoms/TbtStartJacketImg.vue'
import TbtRecycleJacketImg from '@/components/atoms/TbtRecycleJacketImg.vue'
import TbtHopeCrossFade from '@/components/atoms/TbtHopeCrossFade.vue'
import TbtStartCrossFade from '@/components/atoms/TbtStartCrossFade.vue'
import TbtRecycleCrossFade from '@/components/atoms/TbtRecycleCrossFade.vue'

export default {
  components: {
    TbtH1,
    TbtH2,
    TbtSection,
    TbtHopeJacketImg,
    TbtStartJacketImg,
    TbtRecycleJacketImg,
    TbtBlink,
    TbtNewBlink,
    TbtHopeCrossFade,
    TbtStartCrossFade,
    TbtRecycleCrossFade,
  },
}
</script>

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
