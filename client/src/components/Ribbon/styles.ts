import { darken } from 'polished'
import styled, { css, DefaultTheme } from 'styled-components'
import { RibbonColors, RibbonProps } from '.'

const wrapperModifier = {
  color: (theme: DefaultTheme, color: RibbonColors) => css`
    background-color: ${theme.colors[color]};

    &::before {
      border-left-color: ${darken(0.2, theme.colors[color])};
      border-top-color: ${darken(0.2, theme.colors[color])};
    }
  `,
  normal: (theme: DefaultTheme) => css`
    height: 3.6rem;
    padding: 0 ${theme.spacings.small};
    right: -2rem;

    font-size: ${theme.font.sizes.small};

    &::before {
      top: 3.6rem;
      border-top-width: 1rem;
      border-right-width: 2rem;
    }
  `,
  small: (theme: DefaultTheme) => css`
    height: 2.6rem;
    padding: 0 ${theme.spacings.xsmall};
    right: -1.5rem;

    font-size: ${theme.font.sizes.xsmall};

    &::before {
      top: 2.6rem;
      border-top-width: 0.7rem;
      border-right-width: 1.5rem;
    }
  `,
  large: (theme: DefaultTheme) => css`
    height: 4rem;
    padding: 0 ${theme.spacings.medium};
    right: -2.5rem;

    font-size: ${theme.font.sizes.large};

    &::before {
      top: 4rem;
      border-top-width: 1.3rem;
      border-right-width: 2.5rem;
    }
  `
}

export const Wrapper = styled.div<RibbonProps>`
  ${({ theme, color, size }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: ${theme.spacings.xsmall};

    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};

    &::before {
      content: '';
      position: absolute;
      right: 0;
      border-style: solid;
      border-left-width: 0rem;
      border-right-color: transparent;
      border-bottom-color: transparent;
      border-bottom-width: 1rem;
    }

    ${!!size && wrapperModifier[size](theme)};
    ${!!color && wrapperModifier.color(theme, color)};
  `}
`
