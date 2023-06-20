import { useQuery } from '@apollo/client'
import { QueryGames } from '@/@types/api'
import { QUERY_GAMES } from '@/graphql/queries/games'

import * as S from './styles'

import { Base } from '../Base'
import { GameCard, GameCardProps } from '../../components/GameCard'
import { ItemProps, ExploreSidebar } from '../../components/ExploreSidebar'
import { Grid } from '../../components/Grid'
import { Loading } from '../../components/Loading'

import { CaretDown } from 'phosphor-react'

export type GamesTemplateProps = {
  games?: GameCardProps[]
  filterItems: ItemProps[]
}

export function GamesTemplate({ filterItems }: GamesTemplateProps) {
  const { data, loading } = useQuery<QueryGames>(QUERY_GAMES, {
    variables: { limit: 15 }
  })

  const handleFilter = () => {
    return
  }

  const handleShowMore = () => {
    return
  }
  return (
    <Base>
      <S.Main>
        <ExploreSidebar items={filterItems} onFilter={handleFilter} />

        {loading ? (
          <Loading />
        ) : (
          <section>
            <Grid>
              {data?.games.map((game) => (
                <GameCard
                  key={game.slug}
                  title={game.name}
                  slug={game.slug}
                  developer={game.developers[0].name}
                  img={`http://localhost:1337${game.cover?.url}`}
                  price={game.price}
                />
              ))}
            </Grid>

            <S.ShowMore role="button" onClick={handleShowMore}>
              <p>Show More</p>
              <CaretDown size={35} />
            </S.ShowMore>
          </section>
        )}
      </S.Main>
    </Base>
  )
}
