import { Home, HomeTemplateProps } from '../templates/Home'
import { initializeApollo } from '@/utils/apollo'

import { QUERY_HOME } from '@/graphql/queries/home'
import { QueryHome } from '@/@types/api'
import { bannerMapper, gamesMapper, highlightMapper } from '@/utils/mappers'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const {
    data: { banners, newGames, upcomingGames, freeGames, sections }
  } = await apolloClient.query<QueryHome>({ query: QUERY_HOME })

  return {
    props: {
      revalidate: 60,
      banners: bannerMapper(banners),
      newGames: gamesMapper(newGames),
      newGamesTitle: sections.newGames.title,
      mostPopularHighlight: highlightMapper(sections.popularGames.highlight),
      mostPopularGames: gamesMapper(sections.popularGames.games),
      mostPopularGamesTitle: sections.popularGames.title,
      upcomingGames: gamesMapper(upcomingGames),
      upcomingHighlight: highlightMapper(sections.upcomingGames.highlight),
      upcomingGamesTitle: sections.upcomingGames.title,
      freeGames: gamesMapper(freeGames),
      freeHighlight: highlightMapper(sections.freeGames.highlight),
      freeGamesTitle: sections.freeGames.title
    }
  }
}
