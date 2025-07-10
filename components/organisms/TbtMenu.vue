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
        <a href="https://teijigo.booth.pm/" target="_blank"> 通販(BOOTH) </a>
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
  list-style: none;
}

.menu-item {
  margin-bottom: 20px;
}

.menu-item::before {
  content: '🍺';
}

@media screen and (width <= 900px) {
  .menu-container {
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

  .menu-item {
    display: inline-block;
    margin-bottom: 10px;
  }
}
</style>
