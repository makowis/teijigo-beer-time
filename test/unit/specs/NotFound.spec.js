import Vue from 'vue';
import NotFound from '@/components/NotFound';
import router from '@/router/index.ts';

describe('NotFound.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(NotFound);
    const vm = new Constructor({ router }).$mount();
    expect(vm.$el.querySelector('.not-found h1').textContent)
      .toEqual('404 NOT FOUND');
  });
});