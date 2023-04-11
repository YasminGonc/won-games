import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.small};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xxsmall};
  `}
`

export const Card = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightGray};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xsmall};
  `}
`
