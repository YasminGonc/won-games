import { GamesTemplate, GamesTemplateProps } from '@/templates/Games'

import { exploreSideBarMock } from '../components/ExploreSidebar/mock'
import { initializeApollo } from '@/utils/apollo'
import { QUERY_GAMES } from '@/graphql/queries/games'
import { QueryGames } from '@/@types/api'

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query<QueryGames>({
    query: QUERY_GAMES,
    variables: { limit: 15 }
  })

  return {
    props: {
      revalidate: 60,
      initialApolloState: apolloClient.cache.extract(),
      filterItems: exploreSideBarMock.items
    }
  }
}
