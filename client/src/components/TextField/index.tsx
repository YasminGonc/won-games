import { ChangeEvent, InputHTMLAttributes, ReactNode, useState } from 'react'
import * as S from './styles'

export type TextFieldProps = {
  placeholder: string
  label?: string
  icon?: ReactNode
} & InputHTMLAttributes<HTMLInputElement>

export function TextField({
  label,
  placeholder,
  icon,
  ...props
}: TextFieldProps) {
  const [value, setValue] = useState('')

  function handleOnChangeValue(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.currentTarget.value)
  }

  return (
    <S.Wrapper>
      {!!label && <S.Label htmlFor={placeholder}>{label}</S.Label>}

      <S.InputWrapper>
        {icon}
        <S.Input
          type="text"
          id={placeholder}
          placeholder={placeholder}
          aria-label={`${placeholder} input`}
          onChange={handleOnChangeValue}
          value={value}
          {...props}
        />
      </S.InputWrapper>
    </S.Wrapper>
  )
}
