import * as S from './styles'
import { Plus, ShoppingCart } from 'phosphor-react'
import { Heading } from '../Heading'
import Button from '../Button'

export type PaymentCard = {
  number: string
  flag: string
  img: string
}

export type PaymentOptionProps = {
  cards?: PaymentCard[]
  handlePayment?: () => void
}

export function PaymentOption({ cards, handlePayment }: PaymentOptionProps) {
  return (
    <S.Wrapper>
      <S.Body>
        <Heading bottomBorder color="black" size="small">
          Payment
        </Heading>

        <S.CardItem>
          <S.RadioGroupRoot>
            {cards &&
              cards.map((card) => (
                <S.ItemWrapper key={card.number}>
                  <label htmlFor={card.number}>
                    <img src={card.img} alt={card.flag} />
                    {card.number}
                  </label>

                  <S.RadioGroupItem value={card.number}>
                    <S.RadioGroupIndicator />
                  </S.RadioGroupItem>
                </S.ItemWrapper>
              ))}
          </S.RadioGroupRoot>

          <S.AddCard role="button">
            <Plus size={14} /> Add a new credit card
          </S.AddCard>
        </S.CardItem>
      </S.Body>

      <S.Footer>
        <Button as="a" fullWidth minimal>
          Continue shopping
        </Button>

        <Button fullWidth icon={<ShoppingCart />} onClick={handlePayment}>
          Buy now
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}
