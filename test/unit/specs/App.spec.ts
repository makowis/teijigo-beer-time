import { mount, RouterLinkStub } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  const wrapper = mount(App, {
    global: {
      stubs: {
        RouterLink: RouterLinkStub,
        RouterView: true,
      },
    },
  })

  it('should match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
