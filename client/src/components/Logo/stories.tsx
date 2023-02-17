import { StoryObj, Meta } from '@storybook/react'
import { Logo, LogoProps } from '.'

export default {
  title: 'Logo',
  component: Logo,
  args: {
    color: 'white',
    size: 'normal',
    hideOnMobile: false
  }
} as Meta<LogoProps>

export const Default: StoryObj<LogoProps> = {}
