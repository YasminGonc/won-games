import { ChangeEvent, InputHTMLAttributes, ReactNode, useState } from 'react'
import * as S from './styles'

export type TextFieldProps = {
  placeholder: string
  label?: string
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  disabled?: boolean
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

export function TextField({
  label,
  placeholder,
  icon,
  iconPosition = 'left',
  disabled = false,
  error,
  ...props
}: TextFieldProps) {
  const [value, setValue] = useState('')

  function handleOnChangeValue(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.currentTarget.value)
  }

  return (
    <S.Wrapper disabled={disabled} error={!!error}>
      {!!label && <S.Label htmlFor={placeholder}>{label}</S.Label>}

      <S.InputWrapper iconPosition={iconPosition}>
        {icon}
        <S.Input
          type="text"
          id={placeholder}
          placeholder={placeholder}
          aria-label={`${placeholder} input`}
          onChange={handleOnChangeValue}
          value={value}
          disabled={disabled}
          {...props}
        />
      </S.InputWrapper>

      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}
