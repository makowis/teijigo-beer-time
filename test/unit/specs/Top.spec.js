import Vue from 'vue';
import Top from '@/components/pages/Top.vue';
import router from '@/router/index';

describe('Top.vue', () => {

  const Constructor = Vue.extend(Top);
  const vm = new Constructor({ router }).$mount();

  it('should match the snapshot', () => {
    expect(vm.$el).toMatchSnapshot()
  });
});