import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import * as MenuStyles from '../../components/Menu/styles'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;

  ${MenuStyles.MenuFull} {
    margin: 0 -1.6rem;
  }
`

export const Content = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xlarge};
    flex: 1 0 auto;
  `}
`

export const SectionFooter = styled.div`
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
