import { Heading } from '../Heading'
import { PaymentCard } from '../PaymentOptions'
import * as S from './styles'

export type CardsListProps = {
  cards: PaymentCard[]
}

export function CardsList({ cards }: CardsListProps) {
  return (
    <S.Wrapper>
      <Heading bottomBorder color="black" size="small">
        My cards
      </Heading>

      <S.Content>
        {cards.map((card) => (
          <S.Card key={card.number}>
            <img src={card.img} alt={card.flag} />
            {card.number}
          </S.Card>
        ))}
      </S.Content>
    </S.Wrapper>
  )
}
