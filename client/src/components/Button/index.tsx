import { ReactNode } from 'react'
import * as S from './styles'

export type ButtonProps = {
  children: ReactNode
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  icon?: ReactNode
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void
}

export function Button({
  children,
  size = 'medium',
  fullWidth = false,
  icon,
  ...props
}: ButtonProps) {
  return (
    <S.Wrapper size={size} fullWidth={fullWidth} {...props}>
      {icon}
      {children}
    </S.Wrapper>
  )
}
