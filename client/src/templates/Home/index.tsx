import { BannerProps } from '../../components/Banner'
import { GameCardProps } from '../../components/GameCard'
import { HighlightProps } from '../../components/Highlight'

import { Base } from '../Base'
import { BannerSlider } from '../../components/BannerSlider'
import { Container } from '../../components/Container'
import { ShowCase } from '../../components/ShowCase'

import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  newGamesTitle: string
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  mostPopularGamesTitle: string
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  upcomingGamesTitle: string
  freeGames: GameCardProps[]
  freeHighlight: HighlightProps
  freeGamesTitle: string
}

export function Home({
  banners,
  newGames,
  newGamesTitle,
  mostPopularHighlight,
  mostPopularGames,
  mostPopularGamesTitle,
  upcomingGames,
  upcomingHighlight,
  upcomingGamesTitle,
  freeGames,
  freeHighlight,
  freeGamesTitle
}: HomeTemplateProps) {
  return (
    <S.Wrapper>
      <Base>
        <Container>
          <S.SectionBanner>
            <BannerSlider items={banners} />
          </S.SectionBanner>
        </Container>

        <S.SectionNews>
          <ShowCase title={newGamesTitle} games={newGames} />
        </S.SectionNews>

        <ShowCase
          title={mostPopularGamesTitle}
          highlight={mostPopularHighlight}
          games={mostPopularGames}
        />

        <ShowCase
          title={upcomingGamesTitle}
          games={upcomingGames}
          highlight={upcomingHighlight}
        />

        <ShowCase
          title={freeGamesTitle}
          highlight={freeHighlight}
          games={freeGames}
        />
      </Base>
    </S.Wrapper>
  )
}
