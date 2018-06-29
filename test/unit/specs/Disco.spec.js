import Vue from 'vue';
import Disco from '@/components/Disco';
import router from '@/router/index.ts';

describe('Disco.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Disco);
    const vm = new Constructor({ router }).$mount();
    expect(vm.$el.querySelector('.disco h1').textContent)
      .toEqual('DISCOGRAPHY');
  });
});
