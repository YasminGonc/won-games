import { Cart, CartProps } from '@/templates/Cart'

import { cartListMock } from '../components/CartList/mock'
import { paymentOptionsMock } from '../components/PaymentOptions/mock'

import { initializeApollo } from '@/utils/apollo'
import { QueryRecommended } from '@/@types/api'
import { QUERY_RECOMMENDED } from '@/graphql/queries/recommended'
import { gamesMapper, highlightMapper } from '@/utils/mappers'

export default function CartPage(props: CartProps) {
  return <Cart {...props} />
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })

  return {
    props: {
      recomendedGames: gamesMapper(data.recommended.section.games),
      recomendedHighlight: highlightMapper(data.recommended.section.highlight),
      items: cartListMock.items,
      total: cartListMock.total,
      cards: paymentOptionsMock
    }
  }
}
