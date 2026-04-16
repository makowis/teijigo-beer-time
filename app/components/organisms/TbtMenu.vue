<script setup lang="ts">
import TbtDiscoLink from '@/components/atoms/TbtDiscoLink.vue'
import TbtMemberLink from '@/components/atoms/TbtMemberLink.vue'
import TbtTopLink from '@/components/atoms/TbtTopLink.vue'
import TbtBeenyaLink from '@/components/atoms/TbtBeenyaLink.vue'
</script>

<template>
  <nav id="menu-container" class="menu-container">
    <ul class="menu">
      <li class="menu-item">
        <tbt-top-link> トップ </tbt-top-link>
      </li>
      <li class="menu-item">
        <tbt-disco-link> DISCOGRAPHY </tbt-disco-link>
      </li>
      <li class="menu-item">
        <tbt-member-link> メンバー紹介 </tbt-member-link>
      </li>
      <li class="menu-item">
        <tbt-beenya-link> びーにゃの部屋 </tbt-beenya-link>
      </li>
      <li class="menu-item">
        <a
          href="https://teijigo.booth.pm/"
          target="_blank"
          rel="noopener noreferrer"
        >
          通販(BOOTH)
          <span class="visually-hidden">（新しいタブで開きます）</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.menu-container {
  position: fixed;
  width: 20%;
  height: 100%;
  padding-top: 60px;
  background-image: url('../../assets/bg.png');
}

.menu {
  list-style-type: '🍺';
  margin-left: 1em;
  padding-left: 1.25em;
}

.menu ::marker {
  font-size: 1.25em;
  font-family: 'Apple Color Emoji', 'Segoe UI Emoji', 'Noto Color Emoji', sans-serif;
}

.menu-item {
  margin-bottom: 20px;
  padding-left: 0.25em;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
}

@media screen and (width <= 900px) {
  .menu-container {
    position: relative;
    width: 100%;
    padding-top: 0;
    border-bottom: 5px solid gainsboro;
  }

  .menu {
    margin: 10px;
    padding-left: 1.25em;
    text-align: center;
  }

  .menu-item {
    display: inline list-item;
    margin: 0 0.75em 10px 0;
    padding-left: 0.25em;
  }
}
</style>
