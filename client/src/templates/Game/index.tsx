import * as S from './styles'
import { Base } from '../Base'
import { GameInfo, GameInfoProps } from '@/components/GameInfo'

export type GameTemplateProps = {
  cover: string
  gameInfo: GameInfoProps
}

export function Game({ cover, gameInfo }: GameTemplateProps) {
  return (
    <Base>
      <S.Cover src={cover} role="image" aria-label="cover" />

      <S.Main>
        <S.SectionGameInfo>
          <GameInfo {...gameInfo} />
        </S.SectionGameInfo>
      </S.Main>
    </Base>
  )
}
