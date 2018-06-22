import Vue from 'vue';
import Router from 'vue-router';
import Top from '@/components/Top';
import Disco from '@/components/Disco';

Vue.use(Router);

export default new Router({
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
  ],
});
