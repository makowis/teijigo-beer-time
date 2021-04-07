<template>
  <h3 :class="$style.h3">
    <slot />
  </h3>
</template>

<style module>
.h3 {
  font-weight: normal;
}
</style>
