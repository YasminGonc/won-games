import { HeartStraight, ShoppingCart } from 'phosphor-react'
import formatPrice from '../../utils/format-price'

import Button from '../Button'
import { Heading } from '../Heading'
import { Ribbon } from '../Ribbon'
import * as S from './styles'

export type GameInfoProps = {
  title: string
  description: string
  price: number
}

export function GameInfo({ title, description, price }: GameInfoProps) {
  return (
    <S.Wrapper>
      <Heading color="black" bottomBorder>
        {title}
      </Heading>

      <Ribbon color="secondary">{formatPrice(price)}</Ribbon>

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
