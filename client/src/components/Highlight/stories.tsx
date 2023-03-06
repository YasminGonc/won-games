import { StoryObj, Meta } from '@storybook/react'
import { Highlight, HighlightProps } from '.'
import item from './mock'

export default {
  title: 'Highlight',
  component: Highlight,
  args: { ...item }
} as Meta<HighlightProps>

export const Default: StoryObj<HighlightProps> = {}

export const withFloatImage: StoryObj<HighlightProps> = {
  args: {
    floatImage: '/img/red-dead-float.png'
  }
}
