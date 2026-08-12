import { mount, RouterLinkStub } from '@vue/test-utils'
import Member from '@/pages/member.vue'

describe('member.vue', () => {
  const wrapper = mount(Member, {
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
