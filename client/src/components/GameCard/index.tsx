import { HeartStraight, ShoppingCart } from 'phosphor-react'
import { Button } from '../Button'
import * as S from './styles'

export type GameCardProps = {
  title: string
  developer: string
  img: string
  price: string
  promotionPrice?: string
}

export function GameCard({
  title,
  developer,
  img,
  price,
  promotionPrice
}: GameCardProps) {
  return (
    <S.Wrapper>
      <S.ImageBox>
        <img src={img} alt={title} />
      </S.ImageBox>

      <S.Content>
        <S.Infos>
          <S.Title>{title}</S.Title>
          <S.Developer>{developer}</S.Developer>
        </S.Infos>

        <S.FavButton role="button">
          <HeartStraight aria-label="Add to wishlist" />
        </S.FavButton>

        <S.PriceBox>
          {!!promotionPrice && <S.Price isPromotional>{price}</S.Price>}
          <S.Price>{promotionPrice || price}</S.Price>
          <Button icon={<ShoppingCart />} size="small" />
        </S.PriceBox>
      </S.Content>
    </S.Wrapper>
  )
}
