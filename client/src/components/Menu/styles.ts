import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.spacings.small} 0;
    position: relative;
    z-index: ${theme.layers.menu};
  `}
`
export const LogoWrapper = styled.div`
  ${media.lessThan('medium')`
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.white};
  `}
`

export const MenuGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: flex-end;
    gap: ${theme.spacings.xsmall};
    z-index: ${theme.layers.menu} + 1;

    > div {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`
type MenuFullProps = {
  isOpen: boolean
}

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background: ${theme.colors.white};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    overflow: hidden;
    transition: opacity 0.3s ease-in-out;
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};
    z-index: ${theme.layers.alwaysOnTop};

    > svg {
      cursor: pointer;
      position: absolute;
      top: 0;
      right: 0;
      margin: ${theme.spacings.xsmall};
    }

    ${MenuLink} {
      color: ${theme.colors.black};
      font-size: ${theme.font.sizes.xlarge};
      font-weight: ${theme.font.bold};
      margin-bottom: ${theme.spacings.small};
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }

    ${MenuNav} {
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    ${RegisterBox} {
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }
  `}
`

export const MenuNav = styled.div`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
        margin-left: ${theme.spacings.small};
    `}
  `}
`

export const MenuLink = styled.a`
  ${({ theme }) => css`
    position: relative;
    margin: 0.3rem ${theme.spacings.small} 0;

    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    text-decoration: none;
    text-align: center;

    &:hover {
      &::after {
        content: '';
        position: absolute;
        display: block;
        height: 0.3rem;
        background-color: ${theme.colors.primary};
        animation: hoverAnimation 0.2s forwards;
      }

      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
  `}
`

export const RegisterBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 0 ${theme.spacings.xlarge} ${theme.spacings.xlarge};

    > span {
      display: block;
      margin: ${theme.spacings.xxsmall};
      font-size: ${theme.font.sizes.xsmall};
    }
  `}
`

export const CreateAccount = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    color: ${theme.colors.primary};
    border-bottom: 0.2rem solid ${theme.colors.primary};
  `}
`
