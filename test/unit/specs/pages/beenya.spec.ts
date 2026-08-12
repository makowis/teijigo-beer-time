import { mount, RouterLinkStub } from '@vue/test-utils'
import Beenya from '@/pages/beenya.vue'

describe('beenya.vue', () => {
  const wrapper = mount(Beenya, {
    global: {
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    },
  })

  it('should match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
