import { StoryObj, Meta } from '@storybook/react'
import { GameCardSlider, GameCardSliderProps } from '.'

const items = [
  {
    title: 'Population Zero 1',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: '$ 215,00',
    promotionPrice: '$ 100,00',
    favorite: false,
    hasRibbon: true,
    ribbon: '20% OFF',
    ribbonSize: 'small',
    ribbonColor: 'primary'
  },
  {
    title: 'Population Zero 2',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x141',
    price: '$ 215,00'
  },
  {
    title: 'Population Zero 3',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x142',
    price: '$ 215,00'
  },
  {
    title: 'Population Zero 4',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x143',
    price: '$ 215,00'
  },
  {
    title: 'Population Zero 5',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x144',
    price: '$ 215,00'
  },
  {
    title: 'Population Zero 6',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x145',
    price: '$ 215,00'
  }
]

export default {
  title: 'GameCardSlider',
  component: GameCardSlider,
  args: {
    items,
    color: 'white'
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta<GameCardSliderProps>

export const Default: StoryObj<GameCardSliderProps> = {
  render: (args) => (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <GameCardSlider {...args} />
    </div>
  )
}
