import styled, { css } from 'styled-components'
import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckboxProps } from '.'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`
type LabelProps = Pick<CheckboxProps, 'labelColor'>

export const Label = styled.label<LabelProps>`
  ${({ theme, labelColor }) => css`
    color: ${theme.colors[labelColor!]};
    font-size: ${theme.font.sizes.small};
    padding-left: ${theme.spacings.xsmall};
    line-height: 1;
    cursor: pointer;
  `}
`

export const CheckboxRoot = styled(Checkbox.Root)`
  ${({ theme }) => css`
    display: flex;
    align-items: baseline;
    justify-content: center;

    background-color: transparent;
    border: 2px solid ${theme.colors.darkGray};
    border-radius: ${theme.border.radius};

    width: 1.8rem;
    height: 1.8rem;
    cursor: pointer;
    transition: background-color border ${theme.transition.fast};

    &[data-state='checked'] {
      background-color: ${theme.colors.primary};
      border-color: ${theme.colors.primary};
    }

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.darkGray};
    }
  `}
`

export const CheckboxIndicator = styled(Checkbox.Indicator)`
  ${({ theme }) => css`
    svg {
      color: ${theme.colors.white};
    }
  `}
`
