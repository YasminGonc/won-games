import { StoryObj, Meta } from '@storybook/react'
import { OrdersList, OrdersListProps } from '.'

import { ordersListMock } from './mock'

export default {
  title: 'Profile/OrdersList',
  component: OrdersList,
  args: ordersListMock
} as Meta<OrdersListProps>

export const Default: StoryObj<OrdersListProps> = {
  render: (args) => (
    <div style={{ maxWidth: 850, margin: 'auto' }}>
      <OrdersList {...args} />
    </div>
  )
}
