import Vue from 'vue';
import Router from 'vue-router';
import Top from '@/components/Top';
import Disco from '@/components/Disco';
import NotFound from '@/components/NotFound';

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
      path: '*',
      name: 'NotFound',
      component: NotFound,
    },
  ],
});
