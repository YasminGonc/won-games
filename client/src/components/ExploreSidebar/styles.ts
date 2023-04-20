import styled, { css } from 'styled-components'

type WrapperProps = {
  isOpen: boolean
}

export const Wrapper = styled.div``

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    cursor: pointer;
  `}
`

type ContentProps = {
  isOpen: boolean
}

export const Content = styled.div<ContentProps>`
  ${({ theme, isOpen }) => css`
    opacity: ${isOpen ? 1 : 0};

    > svg {
      cursor: pointer;
      color: ${theme.colors.white};
    }
  `}
`
