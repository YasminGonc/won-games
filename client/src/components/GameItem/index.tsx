import * as S from './styles'

export type GameItemProps = {
  img: string
  title: string
  price: string
}

export function GameItem({ img, price, title }: GameItemProps) {
  return (
    <S.Wrapper>
      <S.GameContent>
        <S.ImageBox>
          <img src={img} alt={title} />
        </S.ImageBox>

        <S.Content>
          <S.Title>{title}</S.Title>
          <S.Price>{price}</S.Price>
        </S.Content>
      </S.GameContent>
    </S.Wrapper>
  )
}
