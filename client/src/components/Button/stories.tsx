import { StoryObj, Meta } from '@storybook/react'
import { ShoppingCart } from 'phosphor-react'
import { Button, ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Buy now',
    size: 'medium',
    fullWidth: false,
    minimal: false
  },
  argTypes: {
    icon: {
      type: 'symbol'
    }
  }
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}

export const withIcon: StoryObj<ButtonProps> = {
  render: (args) => (
    <Button {...args}>
      <ShoppingCart />
      Buy now
    </Button>
  )
}

export const asLink: StoryObj<ButtonProps> = {
  args: {
    size: 'large',
    as: 'a',
    href: '/link',
    fullWidth: false
  }
}

export const minimal: StoryObj<ButtonProps> = {
  render: (args) => (
    <Button {...args}>
      <ShoppingCart />
      Buy now
    </Button>
  )
}

minimal.args = {
  minimal: true
}
