import Vue from 'vue';
import Router from 'vue-router';
import Top from '@/components/pages/Top.vue';
import Disco from '@/components/pages/Disco.vue';
import Bbs from '@/components/pages/Bbs.vue';
import Member from '@/components/pages/Member.vue';
import NotFound from '@/components/pages/NotFound.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top,
    },
    {
      path: '/disco',
      name: 'Disco',
      component: Disco,
    },
    {
      path: '/bbs',
      name: 'Bbs',
      component: Bbs,
    },
    {
      path: '/member',
      name: 'Member',
      component: Member,
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
    },
  ],
});