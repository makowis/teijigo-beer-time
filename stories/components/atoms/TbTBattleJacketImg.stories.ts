import type { Meta, StoryObj } from '@storybook/vue3'

import TbtBattleJacketImg from '~/components/atoms/TbtBattleJacketImg.vue'

const meta: Meta<typeof TbtBattleJacketImg> = {
  title: 'components/atoms/TbtBattleJacketImg',
  component: TbtBattleJacketImg,
  tags: ['atoms'],
}

export default meta
type Story = StoryObj<typeof meta>

export const TbtBattleJacketImgStory: Story = {
  args: {},
}
