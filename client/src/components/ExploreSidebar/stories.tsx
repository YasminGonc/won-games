import { StoryObj, Meta } from '@storybook/react'
import { ExploreSidebar, ExploreSideBarProps } from '.'
import { exploreSideBarMock } from './mock'

export default {
  title: 'ExploreSidebar',
  component: ExploreSidebar,
  args: {
    items: exploreSideBarMock.items
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta<ExploreSideBarProps>

export const Default: StoryObj<ExploreSideBarProps> = {}

export const WithInitialValues: StoryObj<ExploreSideBarProps> = {}

WithInitialValues.args = {
  initialValues: { windows: true, action: true, sort_by: 'Low to high' }
}
