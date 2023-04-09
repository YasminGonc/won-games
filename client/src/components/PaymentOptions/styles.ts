import styled, { css } from 'styled-components'

import * as RadioGroup from '@radix-ui/react-radio-group'

export const Wrapper = styled.div``

export const Body = styled.div``

export const CardItem = styled.div``

// Cards List
export const RadioGroupRoot = styled(RadioGroup.Root)``

export const ItemWrapper = styled.div``

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

export const CardInfo = styled.div``

export const AddCard = styled.div``

export const Footer = styled.div``
