import { mount, RouterLinkStub } from '@vue/test-utils'
import Disco from '@/pages/disco.vue';

describe('beenya.vue', () => {
  const vm = mount(Disco, {
    stubs: {
      NuxtLink: RouterLinkStub
    }
  }).vm;  

  it('should match the snapshot', () => {
    expect(vm.$el).toMatchSnapshot();
  });
});
