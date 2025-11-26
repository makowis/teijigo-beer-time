import { mount } from '@vue/test-utils'
import TbtNewsSection from '@/components/organisms/TbtNewsSection.vue'

describe('TbtNewsSection.vue', () => {
  const wrapper = mount(TbtNewsSection, {
    global: {
      stubs: {
        TbtSection: {
          template: '<section><slot></slot></section>',
        },
        TbtH2: {
          template: '<h2><slot></slot></h2>',
        },
        TbtNewBlink: {
          template: '<span class="new-blink"><slot></slot></span>',
        },
      },
    },
  })

  it('should match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render news items', () => {
    const listItems = wrapper.findAll('li')
    expect(listItems.length).toBe(2)
  })

  it('should render NEW blink element', () => {
    const newBlink = wrapper.find('.new-blink')
    expect(newBlink.exists()).toBe(true)
    expect(newBlink.text()).toBe('NEW')
  })

  it('should render X (formerly Twitter) link', () => {
    const xLink = wrapper.find('a[href="https://x.com/tbt_cf"]')
    expect(xLink.exists()).toBe(true)
    expect(xLink.text()).toContain('公式X')
  })
})
