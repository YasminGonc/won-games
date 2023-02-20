import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

const wrapperModifiers = {
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
  fullWidth: () => css`
    width: 100%;
  `
}

export const Wrapper = styled.button<ButtonProps>`
  ${({ theme, size, fullWidth }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.7rem;

    background: linear-gradient(
      178.59deg,
      #ff5f5f -14.51%,
      #f062c0 102.86%,
      #f23131 102.86%
    );
    border: none;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    cursor: pointer;

    color: ${theme.colors.white};

    ${!!size && wrapperModifiers[size](theme)};
    ${!!fullWidth && wrapperModifiers.fullWidth};

    &:hover {
      background: linear-gradient(180deg, #e35565 0%, #d958a6 100%);
    }
  `}
`
