import * as S from './styles'
import { Base } from '../Base'
import { Divider } from '../../components/Divider'

import { GameInfo, GameInfoProps } from '../../components/GameInfo'
import { Gallery, GalleryImageProps } from '../../components/Gallery'
import { TextContent } from '../../components/TextContent'
import { GameDetails, GameDetailsProps } from '../../components/GameDetails'
import { GameCardProps } from '../../components/GameCard'
import { HighlightProps } from '../../components/Highlight'
import { ShowCase } from '../../components/ShowCase'

export type GameTemplateProps = {
  cover: string
  gameInfo: GameInfoProps
  gallery?: GalleryImageProps[]
  description: string
  details: GameDetailsProps
  upcomingTitle?: string
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  recommendedTitle?: string
  recommendedGames: GameCardProps[]
}

export function Game({
  cover,
  gameInfo,
  gallery,
  description,
  details,
  upcomingTitle,
  upcomingGames,
  upcomingHighlight,
  recommendedTitle,
  recommendedGames
}: GameTemplateProps) {
  return (
    <Base>
      <S.Cover src={cover} role="image" aria-label="cover" />

      <S.Main>
        <S.SectionGameInfo>
          <GameInfo {...gameInfo} />
        </S.SectionGameInfo>

        <S.SectionGallery>
          {!!gallery && <Gallery items={gallery} />}
        </S.SectionGallery>

        <S.SectionDescription>
          <TextContent title="Description" content={description} />
        </S.SectionDescription>

        <S.SectionGameDetails>
          <GameDetails {...details} />
          <Divider />
        </S.SectionGameDetails>

        <ShowCase
          title={upcomingTitle || 'Upcoming'}
          games={upcomingGames}
          highlight={upcomingHighlight}
        />

        <ShowCase
          title={recommendedTitle || 'You may like this games'}
          games={recommendedGames}
        />
      </S.Main>
    </Base>
  )
}
