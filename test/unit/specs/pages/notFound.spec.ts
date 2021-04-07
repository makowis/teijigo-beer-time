import { mount, RouterLinkStub } from '@vue/test-utils'
import NotFound from '@/pages/notFound.vue';

describe('index.vue', () => {
  const vm = mount(NotFound, {
    stubs: {
      NuxtLink: RouterLinkStub
    }
  }).vm;  

  it('should match the snapshot', () => {
    expect(vm.$el).toMatchSnapshot();
  });
});
