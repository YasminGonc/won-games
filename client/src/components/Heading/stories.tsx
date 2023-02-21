import { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '.'

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Most Popular',
    color: 'black',
    size: 'medium',
    leftBorder: false,
    bottomBorder: false,
    lineColor: 'primary'
  }
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}
