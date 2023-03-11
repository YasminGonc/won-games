import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    cursor: pointer;
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`

export const InputWrapper = styled.div`
  ${({ theme }) => css`
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
