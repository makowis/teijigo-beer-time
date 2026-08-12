import { mount, RouterLinkStub } from '@vue/test-utils'
import NotFound from '@/pages/notFound.vue'

describe('notFound.vue', () => {
  const wrapper = mount(NotFound, {
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
