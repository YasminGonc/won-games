import styled, { css } from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { RadioGroupProps } from '.'

export const ItemWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xsmall};
  `}
`

export const Label = styled.label<Pick<RadioGroupProps, 'labelColor'>>`
  ${({ theme, labelColor }) => css`
    color: ${theme.colors[labelColor!]};
    line-height: 1;
    cursor: pointer;
  `}
`

export const RadioGroupRoot = styled(RadioGroup.Root)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xxsmall};
  `}
`

export const RadioGroupItem = styled(RadioGroup.Item)`
  ${({ theme }) => css`
    background-color: transparent;
    border-radius: 100%;
    border: 2px solid ${theme.colors.darkGray};

    width: 21px;
    height: 21px;
    cursor: pointer;

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.darkGray};
    }

    &[data-state='checked'] {
      border-color: ${theme.colors.primary};
    }
  `}
`

export const RadioGroupIndicator = styled(RadioGroup.Indicator)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
    position: relative;

    &::after {
      content: '';
      display: block;
      width: 11px;
      height: 11px;
      border-radius: 50%;
      background-color: ${theme.colors.primary};
    }
  `}
`
