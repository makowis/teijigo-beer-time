<template>
  <span class="blink">
    <slot />
  </span>
</template>

<style scoped>
.blink {
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  75% {
    opacity: 0;
  }
}
</style>
