import Vue from 'vue';
import Member from '@/components/pages/Member.vue';
import router from '@/router/index';

describe('Member.vue', () => {
  const Constructor = Vue.extend(Member);
  const vm = new Constructor({ router }).$mount();

  it('should match the snapshot', () => {
    expect(vm.$el).toMatchSnapshot()
  });
});