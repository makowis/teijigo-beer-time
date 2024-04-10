<script setup lang="ts">
import TbtDiscoLink from '@/components/atoms/TbtDiscoLink.vue'
import TbtMemberLink from '@/components/atoms/TbtMemberLink.vue'
import TbtTopLink from '@/components/atoms/TbtTopLink.vue'
import TbtBeenyaLink from '@/components/atoms/TbtBeenyaLink.vue'
</script>

<template>
  <nav id="menu-container" :class="$style.menuContainer">
    <ul :class="$style.menu">
      <li :class="$style.menuItem">
        <tbt-top-link> トップ </tbt-top-link>
      </li>
      <li :class="$style.menuItem">
        <tbt-disco-link> DISCOGRAPHY </tbt-disco-link>
      </li>
      <li :class="$style.menuItem">
        <tbt-member-link> メンバー紹介 </tbt-member-link>
      </li>
      <li :class="$style.menuItem">
        <tbt-beenya-link> びーにゃの部屋 </tbt-beenya-link>
      </li>
      <li :class="$style.menuItem">
        <a href="https://teijigo.booth.pm/items/1093403" target="_blank">
          通販(BOOTH)
        </a>
      </li>
    </ul>
  </nav>
</template>

<style module>
.menuContainer {
  position: fixed;
  width: 20%;
  height: 100%;
  padding-top: 60px;
  background-image: url('../../assets/bg.png');
}

.menu {
  list-style: none;
}

.menuItem {
  margin-bottom: 20px;
}

.menuItem::before {
  content: '🍺';
}

@media screen and (width <= 900px) {
  .menuContainer {
    position: relative;
    width: 100%;
    padding-top: 0;
    border-bottom: 5px solid gainsboro;
  }

  .menu {
    justify-content: space-around;
    margin: 10px;
    padding: 0;
  }

  .menuItem {
    display: inline-block;
    margin-bottom: 10px;
  }
}
</style>
