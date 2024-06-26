import { describe, it, expect } from 'vitest'
import { mount, RouterLinkStub } from '@vue/test-utils'
import NotFound from '@/pages/notFound.vue'

describe('index.vue', () => {
  const vm = mount(NotFound, {
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
