import { gql } from '@apollo/client'
import { BannerFragment } from '../fragments/banner'
import { GameFragment } from '../fragments/game'
import { HighlightFragment } from '../fragments/highlight'

export const QUERY_HOME = gql`
  query QueryHome {
    banners {
      ...BannerFragment
    }

    newGames: games(
      where: { realease_date_lte: "2021-01-27" }
      sort: "realease_date:desc"
      limit: 8
    ) {
      ...GameFragment
    }

    upcomingGames: games(
      where: { realease_date_gt: "2023-05-20" }
      sort: "realease_date:asc"
      limit: 8
    ) {
      ...GameFragment
    }

    freeGames: games(
      where: { price: 0 }
      sort: "realease_date:desc"
      limit: 8
    ) {
      ...GameFragment
    }

    sections: home {
      newGames {
        title
        highlight {
          ...HighlightFragment
        }
      }
      popularGames {
        title
        highlight {
          ...HighlightFragment
        }
        games(limit: 8) {
          ...GameFragment
        }
      }
      upcomingGames {
        title
        highlight {
          ...HighlightFragment
        }
      }
      freeGames {
        title
        highlight {
          ...HighlightFragment
        }
      }
    }
  }

  ${BannerFragment}
  ${GameFragment}
  ${HighlightFragment}
`
