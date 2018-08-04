<template>
  <nav id="menu-container" :class="$style.menuContainer">
    <ul :class="$style.menu">
      <li :class="$style.menuItem">
        <tbt-top-link>
          トップ
        </tbt-top-link>
      </li>
      <li :class="$style.menuItem">
        <tbt-disco-link>
          DISCOGRAPHY
        </tbt-disco-link>
      </li>
      <li :class="$style.menuItem">
        <tbt-member-link>
          メンバー紹介
        </tbt-member-link>
      </li>
      <li :class="$style.menuItem">
        <tbt-bbs-link>
          一言掲示板
        </tbt-bbs-link>
      </li>
      <li :class="$style.menuItem">
        <tbt-beenya-link>
          びーにゃの部屋
        </tbt-beenya-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import TbtBbsLink from '@/components/atoms/TbtBbsLink.vue';
import TbtDiscoLink from '@/components/atoms/TbtDiscoLink.vue';
import TbtMemberLink from '@/components/atoms/TbtMemberLink.vue';
import TbtTopLink from '@/components/atoms/TbtTopLink.vue';
import TbtBeenyaLink from '@/components/atoms/TbtBeenyaLink.vue';

@Component({
  components: {
    TbtBbsLink,
    TbtDiscoLink,
    TbtMemberLink,
    TbtTopLink,
    TbtBeenyaLink,
  },
})
export default class TbtMenu extends Vue {}
</script>

<style module>
.menuContainer {
  position: fixed;
  width: 20%;
  padding-top: 60px;
}

.menu {
  list-style: none;
}

.menuItem {
  margin-bottom: 20px;
}

.menuItem:before {
  content: '🍺';
}

@media screen and (max-width: 900px) {
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
