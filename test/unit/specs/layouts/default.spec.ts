import { mount, RouterLinkStub } from '@vue/test-utils'
import type { Component } from 'vue'
import DefaultLayout from '@/layouts/default.vue'

describe('default.vue', () => {
  const NuxtMock: Component = {
    template: '<div>Nuxt</div>',
  }
  const wrapper = mount(DefaultLayout, {
    global: {
      stubs: {
        NuxtLink: RouterLinkStub,
        Nuxt: NuxtMock,
        VitePwaManifest: true,
      },
    },
  })

  it('should match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
