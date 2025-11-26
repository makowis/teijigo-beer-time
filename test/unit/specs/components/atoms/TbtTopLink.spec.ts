import { mount, RouterLinkStub } from '@vue/test-utils'
import TbtTopLink from '@/components/atoms/TbtTopLink.vue'

describe('TbtTopLink.vue', () => {
  const wrapper = mount(TbtTopLink, {
    global: {
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    },
    slots: {
      default: 'トップ',
    },
  })

  it('should match the snapshot', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render NuxtLink with correct to prop', () => {
    const link = wrapper.findComponent(RouterLinkStub)
    expect(link.props('to')).toBe('/')
  })

  it('should render slot content', () => {
    expect(wrapper.text()).toBe('トップ')
  })
})
