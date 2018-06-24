<template>
  <div class="top">
    <h1 class="blink">{{ msg }}</h1>
    <div class="marquee">
      <div class="marquee-inner">
        M3-2018秋 参戦予定！！！！衝撃のデビューを見逃すな！！！！
      </div>
    </div>
    <section>
      <h2>サークルカット</h2>
      <img class="circle-cut" src="../assets/cut.png" alt="サークルカット">
    </section>
    <router-link to="/disco">
      ＞＞＞＞DISCOGRAPHY＜＜＜＜
    </router-link>

  </div>
</template>

<script>
export default {
  name: 'Top',
  data() {
    return {
      msg: '定時後ビールタイム公式サイト',
    };
  },
};
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
