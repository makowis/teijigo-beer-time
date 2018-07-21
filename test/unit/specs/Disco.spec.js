import Vue from 'vue';
import Disco from '@/components/pages/Disco.vue';
import router from '@/router/index';

describe('Disco.vue', () => {
  const Constructor = Vue.extend(Disco);
  const vm = new Constructor({ router }).$mount();

  it('should match the snapshot', () => {
    expect(vm.$el).toMatchSnapshot()
  });
});