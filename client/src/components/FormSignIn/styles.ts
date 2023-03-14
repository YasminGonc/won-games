import styled, { css } from 'styled-components'

import * as TextFieldStyles from '../TextField/styles'
import * as ButtonStyles from '../Button/styles'
import { darken, lighten } from 'polished'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${TextFieldStyles.Wrapper} {
      margin: ${theme.spacings.xxsmall} 0;
    }

    ${ButtonStyles.Wrapper} {
      margin: ${theme.spacings.medium} auto ${theme.spacings.xsmall};
    }
  `}
`

export const ForgotPassword = styled.a`
  ${({ theme }) => css`
    display: block;
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.small};
    text-align: right;
    text-decoration: none;

    &:hover {
      color: ${lighten(0.2, theme.colors.black)};
    }
  `}
`

export const FormLink = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.small};
    text-align: center;

    a {
      color: ${theme.colors.secondary};
      text-decoration: none;
      border-bottom: 0ch.1rem solid ${theme.colors.secondary};
      transition: color, border, ${theme.transition.fast};
      margin-left: 0.2rem;

      &:hover {
        color: ${darken(0.1, theme.colors.secondary)};
        border-bottom: 0.1rem solid ${darken(0.1, theme.colors.secondary)};
      }
    }
  `}
`
