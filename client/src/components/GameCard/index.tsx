import Link from 'next/link'
import { HeartStraight, ShoppingCart } from 'phosphor-react'
import Button from '../Button'
import { Ribbon, RibbonColors, RibbonSizes } from '../Ribbon'
import * as S from './styles'

export type GameCardProps = {
  slug: string
  title: string
  developer: string
  img: string
  price: string
  promotionPrice?: string
  favorite?: boolean
  onFav?: () => void
  hasRibbon?: boolean
  ribbon?: string
  ribbonSize?: RibbonSizes
  ribbonColor?: RibbonColors
}

export function GameCard({
  slug,
  title,
  developer,
  img,
  price,
  promotionPrice,
  favorite = false,
  hasRibbon = false,
  ribbon,
  ribbonSize = 'small',
  ribbonColor = 'primary',
  onFav
}: GameCardProps) {
  return (
    <S.Wrapper hasRibbon={hasRibbon}>
      {hasRibbon && (
        <Ribbon size={ribbonSize} color={ribbonColor}>
          {ribbon}
        </Ribbon>
      )}

      <Link href={`/game/${slug}`}>
        <S.ImageBox>
          <img src={img} alt={title} />
        </S.ImageBox>
      </Link>

      <S.Content>
        <Link href={`/game/${slug}`}>
          <S.Infos>
            <S.Title>{title}</S.Title>
            <S.Developer>{developer}</S.Developer>
          </S.Infos>
        </Link>

        <S.FavButton role="button" onClick={onFav}>
          <HeartStraight
            aria-label={favorite ? 'Remove from wishlist' : 'Add to wishlist'}
            weight={favorite ? 'fill' : 'regular'}
          />
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
