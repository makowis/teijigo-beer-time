import { mount, RouterLinkStub } from '@vue/test-utils'
import Beenya from '@/pages/beenya.vue'

describe('beenya.vue', () => {
  const vm = mount(Beenya, {
    global: {
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    },
  }).vm

  it('should match the snapshot', () => {
    expect(vm.$el).toMatchSnapshot()
  })
})
