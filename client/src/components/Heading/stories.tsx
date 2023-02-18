import { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '.'

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Most Popular',
    color: 'black',
    leftBorder: false,
    bottomBorder: false
  }
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}
