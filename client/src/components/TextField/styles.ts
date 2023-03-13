import styled, { css, DefaultTheme } from 'styled-components'
import { TextFieldProps } from '.'

const WrapeprModifier = {
  disabled: (theme: DefaultTheme) => css`
    ${Label}, ${Input} {
      cursor: not-allowed;
      color: ${theme.colors.gray};
    }
  `,
  error: (theme: DefaultTheme) => css`
    ${Label} {
      color: ${theme.colors.red};
    }

    ${InputWrapper} {
      box-shadow: 0 0 0.5rem ${theme.colors.red};
    }
  `
}

export const Wrapper = styled.div<
  Pick<TextFieldProps, 'disabled'> & { error?: boolean }
>`
  ${({ theme, disabled, error }) => css`
    display: inline-flex;
    flex-direction: column;
    width: 100%;

    ${disabled && WrapeprModifier.disabled(theme)};
    ${!!error && WrapeprModifier.error(theme)}
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    cursor: pointer;
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`

const InputWrapperModifier = {
  left: () => css`
    order: 0;
  `,
  right: () => css`
    order: 1;
  `
}

export const InputWrapper = styled.div<Pick<TextFieldProps, 'iconPosition'>>`
  ${({ theme, iconPosition }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xxsmall};

    background-color: ${theme.colors.lightGray};
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }

    svg {
      height: 24px;
      width: 24px;
      color: ${theme.colors.gray};
      ${!!iconPosition && InputWrapperModifier[iconPosition]};
    }
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};

    background-color: transparent;
    border: 0;
    outline: none;
    width: 100%;

    &::placeholder {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.small};
    }
  `}
`

export const Error = styled.span`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxsmall};

    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.xsmall};
  `}
`
