import { StoryObj, Meta } from '@storybook/react'
import { Dropdown, DropdownProps } from '.'

export default {
  title: 'Dropdown',
  component: Dropdown,
  args: {
    title: 'Click here',
    children: 'content'
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta<DropdownProps>

export const Default: StoryObj<DropdownProps> = {}
