import Vue from 'vue';
import Beenya from '@/components/pages/Beenya.vue';
import router from '@/router/index';

describe('Beenya.vue', () => {
  const Constructor = Vue.extend(Beenya);
  const vm = new Constructor({ router }).$mount();

  it('should match the snapshot', () => {
    expect(vm.$el).toMatchSnapshot()
  });
});