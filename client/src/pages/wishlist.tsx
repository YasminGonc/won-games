import { Wishlist, WishlistTemplateProps } from '../templates/Wishlist'

import GameCardSliderMock from '../components/GameCardSlider/mock'

import { initializeApollo } from '@/utils/apollo'
import { QueryRecommended } from '@/@types/api'
import { QUERY_RECOMMENDED } from '@/graphql/queries/recommended'
import { gamesMapper, highlightMapper } from '@/utils/mappers'

export default function WishlistPage(props: WishlistTemplateProps) {
  return <Wishlist {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })

  return {
    props: {
      games: GameCardSliderMock,
      recommendedTitle: data.recommended.section?.title,
      recomendedGames: gamesMapper(data.recommended.section.games),
      recomendedHighlight: highlightMapper(data.recommended.section.highlight)
    }
  }
}
