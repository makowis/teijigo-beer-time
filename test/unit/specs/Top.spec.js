import Vue from 'vue';
import Top from '@/components/Top';

describe('Top.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Top);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.top h1').textContent)
      .toEqual('定時後ビールタイム非公式サイト');
  });
});
