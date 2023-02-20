import { StoryObj, Meta } from '@storybook/react'
import { Menu, MenuProps } from '.'

export default {
  title: 'Menu',
  component: Menu,
  parameters: {
    layout: 'fullScreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta<MenuProps>

export const Default: StoryObj<MenuProps> = {}
