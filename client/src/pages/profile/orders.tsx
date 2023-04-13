import { Profile } from '@/templates/Profile'

import { ordersListMock } from '@/components/OrdersList/mock'
import { OrdersList, OrdersListProps } from '@/components/OrdersList'

export default function CardsPage({ items }: OrdersListProps) {
  return (
    <Profile>
      <OrdersList items={items} />
    </Profile>
  )
}

export function getServerSideProps() {
  return {
    props: {
      items: ordersListMock.items
    }
  }
}
