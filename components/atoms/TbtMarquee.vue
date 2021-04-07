<template>
  <div :class="$style.marquee">
    <div :class="$style.marqueeInner">
      <slot />
    </div>
  </div>
</template>

<style module>
.marquee {
  overflow: hidden;
  position: relative;
  background-color: black;
  padding: 10px;
}

.marquee::after {
  content: '';
  white-space: nowrap;
  display: inline-block;
}

.marqueeInner {
  position: absolute;
  top: 10px;
  white-space: nowrap;
  animation-name: marquee;
  animation-timing-function: linear;
  animation-duration: 20s;
  animation-iteration-count: infinite;
  color: orange;
}

.marqueeInner:hover {
  animation-play-state: paused;
  cursor: default;
}

@keyframes marquee {
  0% {
    left: 100%;
    transform: translate(0);
  }
  100% {
    left: 0;
    transform: translate(-100%);
  }
}
</style>
