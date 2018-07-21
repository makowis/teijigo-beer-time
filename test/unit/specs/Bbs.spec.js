import Vue from 'vue';
import Bbs from '@/components/pages/Bbs';
import router from '@/router/index';

describe('Bbs.vue', () => {
  const Constructor = Vue.extend(Bbs);
  const vm = new Constructor({ router }).$mount();

  it('should match the snapshot', () => {
    expect(vm.$el).toMatchSnapshot()
  });
});