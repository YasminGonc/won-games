import * as S from './styles'
import { HeartStraight, ShoppingCart } from 'phosphor-react'
import Button from '../Button'
import { Heading } from '../Heading'
import { Ribbon } from '../Ribbon'

export type GameInfoProps = {
  title: string
  description: string
  price: string
}

export function GameInfo({ title, description, price }: GameInfoProps) {
  return (
    <S.Wrapper>
      <Heading color="black" bottomBorder>
        {title}
      </Heading>

      <Ribbon color="secondary">{`$${price}`}</Ribbon>

      <S.Description>{description}</S.Description>

      <S.ButtonWrapper>
        <Button icon={<ShoppingCart />} size="large">
          Add to cart
        </Button>
        <Button minimal size="large" icon={<HeartStraight />}>
          Wishlist
        </Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  )
}
