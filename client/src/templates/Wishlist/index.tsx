import { Container } from '../../components/Container'
import { Grid } from '../../components/Grid'
import { Divider } from '../../components/Divider'

import { Heading } from '../../components/Heading'
import { Base } from '../Base'
import { GameCard, GameCardProps } from '../../components/GameCard'
import { HighlightProps } from '../../components/Highlight'
import { ShowCase } from '../../components/ShowCase'
import { Empty } from '../../components/Empty'

export type WishlistTemplateProps = {
  games?: GameCardProps[]
  recomendedGames: GameCardProps[]
  recomendedHighlight: HighlightProps
}

export function Wishlist({
  games,
  recomendedGames,
  recomendedHighlight
}: WishlistTemplateProps) {
  return (
    <Base>
      <Container>
        <Heading leftBorder lineColor="secondary">
          Wishlist
        </Heading>

        {games && games.length >= 1 ? (
          <Grid>
            {games?.map((game, index) => (
              <GameCard key={`wishlist-${index}`} {...game} />
            ))}
          </Grid>
        ) : (
          <Empty
            title="Your wishlist is empty"
            description="Games added to your wishlist will appear here"
            hasLink
          />
        )}

        <Divider />
      </Container>

      <ShowCase
        title="You may like these games"
        games={recomendedGames}
        highlight={recomendedHighlight}
      />
    </Base>
  )
}
