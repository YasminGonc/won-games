import * as S from './styles'
import { Check } from 'phosphor-react'

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
  return (
    <S.Wrapper>
      <S.CheckboxRoot id={labelFor}>
        <S.CheckboxIndicator>
          <Check weight="bold" size={16} />
        </S.CheckboxIndicator>
      </S.CheckboxRoot>

      <S.Label htmlFor={labelFor} labelColor={labelColor}>
        {label}
      </S.Label>
    </S.Wrapper>
  )
}
