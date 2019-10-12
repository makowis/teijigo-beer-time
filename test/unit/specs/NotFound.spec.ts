import Vue from 'vue';
import NotFound from '@/components/pages/NotFound.vue';
import router from '@/router/index';

describe('NotFound.vue', () => {
  const Constructor = Vue.extend(NotFound);
  const vm = new Constructor({ router }).$mount();

  it('should match the snapshot', () => {
    expect(vm.$el).toMatchSnapshot();
  });
});
