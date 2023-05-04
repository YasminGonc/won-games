import { StoryObj, Meta } from '@storybook/react'
import { Menu, MenuProps } from '.'

export default {
  title: 'Menu',
  component: Menu,
  parameters: {
    layout: 'fullScreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta<MenuProps>

export const Default: StoryObj<MenuProps> = {}

export const Logged: StoryObj<MenuProps> = {}

Logged.args = {
  username: 'John'
}
