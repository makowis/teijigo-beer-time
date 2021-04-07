<template>
  <section :class="$style.section">
    <slot />
  </section>
</template>

<style module>
.section {
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
