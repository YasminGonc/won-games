import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import { HeadingProps } from '.'

const wrapperModifiers = {
  leftBorder: (theme: DefaultTheme) => css`
    border-left: 0.7rem solid ${theme.colors.secondary};
    padding-left: ${theme.spacings.xxsmall};
  `,
  bottomBorder: (theme: DefaultTheme) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -1rem;
      width: 5rem;
      border-bottom: 0.5rem solid ${theme.colors.primary};
    }
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, leftBorder, bottomBorder }) => css`
    color: ${theme.colors[color!]};
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};

    ${leftBorder && wrapperModifiers.leftBorder(theme)}
    ${bottomBorder && wrapperModifiers.bottomBorder(theme)}

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};  
    `}
  `}
`
