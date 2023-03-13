import * as S from './styles'

export type LineColor = 'primary' | 'secondary'

export type HeadingProps = {
  children: string
  color?: 'white' | 'black'
  size?: 'small' | 'medium' | 'huge'
  leftBorder?: boolean
  bottomBorder?: boolean
  lineColor?: LineColor
}

export function Heading({
  children,
  color = 'white',
  size = 'medium',
  leftBorder,
  bottomBorder,
  lineColor = 'primary'
}: HeadingProps) {
  return (
    <S.Wrapper
      color={color}
      size={size}
      leftBorder={leftBorder}
      bottomBorder={bottomBorder}
      lineColor={lineColor}
    >
      {children}
    </S.Wrapper>
  )
}
