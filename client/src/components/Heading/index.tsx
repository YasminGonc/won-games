import * as S from './styles'

export type HeadingProps = {
  children: string
  color?: 'white' | 'black'
  leftBorder?: boolean
  bottomBorder?: boolean
}

export function Heading({
  children,
  color = 'white',
  leftBorder,
  bottomBorder
}: HeadingProps) {
  return (
    <S.Wrapper
      color={color}
      leftBorder={leftBorder}
      bottomBorder={bottomBorder}
    >
      {children}
    </S.Wrapper>
  )
}
