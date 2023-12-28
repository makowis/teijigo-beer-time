import type  { Meta } from '@storybook/vue3'

import TbtH1 from '~/components/atoms/TbtH1.vue'
import TbtBlink from '~/components/atoms/TbtBlink.vue'

const meta: Meta<typeof TbtH1> = {
  title: 'components/atoms/TbtH1',
  component: TbtH1,
  tags: ['atoms'],
}

export default meta

export const Sample = () => ({
  components: { TbtH1 },
  template: '<TbtH1>H1 Text</TbtH1>',
})

export const H1WithBlink = () => ({
  components: { TbtH1,TbtBlink },
  template: '<TbtH1><TbtBlink>Blinkと一緒に使った場合</TbtBlink></TbtH1>',
})
