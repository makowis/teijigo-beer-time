import type { Meta } from '@storybook/vue3'

import TbtBlink from '~/components/atoms/TbtBlink.vue'

const meta: Meta<typeof TbtBlink> = {
  title: 'components/atoms/TbtBlink',
  component: TbtBlink,
  tags: ['atoms'],
}

export default meta

export const Sample = () => ({
  components: { TbtBlink },
  template: '<TbtBlink><p>Hello Blink</p></TbtBlink>',
})
