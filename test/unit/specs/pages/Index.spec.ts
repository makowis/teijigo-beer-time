import { mount, RouterLinkStub } from '@vue/test-utils';
import Index from '@/pages/index.vue';

describe('index.vue', () => {
  const mockMath = Object.create(global.Math);
  mockMath.random = () => 0.5;
  global.Math = mockMath;

  const vm = mount(Index, {
    global: {
      stubs: {
        NuxtLink: RouterLinkStub
      }
    }
  }).vm;

  it('should match the snapshot', () => {
    expect(vm.$el).toMatchSnapshot();
  });
});
