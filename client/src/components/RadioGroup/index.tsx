import * as S from './styles'

export type RadioGroupProps = {
  items: string[]
  labelColor?: 'white' | 'black'
}

export function RadioGroup({ items, labelColor = 'white' }: RadioGroupProps) {
  return (
    <S.RadioGroupRoot>
      {items.map((item) => {
        return (
          <S.ItemWrapper key={item}>
            <S.RadioGroupItem value={item} id={item}>
              <S.RadioGroupIndicator />
            </S.RadioGroupItem>

            <S.Label htmlFor={item} labelColor={labelColor}>
              {item}
            </S.Label>
          </S.ItemWrapper>
        )
      })}
    </S.RadioGroupRoot>
  )
}
