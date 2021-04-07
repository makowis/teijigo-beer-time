import { mount, RouterLinkStub } from '@vue/test-utils'
import Index from '@/pages/index.vue';

describe('index.vue', () => {
  const mockMath = Object.create(global.Math);
  mockMath.random = () => 1;

  const vm = mount(Index, {
    stubs: {
      NuxtLink: RouterLinkStub
    },
    mocks: {
      Math: mockMath
    }
  }).vm;

  it('should match the snapshot', () => {
    expect(vm.$el).toMatchSnapshot();
  });
});
