import * as S from './styles'
import { Check } from 'phosphor-react'
import { useState } from 'react'

export type CheckboxProps = {
  label: string
  labelFor?: string
  labelColor?: 'black' | 'white'
}

export function Checkbox({
  label,
  labelFor = '',
  labelColor = 'white'
}: CheckboxProps) {
  const [checked, setChecked] = useState(false)

  function handleOnCheckedChange() {
    if (checked) {
      setChecked(false)
    } else {
      setChecked(true)
    }
  }

  return (
    <S.Wrapper>
      <S.CheckboxRoot
        id={labelFor}
        onCheckedChange={handleOnCheckedChange}
        checked={checked}
      >
        <S.CheckboxIndicator>
          <Check weight="bold" size={12} />
        </S.CheckboxIndicator>
      </S.CheckboxRoot>

      <S.Label htmlFor={labelFor} labelColor={labelColor}>
        {label}
      </S.Label>
    </S.Wrapper>
  )
}
