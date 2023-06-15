import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'

import { initializeApollo } from '@/utils/apollo'
import { QUERY_GAMES, QUERY_GAME_BY_SLUG } from '@/graphql/queries/games'
import { QUERY_UPCOMING } from '@/graphql/queries/upcoming'
import { QUERY_RECOMMENDED } from '@/graphql/queries/recommended'
import { QueryGames, QueryGamesBySlug, QueryUpcoming } from '@/@types/api'
import { QueryRecommended } from '@/@types/api'

import { Game, GameTemplateProps } from '@/templates/Game'
import { gamesMapper, highlightMapper } from '@/utils/mappers'

const apolloClient = initializeApollo()

export default function Index(props: GameTemplateProps) {
  const router = useRouter()

  // se a rota não tiver sido gerada pode mostrar um loading
  if (router.isFallback) return null

  return <Game {...props} />
}

export async function getStaticPaths() {
  const { data } = await apolloClient.query<QueryGames>({
    query: QUERY_GAMES,
    variables: { limit: 9 }
  })

  const paths = data.games.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // get game data
  const { data } = await apolloClient.query<QueryGamesBySlug>({
    query: QUERY_GAME_BY_SLUG,
    variables: { slug: `${params?.slug}` }
  })

  if (!data.games.length) {
    return { notFound: true }
  }

  const game = data.games[0]

  // get recommended games
  const { data: recommended } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })

  //get upcoming games and highlight
  const { data: upcoming } = await apolloClient.query<QueryUpcoming>({
    query: QUERY_UPCOMING
  })

  return {
    props: {
      revalidate: 60,
      cover: `http://localhost:1337${game.cover?.src}`,
      gameInfo: {
        title: game.name,
        price: game.price,
        description: game.short_description
      },
      gallery: game.gallery.map((image) => ({
        src: `http://localhost:1337${image.src}`,
        label: image.label
      })),
      description: game.description,
      details: {
        developer: game.developers[0].name,
        publisher: game.publisher.name,
        platforms: game.platforms.map((platform) =>
          platform.name.toLowerCase()
        ),
        realeaseDate: game.realease_date,
        rating: game.rating,
        genres: game.categories.map((category) => category.name)
      },
      upcomingTitle: upcoming.showcase.upcomingGames.title,
      upcomingGames: gamesMapper(upcoming.upcomingGames),
      upcomingHighlight: highlightMapper(
        upcoming.showcase.upcomingGames.highlight
      ),
      recommendedTitle: recommended.recommended.section.title,
      recommendedGames: gamesMapper(recommended.recommended.section.games)
    }
  }
}
