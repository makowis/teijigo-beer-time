<template>
  <tbt-default>
    <div class="disco">
      <tbt-h1>DISCOGRAPHY</tbt-h1>
      <section>
        <tbt-h2 :class="$style.albumTitle">1st Mini Album「HOPE」</tbt-h2>
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
      </section>
    </div>
  </tbt-default>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import TbtDefault from '@/components/templates/TbtDefault.vue';
import TbtH1 from '@/components/atoms/TbtH1.vue';
import TbtH2 from '@/components/atoms/TbtH2.vue';
import TbtBlink from '@/components/atoms/TbtBlink.vue';
import TbtHopeJacketImg from '@/components/atoms/TbtHopeJacketImg.vue';

@Component({
  components: {
    TbtDefault,
    TbtH1,
    TbtH2,
    TbtHopeJacketImg,
    TbtBlink,
  },
})
export default class Disco extends Vue {}
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
</style>
