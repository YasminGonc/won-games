import * as S from './styles'
import { GameItemProps } from '../GameItem'
import { Heading } from '../Heading'
import { GameItem } from '../GameItem'
import { Empty } from '../Empty'

export type OrdersListProps = {
  items?: GameItemProps[]
}

export function OrdersList({ items = [] }: OrdersListProps) {
  return (
    <S.Wrapper>
      <Heading bottomBorder lineColor="primary" color="black" size="small">
        My orders
      </Heading>

      {items.length ? (
        items.map((item) => <GameItem key={item.downloadLink} {...item} />)
      ) : (
        <Empty
          title="You have no orders yet"
          description="Go back to the store and explore great games and offers"
          hasLink
        />
      )}
    </S.Wrapper>
  )
}
