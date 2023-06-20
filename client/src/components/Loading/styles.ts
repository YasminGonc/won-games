import styled, { css } from 'styled-components'

export const Loader = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    text-align: center;
  `}
`
