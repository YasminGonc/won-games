import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
  `}
`

export const Body = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall} ${theme.spacings.small} 0
      ${theme.spacings.small};
  `}
`

export const CardItem = styled.div``

export const RadioGroupRoot = styled(RadioGroup.Root)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};
  `}
`

export const ItemWrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightGray};
    padding: ${theme.spacings.xxsmall};

    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xsmall};
    cursor: pointer;
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

export const AddCard = styled(ItemWrapper)`
  ${({ theme }) => css`
    justify-content: left;
    margin-top: ${theme.spacings.xsmall};
    cursor: pointer;

    svg {
      margin-right: ${theme.spacings.xsmall};
    }
  `}
`

export const Footer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightGray};
    margin-top: ${theme.spacings.large};
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};

    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};

    ${media.greaterThan('medium')`
      flex-direction: row;
    `}
  `}
`
