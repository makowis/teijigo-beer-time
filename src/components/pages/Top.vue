<template>
  <default-template>
    <div class="top">
      <tbt-h1 class="blink">{{ msg }}</tbt-h1>
      <tbt-marquee>
        M3-2018秋 参戦予定！！！！衝撃のデビューを見逃すな！！！！
      </tbt-marquee>
      <tbt-access-counter-section v-bind="counter" />
      <tbt-circle-cut-section />
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
import TbtMarquee from '@/components/atoms/TbtMarquee';
import TbtAccessCounterSection from '@/components/organisms/TbtAccessCounterSection';
import TbtCircleCutSection from '@/components/organisms/TbtCircleCutSection';

@Component({
  components: {
    DefaultTemplate,
    TbtH1,
    TbtMarquee,
    TbtAccessCounterSection,
    TbtCircleCutSection,
  },
})
export default class Top extends Vue {
  msg: string = '定時後ビールタイム公式サイト';
  counter = { access: 0, realtime: 0 };

  created() {
    this.countUp();
    this.listen();
  }

  listen() {
    database
      .ref('access_counter')
      .on('value', (snapshot: firebase.database.DataSnapshot | null) => {
        if (snapshot) {
          const realtime = parseInt(snapshot.val(), 10);
          this.counter = { ...this.counter, realtime };
        }
      });
  }

  countUp() {
    database
      .ref('access_counter')
      .once('value')
      .then((snapshot: firebase.database.DataSnapshot | null) => {
        if (snapshot) {
          const access = parseInt(snapshot.val(), 10) + 1;
          database.ref().update({ access_counter: access });
          this.counter = { ...this.counter, access };
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
</style>
