<template>
  <default-template>
    <div class="top">
      <tbt-h1 class="blink">{{ msg }}</tbt-h1>
      <tbt-marquee>
        M3-2018秋 参戦予定！！！！衝撃のデビューを見逃すな！！！！
      </tbt-marquee>
      <section>
        <tbt-h2>アクセスカウンター</tbt-h2>
        <p>あなたは{{ accessCounter }}人目の訪問者です。</p>
        <p>現在の累計訪問者数は{{ realtimeCounter }}人です。</p>
        <small>
          <router-link to="/bbs">キリ番報告はこちらで！！！</router-link>
        </small>
      </section>
      <section>
        <tbt-h2>サークルカット</tbt-h2>
        <img class="circle-cut" src="@/assets/cut.png" alt="サークルカット">
      </section>
      <p>
        <router-link to="/disco">
          ＞＞＞＞DISCOGRAPHY＜＜＜＜
        </router-link>
      </p>
      <p>
        <router-link to="/bbs">
          ★★★★★一言掲示板★★★★★
        </router-link>
      </p>
      <p>
        <router-link to="/member">
          🍺🍺🍺🍺️メンバー紹介🍺🍺🍺🍺
        </router-link>
      </p>
    </div>
  </default-template>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import firebase from 'firebase';
import database from '@/firebase-config';
import DefaultTemplate from '@/components/templates/Default';
import TbtH1 from '@/components/atoms/TbtH1';
import TbtH2 from '@/components/atoms/TbtH2';
import TbtMarquee from '@/components/atoms/TbtMarquee';

@Component({
  components: {
    DefaultTemplate,
    TbtH1,
    TbtH2,
    TbtMarquee,
  },
})
export default class Top extends Vue {
  msg: string = '定時後ビールタイム公式サイト';
  accessCounter: number = 0;
  realtimeCounter: number = 0;

  created() {
    this.countUp();
    this.listen();
  }

  listen() {
    database
      .ref('access_counter')
      .on('value', (snapshot: firebase.database.DataSnapshot | null) => {
        if (snapshot) {
          const accessCount = parseInt(snapshot.val(), 10);
          this.realtimeCounter = accessCount;
        }
      });
  }

  countUp() {
    database
      .ref('access_counter')
      .once('value')
      .then((snapshot: firebase.database.DataSnapshot | null) => {
        if (snapshot) {
          const accessCount = parseInt(snapshot.val(), 10) + 1;
          database.ref().update({ access_counter: accessCount });
          this.accessCounter = accessCount;
        }
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blink {
  animation: blink 1s step-end infinite;
  -webkit-animation: blink 1s step-end infinite;
}

@keyframes blink {
  75% {
    opacity: 0;
  }
}

@-webkit-keyframes blink {
  75% {
    opacity: 0;
  }
}

.circle-cut {
  width: 200px;
  max-width: 100%;
}

section {
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
