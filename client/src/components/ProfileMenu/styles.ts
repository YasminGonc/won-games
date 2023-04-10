import styled, { DefaultTheme, css } from 'styled-components'
import media from 'styled-media-query'

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    border-bottom: 0.1rem solid ${theme.colors.lightGray};

    ${media.greaterThan('medium')`
        flex-direction: column;
        border: 0;

        a:not(:last-child) {
            border-bottom: 0.1rem solid ${theme.colors.lightGray};
        }
    `}
  `}
`

type LinkProps = {
  isActive?: boolean
}

const linkModifiers = {
  default: (theme: DefaultTheme) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.black};
  `,
  active: (theme: DefaultTheme) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
  `
}

export const Link = styled.a<LinkProps>`
  ${({ theme, isActive }) => css`
    font-size: ${theme.font.sizes.large};
    text-decoration: none;
    padding: ${theme.spacings.xsmall};
    transition: background, color, ${theme.transition.default};

    display: flex;
    align-items: center;
    gap: ${theme.spacings.xsmall};

    ${!isActive && linkModifiers.default(theme)}
    ${isActive && linkModifiers.active(theme)}

    &:hover {
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
    }

    ${media.lessThan('medium')`
        justify-content: center;
        flex: 1;

        > span {
            display: none;
        }
    `}
  `}
`
