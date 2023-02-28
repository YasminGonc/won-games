import styled, { css, DefaultTheme } from 'styled-components'

export const Wrapper = styled.article``

export const ImageBox = styled.div`
  height: 14rem;
  width: 100%;
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-size: 80rem 14rem;
  animation: placeholderShimmer 1s infinite forwards;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @keyframes placeholderShimmer {
    0% {
      background-position: -40rem 0;
    }
    100% {
      background-position: 40rem 0;
    }
  }
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    height: 100%;
    margin: ${theme.spacings.xsmall};
  `}
`

export const Infos = styled.div`
  max-width: calc(100% - 2.5rem);
`

export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    line-height: ${theme.font.sizes.medium};
  `}
`

export const Developer = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
  `}
`

export const FavButton = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  svg {
    width: 2rem;
    height: 2rem;
  }
`

export const PriceBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: ${theme.spacings.xxsmall};
    gap: ${theme.spacings.xxsmall};
  `}
`

type PriceProps = {
  isPromotional?: boolean
}

const priceModifiers = {
  promotional: (theme: DefaultTheme) => css`
    color: ${theme.colors.gray};
  `,
  default: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.secondary};
    border-radius: ${theme.border.radius};
    color: ${theme.colors.white};
    padding: 0 ${theme.spacings.xsmall};
  `
}

export const Price = styled.div<PriceProps>`
  ${({ theme, isPromotional }) => css`
    display: inline-flex;
    align-items: center;
    font-weight: ${theme.font.bold};
    height: 3rem;

    ${!isPromotional && priceModifiers.default(theme)}
    ${isPromotional && priceModifiers.promotional(theme)}
  `}
`
