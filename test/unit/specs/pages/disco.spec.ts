import { mount, RouterLinkStub } from '@vue/test-utils'
import Disco from '@/pages/disco.vue'

describe('disco.vue', () => {
  const wrapper = mount(Disco, {
    global: {
      stubs: {
        RouterLink: RouterLinkStub,
      },
    },
  })

  it('should match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
