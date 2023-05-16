import { useRouter } from 'next/router'
import { initializeApollo } from '@/utils/apollo'
import { QUERY_GAMES, QUERY_GAME_BY_SLUG } from '@/graphql/queries/games'
import { QueryGames, QueryGamesBySlug } from '@/@types/api'

import GameCardSliderMock from '@/components/GameCardSlider/mock'
import HighlighMock from '@/components/Highlight/mock'
import { Game, GameTemplateProps } from '@/templates/Game'
import { GetStaticProps } from 'next'
// import { Loading } from '@/components/Loading'

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
  const { data } = await apolloClient.query<QueryGamesBySlug>({
    query: QUERY_GAME_BY_SLUG,
    variables: { slug: `${params?.slug}` }
  })

  if (!data.games.length) {
    return { notFound: true }
  }

  const game = data.games[0]

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
      upcomingGames: GameCardSliderMock,
      upcomingHighlight: HighlighMock,
      recommendeGames: GameCardSliderMock
    }
  }
}
