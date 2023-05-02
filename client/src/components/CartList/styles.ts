import styled, { css } from 'styled-components'
import * as EmptyStyles from '../Empty/styles'

type WrapperProps = {
  isEmpty: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, isEmpty }) => css`
    background: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    align-self: start;

    ${isEmpty &&
    css`
      ${EmptyStyles.Wrapper} {
        padding-bottom: ${theme.spacings.medium};
      }

      ${EmptyStyles.Image} {
        max-width: 20rem;
      }

      ${EmptyStyles.Title} {
        font-size: ${theme.font.sizes.large};
      }

      ${EmptyStyles.Description} {
        color: ${theme.colors.black};
        font-size: ${theme.font.sizes.medium};
      }
    `}
  `}
`

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
