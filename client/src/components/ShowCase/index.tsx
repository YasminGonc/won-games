import * as S from './styles'

import { HighlightProps, Highlight } from '../../components/Highlight'
import { Heading } from '../../components/Heading'
import { GameCardSlider } from '../../components/GameCardSlider'
import { GameCardProps } from '../GameCard'

export type ShowCaseProps = {
  title?: string
  highlight?: HighlightProps
  games?: GameCardProps[]
}

export function ShowCase({ title, highlight, games }: ShowCaseProps) {
  return (
    <S.Wrapper>
      {!!title && (
        <Heading leftBorder lineColor="secondary">
          {title}
        </Heading>
      )}

      {!!highlight && <Highlight {...highlight} />}

      {!!games && <GameCardSlider items={games} />}
    </S.Wrapper>
  )
}
