import * as S from './styles'

import { Heading } from '../../components/Heading'
import { Container } from '../../components/Container'
import { Divider } from '../../components/Divider'
import { ShowCase } from '../../components/ShowCase'
import { GameCardProps } from '../../components/GameCard'
import { HighlightProps } from '../../components/Highlight'
import { CartList, CartListProps } from '../../components/CartList'
import {
  PaymentOption,
  PaymentOptionProps
} from '../../components/PaymentOptions'
import { Empty } from '../../components/Empty'

import { Base } from '../Base'

export type CartProps = {
  recomendedGames: GameCardProps[]
  recomendedHighlight: HighlightProps
} & CartListProps &
  PaymentOptionProps

export function Cart({
  recomendedGames,
  recomendedHighlight,
  items,
  total,
  cards
}: CartProps) {
  return (
    <Base>
      <Container>
        <Heading leftBorder lineColor="secondary">
          My cart
        </Heading>

        {items?.length ? (
          <S.Content>
            <CartList items={items} total={total} />

            <PaymentOption cards={cards} />
          </S.Content>
        ) : (
          <Empty
            title="Your cart is empty"
            description="Go back to the store and explore great games and offers"
            hasLink
          />
        )}

        <Divider />
      </Container>

      <ShowCase
        title="You may like these games"
        games={recomendedGames}
        highlight={recomendedHighlight}
      />
    </Base>
  )
}
