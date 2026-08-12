import { mount, RouterLinkStub } from '@vue/test-utils'
import NotFound from '@/pages/[...path].vue'

describe('[...path].vue', () => {
  const wrapper = mount(NotFound, {
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
