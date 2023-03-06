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
        <BannerSlider items={banners} />
      </Container>

      <Container>
        <Heading leftBorder lineColor="secondary" color="black">
          News
        </Heading>

        <GameCardSlider items={newGames} color="black" />
      </Container>

      <Container>
        <Heading leftBorder lineColor="secondary">
          Most Popular
        </Heading>

        <Highlight {...mostPopularHighlight} />

        <GameCardSlider items={mostPopularGames} />
      </Container>

      <Container>
        <Heading leftBorder lineColor="secondary">
          Upcoming
        </Heading>

        <GameCardSlider items={upcomingGames} />

        <Highlight {...upcomingHighlight} />

        <GameCardSlider items={upcomingMoreGames} />
      </Container>

      <Container>
        <Heading leftBorder lineColor="secondary">
          Free games
        </Heading>

        <Highlight {...freeHighlight} />

        <GameCardSlider items={freeGames} />
      </Container>

      <Container>
        <Footer />
      </Container>
    </S.Wrapper>
  )
}
