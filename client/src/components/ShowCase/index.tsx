import * as S from './styles'

import { HighlightProps, Highlight } from '../../components/Highlight'
import { Heading } from '../../components/Heading'
import {
  GameCardSlider,
  GameCardSliderProps
} from '../../components/GameCardSlider'

export type ShowCaseProps = {
  title?: string
  highlight?: HighlightProps
  games?: GameCardSliderProps
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

      {!!games && <GameCardSlider {...games} />}
    </S.Wrapper>
  )
}
