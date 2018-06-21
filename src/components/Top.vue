<template>
  <div class="top">
    <h1>{{ msg }}</h1>
    <div class="marquee">
      <div class="marquee-inner">
        M3-2018秋 参戦決定！！！！衝撃のデビューを見逃すな！！！！
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Top',
  data() {
    return {
      msg: '定時後ビールタイム非公式サイト',
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
  top: 10;
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
</style>
