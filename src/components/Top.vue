<template>
  <div class="top">
    <h1 class="blink">{{ msg }}</h1>
    <div class="marquee">
      <div class="marquee-inner">
        M3-2018秋 参戦予定！！！！衝撃のデビューを見逃すな！！！！
      </div>
    </div>
    <section>
      <h2>アクセスカウンター</h2>
      <p>あなたは{{ accessCounter }}人目の訪問者です。</p>
      <p>現在の累計訪問者数は{{ realtimeCounter }}人です。</p>
      <small>
        <router-link to="/bbs">キリ番報告はこちらで！！！</router-link>
      </small>
    </section>
    <section>
      <h2>サークルカット</h2>
      <img class="circle-cut" src="../assets/cut.png" alt="サークルカット">
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
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import database from '../firebase-config.ts';

export default Vue.extend({
  name: 'Top',
  data() {
    return {
      msg: '定時後ビールタイム公式サイト',
      accessCounter: 0,
      realtimeCounter: 0,
    };
  },
  created() {
    this.countUp();
    this.listen();
  },
  methods: {
    listen() {
      database.ref('access_counter').on('value', (snapshot) => {
        if (snapshot) {
          const accessCount = parseInt(snapshot.val(), 10);
          this.realtimeCounter = accessCount;
        }
      });
    },
    countUp() {
      database.ref('access_counter').once('value').then((snapshot) => {
        const accessCount = parseInt(snapshot.val(), 10) + 1;
        database.ref().update({ access_counter: accessCount });
        this.accessCounter = accessCount;
      });
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

.marquee {
  overflow: hidden;
  position: relative;
  background-color: black;
  padding: 10px;
}

.marquee::after {
  content: "";
  white-space: nowrap;
  display: inline-block;
}

.marquee > .marquee-inner {
  position: absolute;
  top: 10px;
  white-space: nowrap;
  animation-name: marquee;
  animation-timing-function: linear;
  animation-duration: 20s;
  animation-iteration-count: infinite;
  color: orange;
}

.marquee > .marquee-inner:hover {
  animation-play-state: paused;
  cursor: default;
}

@keyframes marquee {
    0% { left: 100%; transform: translate(0); }
  100% { left: 0; transform: translate(-100%); }
}

.blink {
  animation: blink 1s step-end infinite;
  -webkit-animation: blink 1s step-end infinite;
}

@keyframes blink {
  75% { opacity: 0.0; }
}

@-webkit-keyframes blink {
  75% { opacity: 0.0; }
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
