import * as S from './styles'

import { GameItem, GameItemProps } from '../GameItem'
import Button from '../Button'
import Link from 'next/link'

export type CartListProps = {
  items: GameItemProps[]
  total: string
  hasButton?: boolean
}

export function CartList({ items, total, hasButton = false }: CartListProps) {
  return (
    <S.Wrapper>
      {items.map((item) => (
        <GameItem key={item.title} {...item} />
      ))}

      <S.Footer>
        {!hasButton && <span>Total:</span>}
        <S.Total>{total}</S.Total>

        {hasButton && (
          <Link href="/cart" passHref legacyBehavior>
            <Button as="a">Buy it now</Button>
          </Link>
        )}
      </S.Footer>
    </S.Wrapper>
  )
}
