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
    cursor: pointer;
  `}
`

export const CheckboxRoot = styled(Checkbox.Root)`
  ${({ theme }) => css`
    display: flex;
    align-items: end;
    justify-content: center;

    background-color: transparent;
    border: 2px solid ${theme.colors.darkGray};
    border-radius: ${theme.border.radius};

    width: ${theme.spacings.small};
    height: ${theme.spacings.small};
    cursor: pointer;

    &[data-state='checked'] {
      background-color: ${theme.colors.primary};
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
