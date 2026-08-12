import { mount, RouterLinkStub } from '@vue/test-utils'
import TbtBeenyaLink from '@/components/atoms/TbtBeenyaLink.vue'

describe('TbtBeenyaLink.vue', () => {
  const wrapper = mount(TbtBeenyaLink, {
    global: {
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    },
    slots: {
      default: 'びーにゃ',
    },
  })

  it('should match the snapshot', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render NuxtLink with correct to prop', () => {
    const link = wrapper.findComponent(RouterLinkStub)
    expect(link.props('to')).toBe('/beenya')
  })

  it('should render slot content', () => {
    expect(wrapper.text()).toBe('びーにゃ')
  })
})
