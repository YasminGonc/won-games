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
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  upcomingMoreGames: GameCardProps[]
  freeGames: GameCardProps[]
  freeHighlight: HighlightProps
}

export function Home({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcomingGames,
  upcomingHighlight,
  upcomingMoreGames,
  freeGames,
  freeHighlight
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
          <ShowCase title="News" games={newGames} />
        </S.SectionNews>

        <ShowCase
          title="Most Popular"
          highlight={mostPopularHighlight}
          games={mostPopularGames}
        />

        <S.SectionUpcoming>
          <ShowCase title="Upcoming" games={upcomingGames} />
          <ShowCase highlight={upcomingHighlight} games={upcomingMoreGames} />
        </S.SectionUpcoming>

        <ShowCase
          title="Free games"
          highlight={freeHighlight}
          games={freeGames}
        />
      </Base>
    </S.Wrapper>
  )
}
