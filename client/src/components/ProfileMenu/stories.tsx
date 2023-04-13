import { StoryObj, Meta } from '@storybook/react'
import { ProfileMenu, ProfileMenuProps } from '.'

export default {
  title: 'Profile/ProfileMenu',
  component: ProfileMenu,
  args: {
    activeLink: '/profile/me'
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta<ProfileMenuProps>

export const Default: StoryObj<ProfileMenuProps> = {}
