import { BannerProps } from '../../components/Banner'
import { GameCardProps } from '../../components/GameCard'
import { HighlightProps, Highlight } from '../../components/Highlight'

import { BannerSlider } from '../../components/BannerSlider'
import { Container } from '../../components/Container'
import { Footer } from '../../components/Footer'
import { GameCardSlider } from '../../components/GameCardSlider'
import { Heading } from '../../components/Heading'
import { Menu } from '../../components/Menu'

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
      <Container>
        <Menu />
        <S.SectionBanner>
          <BannerSlider items={banners} />
        </S.SectionBanner>
      </Container>

      <S.SectionNews>
        <Container>
          <Heading leftBorder lineColor="secondary">
            News
          </Heading>

          <GameCardSlider items={newGames} color="black" />
        </Container>
      </S.SectionNews>

      <Container>
        <S.SectionMostPopular>
          <Heading leftBorder lineColor="secondary">
            Most Popular
          </Heading>

          <Highlight {...mostPopularHighlight} />

          <GameCardSlider items={mostPopularGames} />
        </S.SectionMostPopular>

        <S.SectionUpcoming>
          <Heading leftBorder lineColor="secondary">
            Upcoming
          </Heading>

          <GameCardSlider items={upcomingGames} />

          <Highlight {...upcomingHighlight} />

          <GameCardSlider items={upcomingMoreGames} />
        </S.SectionUpcoming>

        <S.SectionFreeGames>
          <Heading leftBorder lineColor="secondary">
            Free games
          </Heading>

          <Highlight {...freeHighlight} />

          <GameCardSlider items={freeGames} />
        </S.SectionFreeGames>
      </Container>

      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </S.Wrapper>
  )
}
