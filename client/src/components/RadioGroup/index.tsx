import * as S from './styles'

export type RadioGroupProps = {
  items: string[]
  labelColor?: 'white' | 'black'
  defaultValue?: string
  name?: string
}

export function RadioGroup({
  items,
  labelColor = 'white',
  defaultValue,
  name
}: RadioGroupProps) {
  return (
    <S.RadioGroupRoot name={name} defaultValue={defaultValue}>
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
