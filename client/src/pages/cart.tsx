import { Cart, CartProps } from '@/templates/Cart'

import GameCardSliderMock from '../components/GameCardSlider/mock'
import HighlighMock from '../components/Highlight/mock'
import { cartListMock } from '../components/CartList/mock'
import { paymentOptionsMock } from '../components/PaymentOptions/mock'

export default function CartPage(props: CartProps) {
  return <Cart {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      recomendedGames: GameCardSliderMock,
      recomendedHighlight: HighlighMock,
      items: cartListMock.items,
      total: cartListMock.total,
      cards: paymentOptionsMock
    }
  }
}
