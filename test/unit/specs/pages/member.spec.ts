import { mount, RouterLinkStub } from '@vue/test-utils'
import Member from '@/pages/member.vue'

describe('index.vue', () => {
  const vm = mount(Member, {
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
