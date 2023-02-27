import { StoryObj, Meta } from '@storybook/react'
import { Highlight, HighlightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Read Dead is back',
    subtitle: "Come see John's new adventures",
    backgroundImage: '/img/red-dead-img.png',
    buttonLabel: 'Buy now',
    buttonLink: '/rdr2',
    alignment: 'right'
  }
} as Meta<HighlightProps>

export const Default: StoryObj<HighlightProps> = {}

export const withFloatImage: StoryObj<HighlightProps> = {
  args: {
    floatImage: '/img/red-dead-float.png'
  }
}
