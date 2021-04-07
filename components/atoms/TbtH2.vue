<template>
  <h2 :class="$style.h2">
    <slot />
  </h2>
</template>

<style module>
.h2 {
  font-weight: normal;
}
</style>
