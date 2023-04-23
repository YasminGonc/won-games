import * as S from './styles'

import { ShoppingCart } from 'phosphor-react'

export type CartIconProps = {
  quantity?: number
}

export function CartIcon({ quantity = 0 }: CartIconProps) {
  return (
    <S.Wrapper>
      {quantity > 0 && <S.Badge aria-label="Cart items">{quantity}</S.Badge>}
      <ShoppingCart size={24} aria-label="Shopping cart" />
    </S.Wrapper>
  )
}
