import { StoryObj, Meta } from '@storybook/react'
import { Empty, EmptyProps } from '.'

export default {
  title: 'Empty',
  component: Empty,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: {
    title: 'Your wishlist is empty',
    description: 'Games added to your wishlist will appear here',
    hasLink: true
  }
} as Meta<EmptyProps>

export const Default: StoryObj<EmptyProps> = {}
