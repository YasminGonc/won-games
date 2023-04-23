import { StoryObj, Meta } from '@storybook/react'
import { CartIcon, CartIconProps } from '.'

export default {
  title: 'CartIcon',
  component: CartIcon,
  args: {},
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta<CartIconProps>

export const Default: StoryObj<CartIconProps> = {}

export const WithBadge: StoryObj<CartIconProps> = {}

WithBadge.args = {
  quantity: 3
}
