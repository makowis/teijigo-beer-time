import type  { Meta, StoryObj } from '@storybook/vue3'

import TbtBeenyaImg from "~/components/atoms/TbtBeenyaImg.vue"

const meta: Meta<typeof TbtBeenyaImg> = {
  title: 'components/atoms/TbtBeenyaImg',
  component: TbtBeenyaImg,
  tags: ['atoms'],
}

export default meta
type Story =StoryObj<typeof meta>

export const TbtBeenyaImgStory: Story = {
  args: {},
}
