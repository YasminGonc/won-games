import styled, { css } from 'styled-components'
import * as HeadingStyles from '../../components/Heading/styles'
import * as HighlightStyles from '../../components/Highlight/styles'
import * as GameCardSliderStyles from '../../components/GameCardSlider/styles'
import * as MenuStyles from '../../components/Menu/styles'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  ${MenuStyles.MenuFull} {
    margin: 0 -1.6rem;
  }
`
const Sections = styled.section`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper},
    ${HighlightStyles.Wrapper},
    ${GameCardSliderStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
    }

    ${HighlightStyles.Wrapper} {
      ${media.lessThan('medium')`
            margin-right: calc(-${theme.grid.gutter} / 2);
            margin-left: calc(-${theme.grid.gutter} / 2);
      `}
    }

    ${GameCardSliderStyles.Wrapper} {
      ${media.lessThan('huge')`
            margin-right: calc(-${theme.grid.gutter} / 2);
      `}
    }

    margin-bottom: calc(${theme.spacings.large} * 2);
  `}
`
export const SectionBanner = styled(Sections)`
  ${({ theme }) => css`
    margin: ${theme.spacings.large} calc(-${theme.grid.gutter} / 2);

    ${media.greaterThan('medium')`
        margin: ${theme.spacings.large} 0;
        position: relative;
        z-index: ${theme.layers.base};
    `}
  `}
`

export const SectionNews = styled(Sections)`
  ${({ theme }) => css`
    margin-bottom: calc(${theme.spacings.xxlarge} * 2);

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

export const SectionMostPopular = styled(Sections)``

export const SectionUpcoming = styled(Sections)``

export const SectionFreeGames = styled(Sections)``

export const SectionFooter = styled(Sections)`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
    margin-bottom: 0;
    padding-bottom: ${theme.spacings.xsmall};
    padding-top: ${theme.spacings.xxlarge};
    background-color: ${theme.colors.white};
    clip-path: polygon(0 5%, 100% 0%, 100% 100%, 0 100%);

    ${media.greaterThan('medium')`
        padding-top: calc(${theme.spacings.xxlarge} * 2);
        clip-path: polygon(0 15%, 100% 0%, 100% 100%, 0 100%);
    `}
  `}
`
