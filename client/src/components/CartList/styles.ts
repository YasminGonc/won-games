import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const Footer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightGray};
    color: ${theme.colors.black};
    font-weight: ${theme.font.bold};
    padding: ${theme.spacings.xsmall} 2rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`

export const Total = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
`
