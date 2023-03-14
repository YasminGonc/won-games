import Button from '../Button'
import { Ribbon, RibbonColors, RibbonSizes } from '../Ribbon'
import * as S from './styles'

export type BannerProps = {
  img: string
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
  hasRibbon?: boolean
  ribbon?: string
  ribbonSize?: RibbonSizes
  ribbonColor?: RibbonColors
}

export function Banner({
  img,
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  hasRibbon = false,
  ribbon,
  ribbonSize = 'normal',
  ribbonColor
}: BannerProps) {
  return (
    <S.Wrapper hasRibbon={hasRibbon}>
      <S.Img src={img} role="img" aria-label={title} />

      <S.Caption>
        <S.Title>{title}</S.Title>
        <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
        <Button as="a" href={buttonLink} size="large">
          {buttonLabel}
        </Button>
      </S.Caption>

      {hasRibbon && (
        <Ribbon size={ribbonSize} color={ribbonColor}>
          {ribbon}
        </Ribbon>
      )}
    </S.Wrapper>
  )
}
