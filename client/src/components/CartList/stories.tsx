import { StoryObj, Meta } from '@storybook/react'
import { CartList, CartListProps } from '.'

import { cartListMock } from './mock'

export default {
  title: 'CartList',
  component: CartList,
  args: cartListMock,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta<CartListProps>

export const Default: StoryObj<CartListProps> = {
  render: (args) => (
    <div style={{ maxWidth: 800 }}>
      <CartList {...args} />
    </div>
  )
}
