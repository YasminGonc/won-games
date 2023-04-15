import { StoryObj, Meta } from '@storybook/react'
import { ExploreSidebar, ExploreSideBarProps } from '.'
import { exploreSideBarMock } from './mock'

export default {
  title: 'ExploreSidebar',
  component: ExploreSidebar,
  args: exploreSideBarMock,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta<ExploreSideBarProps>

export const Default: StoryObj<ExploreSideBarProps> = {}
