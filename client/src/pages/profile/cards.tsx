import { CardsList, CardsListProps } from '@/components/CardsList'
import { Profile } from '@/templates/Profile'

import { paymentOptionsMock } from '@/components/PaymentOptions/mock'

export default function CardsPage({ cards }: CardsListProps) {
  return (
    <Profile>
      <CardsList cards={cards} />
    </Profile>
  )
}

export function getServerSideProps() {
  return {
    props: {
      cards: paymentOptionsMock
    }
  }
}
