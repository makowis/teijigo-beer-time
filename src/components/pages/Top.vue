<template>
  <tbt-default>
    <div class="top">
      <tbt-h1><tbt-blink>{{ msg }}</tbt-blink></tbt-h1>
      <p><tbt-blink>🎉🎉🎉🎉🎉🎉🎉祝！M3当選！🎉🎉🎉🎉🎉🎉</tbt-blink></p>
      <tbt-marquee>
        M3-2018秋 参戦決定！！！！衝撃のデビューを見逃すな！！！！
      </tbt-marquee>
      <tbt-access-counter-section v-bind="counter" />
      <tbt-circle-cut-section />
      <tbt-circle-space-info-section />
      <p>
        <tbt-disco-link>
          ＞＞＞＞DISCOGRAPHY＜＜＜＜
        </tbt-disco-link>
      </p>
      <p>
        <tbt-bbs-link>
          ★★★★★一言掲示板★★★★★
        </tbt-bbs-link>
      </p>
      <p>
        <tbt-member-link>
          🍺🍺🍺🍺️メンバー紹介🍺🍺🍺🍺
        </tbt-member-link>
      </p>
    </div>
  </tbt-default>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import firebase from 'firebase';
import database from '@/firebase-config';
import TbtDefault from '@/components/templates/TbtDefault.vue';
import TbtH1 from '@/components/atoms/TbtH1.vue';
import TbtBbsLink from '@/components/atoms/TbtBbsLink.vue';
import TbtDiscoLink from '@/components/atoms/TbtDiscoLink.vue';
import TbtMemberLink from '@/components/atoms/TbtMemberLink.vue';
import TbtMarquee from '@/components/atoms/TbtMarquee.vue';
import TbtBlink from '@/components/atoms/TbtBlink.vue';
import TbtAccessCounterSection from '@/components/organisms/TbtAccessCounterSection.vue';
import TbtCircleCutSection from '@/components/organisms/TbtCircleCutSection.vue';
import TbtCircleSpaceInfoSection from '@/components/organisms/TbtCircleSpaceInfoSection.vue';

@Component({
  components: {
    TbtDefault,
    TbtH1,
    TbtBbsLink,
    TbtDiscoLink,
    TbtMemberLink,
    TbtMarquee,
    TbtBlink,
    TbtAccessCounterSection,
    TbtCircleCutSection,
    TbtCircleSpaceInfoSection,
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
