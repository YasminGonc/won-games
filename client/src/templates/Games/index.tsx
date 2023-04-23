import * as S from './styles'
import { Base } from '../Base'
import { GameCard, GameCardProps } from '../../components/GameCard'
import { ItemProps, ExploreSidebar } from '../../components/ExploreSidebar'
import { Grid } from '../../components/Grid'
import { CaretDown } from 'phosphor-react'

export type GamesTemplateProps = {
  games?: GameCardProps[]
  filterItems: ItemProps[]
}

export function GamesTemplate({ games, filterItems }: GamesTemplateProps) {
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

        <section>
          <Grid>
            {games?.map((item) => (
              <GameCard key={item.title} {...item} />
            ))}
          </Grid>

          <S.ShowMore role="button" onClick={handleShowMore}>
            <p>Show More</p>
            <CaretDown size={35} />
          </S.ShowMore>
        </section>
      </S.Main>
    </Base>
  )
}
