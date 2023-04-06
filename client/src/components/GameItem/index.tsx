import { DownloadSimple } from 'phosphor-react'
import * as S from './styles'

export type PaymentInfoProps = {
  number: string
  flag: string
  img: string
  purchaseDate: string
}

export type GameItemProps = {
  img: string
  title: string
  price: string
  downloadLink?: string
  paymentInfo?: PaymentInfoProps
}

export function GameItem({
  img,
  price,
  title,
  downloadLink,
  paymentInfo
}: GameItemProps) {
  return (
    <S.Wrapper>
      <S.GameContent>
        <S.ImageBox>
          <img src={img} alt={title} />
        </S.ImageBox>

        <S.Content>
          <S.Title>
            {title}
            {!!downloadLink && (
              <S.DownloadLink
                href={downloadLink}
                target="_blank"
                aria-label={`Get ${title} here`}
              >
                <DownloadSimple size={22} weight="bold" />
              </S.DownloadLink>
            )}
          </S.Title>
          <S.Price>{price}</S.Price>
        </S.Content>
      </S.GameContent>

      {!!paymentInfo && (
        <S.PaymentContent>
          <div>{paymentInfo.purchaseDate}</div>
          <S.CardInfo>
            <span>{paymentInfo.number}</span>
            <img src={paymentInfo.img} alt={paymentInfo.flag} />
          </S.CardInfo>
        </S.PaymentContent>
      )}
    </S.Wrapper>
  )
}
