import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as HeadingStyles from '../../components/Heading/styles'
import * as MenuStyles from '../../components/Menu/styles'
import * as GameCardSliderStyles from '../../components/GameCardSlider/styles'

export const Wrapper = styled.section`
  ${MenuStyles.MenuFull} {
    margin: 0 -1.6rem;
  }
`

export const SectionBanner = styled.section`
  ${({ theme }) => css`
    margin: ${theme.spacings.large} calc(-${theme.grid.gutter} / 2);

    ${media.greaterThan('medium')`
        margin: ${theme.spacings.large} 0;
        position: relative;
        z-index: ${theme.layers.base};
    `}
  `}
`

export const SectionNews = styled.div`
  ${({ theme }) => css`
    margin-bottom: calc(${theme.spacings.xxlarge} * 2);

    ${GameCardSliderStyles.Wrapper} {
      .slick-prev,
      .slick-next {
        color: ${theme.colors.black};
      }
    }

    ${media.greaterThan('large')`
        margin-top: -13rem;
    `}

    ${media.greaterThan('medium')`
        margin-bottom: 0;
        padding-top: 14rem;
        padding-bottom: 10rem;
        background-color: ${theme.colors.white};
        clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 85%);

        ${HeadingStyles.Wrapper} {
            color: ${theme.colors.black};
        }
    `}
  `}
`

export const SectionUpcoming = styled.div``
