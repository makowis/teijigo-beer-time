<template>
  <tbt-default>
    <div class="top">
      <tbt-h1
        ><tbt-blink>{{ msg }}</tbt-blink></tbt-h1
      >
      <p>
        <tbt-blink>🎉🎉🎉🎉🎉🎉🎉M3-2019秋参戦決定！🎉🎉🎉🎉🎉🎉</tbt-blink>
      </p>
      <tbt-marquee>
        M3-2020秋に参戦！パワーアップしたサウンドをお届けします！
      </tbt-marquee>
      <tbt-access-counter-section v-bind="counter" />
      <tbt-news-section />
      <tbt-circle-cut-section />
      <tbt-circle-space-info-section />
      <tbt-mail-section />
      <tbt-menu-section />
    </div>
  </tbt-default>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import database from '@/firebase-config';
import TbtDefault from '@/components/templates/TbtDefault.vue';
import TbtH1 from '@/components/atoms/TbtH1.vue';
import TbtMarquee from '@/components/atoms/TbtMarquee.vue';
import TbtBlink from '@/components/atoms/TbtBlink.vue';
import TbtAccessCounterSection from '@/components/organisms/TbtAccessCounterSection.vue';
import TbtCircleCutSection from '@/components/organisms/TbtCircleCutSection.vue';
import TbtCircleSpaceInfoSection from '@/components/organisms/TbtCircleSpaceInfoSection.vue';
import TbtMenuSection from '@/components/organisms/TbtMenuSection.vue';
import TbtMailSection from '@/components/organisms/TbtMailSection.vue';
import TbtNewsSection from '@/components/organisms/TbtNewsSection.vue';

@Component({
  components: {
    TbtDefault,
    TbtH1,
    TbtMarquee,
    TbtBlink,
    TbtAccessCounterSection,
    TbtCircleCutSection,
    TbtCircleSpaceInfoSection,
    TbtMenuSection,
    TbtMailSection,
    TbtNewsSection,
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
