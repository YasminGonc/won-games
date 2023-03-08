import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ElementType,
  ReactNode
} from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  icon?: ReactNode
  minimal?: boolean
  as?: ElementType
} & ButtonTypes

export function Button({
  children,
  size = 'medium',
  fullWidth = false,
  icon,
  minimal = false,
  ...props
}: ButtonProps) {
  return (
    <S.Wrapper size={size} fullWidth={fullWidth} minimal={minimal} {...props}>
      {icon}
      {children}
    </S.Wrapper>
  )
}
