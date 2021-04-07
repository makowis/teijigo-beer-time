<template>
  <h1 :class="$style.h1">
    <slot />
  </h1>
</template>

<style module>
.h1 {
  font-weight: normal;
}
</style>
