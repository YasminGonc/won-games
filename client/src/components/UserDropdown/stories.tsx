import { StoryObj, Meta } from '@storybook/react'
import { UserDropdown, UserDropdownProps } from '.'

export default {
  title: 'UserDropdown',
  component: UserDropdown,
  args: {
    username: 'John'
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta<UserDropdownProps>

export const Default: StoryObj<UserDropdownProps> = {
  render: (args) => (
    <div
      style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}
    >
      <UserDropdown {...args} />
    </div>
  )
}
