import { CaretLeft, CaretRight } from 'phosphor-react'
import { GameCard, GameCardProps } from '../GameCard'
import { Slider, SliderSettings } from '../Slider'
import * as S from './styles'

export type GameCardSliderProps = {
  items: GameCardProps[]
  color?: 'white' | 'black'
}

const settings: SliderSettings = {
  dots: false,
  infinite: false,
  lazyLoad: 'ondemand',
  slidesToShow: 4,
  nextArrow: <CaretRight aria-label="Next games" />,
  prevArrow: <CaretLeft aria-label="Previous games" />,
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2
      }
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.2
      }
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.1
      }
    }
  ]
}

export function GameCardSlider({
  items,
  color = 'black'
}: GameCardSliderProps) {
  return (
    <S.Wrapper color={color}>
      <Slider settings={settings}>
        {items.map((item) => (
          <GameCard key={item.title} {...item} />
        ))}
      </Slider>
    </S.Wrapper>
  )
}
