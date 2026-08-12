import { mount, RouterLinkStub } from '@vue/test-utils'
import TbtMemberLink from '@/components/atoms/TbtMemberLink.vue'

describe('TbtMemberLink.vue', () => {
  const wrapper = mount(TbtMemberLink, {
    global: {
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    },
    slots: {
      default: 'メンバー',
    },
  })

  it('should match the snapshot', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render NuxtLink with correct to prop', () => {
    const link = wrapper.findComponent(RouterLinkStub)
    expect(link.props('to')).toBe('/member')
  })

  it('should render slot content', () => {
    expect(wrapper.text()).toBe('メンバー')
  })
})
