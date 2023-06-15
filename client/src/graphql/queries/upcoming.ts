import { gql } from '@apollo/client'
import { GameFragment } from '../fragments/game'
import { HighlightFragment } from '../fragments/highlight'

export const QUERY_UPCOMING = gql`
  query QueryUpcoming {
    upcomingGames: games(
      where: { realease_date_gt: "2023-05-20" }
      sort: "realease_date:asc"
      limit: 8
    ) {
      ...GameFragment
    }

    showcase: home {
      upcomingGames {
        title
        highlight {
          ...HighlightFragment
        }
      }
    }
  }

  ${GameFragment}
  ${HighlightFragment}
`
