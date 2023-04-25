import { ReactNode, useState } from 'react'
import * as S from './styles'

export type DropdownProps = {
  title: ReactNode
  children: ReactNode
}

export function Dropdown({ title, children }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    if (isOpen) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Title onClick={handleToggle} aria-label="toggle dropdown">
        {title}
      </S.Title>

      <S.Content aria-hidden={!isOpen}>{children}</S.Content>
    </S.Wrapper>
  )
}
