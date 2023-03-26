import { StoryObj, Meta } from '@storybook/react'
import { TextContent, TextContentProps } from '.'

import { TextContentMock } from './mock'

export default {
  title: 'TextContent',
  component: TextContent,
  args: TextContentMock,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta<TextContentProps>

export const Default: StoryObj<TextContentProps> = {}
