import { StoryObj, Meta } from '@storybook/react'
import { CartDropdown, CartDropdownProps } from '.'

import { cartListMock } from '../CartList/mock'

export default {
  title: 'CartDropdown',
  component: CartDropdown,
  args: cartListMock,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta<CartDropdownProps>

export const Default: StoryObj<CartDropdownProps> = {
  render: (args) => (
    <div
      style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}
    >
      <CartDropdown {...args} />
    </div>
  )
}

export const Empty: StoryObj<CartDropdownProps> = {
  render: () => (
    <div
      style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}
    >
      <CartDropdown />
    </div>
  )
}
