import { useState } from 'react'
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
  const [value, setValue] = useState('')

  function handleValueChange(value: string) {
    setValue(value)
  }

  return (
    <S.Wrapper>
      <S.Body>
        <Heading bottomBorder color="black" size="small">
          Payment
        </Heading>

        <S.CardItem>
          <S.RadioGroupRoot
            aria-label="Payment card options"
            value={value}
            onValueChange={handleValueChange}
          >
            {cards &&
              cards.map((card) => (
                <S.ItemWrapper key={card.number}>
                  <S.Label htmlFor={card.number}>
                    <img src={card.img} alt={card.flag} />
                    {card.number}
                  </S.Label>

                  <S.RadioGroupItem value={card.number} id={card.number}>
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
        <Button as="a" minimal fullWidth>
          Continue shopping
        </Button>

        <Button
          icon={<ShoppingCart />}
          onClick={handlePayment}
          fullWidth
          disabled={value.length >= 1 ? false : true}
        >
          Buy now
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}
