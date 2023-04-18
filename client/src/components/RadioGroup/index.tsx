import * as S from './styles'

export type RadioGroupProps = {
  items: string[]
  labelColor?: 'white' | 'black'
  defaultValue?: string
  name?: string
  onChange?: (value: string) => void
}

export function RadioGroup({
  items,
  labelColor = 'white',
  defaultValue,
  name,
  onChange
}: RadioGroupProps) {
  function handleValueChange(value: string) {
    !!onChange && onChange(value)
  }

  return (
    <S.RadioGroupRoot
      name={name}
      defaultValue={defaultValue}
      onValueChange={(value) => handleValueChange(value)}
    >
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
