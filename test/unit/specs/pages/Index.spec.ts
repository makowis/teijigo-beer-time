import { mount, RouterLinkStub } from '@vue/test-utils'
import Index from '@/pages/index.vue';

describe('index.vue', () => {
  const vm = mount(Index, {
    stubs: {
      NuxtLink: RouterLinkStub
    }
  }).vm;  

  it('should match the snapshot', () => {
    expect(vm.$el).toMatchSnapshot();
  });
});
