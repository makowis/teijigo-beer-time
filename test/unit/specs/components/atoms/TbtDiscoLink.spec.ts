import { mount, RouterLinkStub } from '@vue/test-utils'
import TbtDiscoLink from '@/components/atoms/TbtDiscoLink.vue'

describe('TbtDiscoLink.vue', () => {
  const wrapper = mount(TbtDiscoLink, {
    global: {
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    },
    slots: {
      default: 'ディスコ',
    },
  })

  it('should match the snapshot', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render NuxtLink with correct to prop', () => {
    const link = wrapper.findComponent(RouterLinkStub)
    expect(link.props('to')).toBe('/disco')
  })

  it('should render slot content', () => {
    expect(wrapper.text()).toBe('ディスコ')
  })
})
