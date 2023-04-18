import * as S from './styles'
import { Check } from 'phosphor-react'
import { useState } from 'react'

export type CheckboxProps = {
  label: string
  labelFor?: string
  labelColor?: 'black' | 'white'
  isChecked?: boolean
  onCheck?: (status: boolean) => void
}

export function Checkbox({
  label,
  labelFor = '',
  labelColor = 'white',
  isChecked = false,
  onCheck
}: CheckboxProps) {
  const [checked, setChecked] = useState(isChecked)

  function onChange() {
    const status = !checked
    setChecked(status)

    !!onCheck && onCheck(status)
  }

  return (
    <S.Wrapper>
      <S.CheckboxRoot
        id={labelFor}
        onCheckedChange={onChange}
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
