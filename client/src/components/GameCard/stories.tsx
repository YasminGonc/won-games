import { StoryObj, Meta } from '@storybook/react'
import { GameCard, GameCardProps } from '.'

export default {
  title: 'Game Card',
  component: GameCard,
  args: {
    slug: 'population-zero',
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: '/img/population-zero.png',
    price: '$ 215,00',
    favorite: false,
    hasRibbon: false,
    ribbon: '20% OFF',
    ribbonSize: 'small',
    ribbonColor: 'primary'
  },
  argTypes: {
    onFav: { action: 'clicked' }
  }
} as Meta<GameCardProps>

export const Default: StoryObj<GameCardProps> = {
  render: (args) => (
    <div style={{ width: '30rem' }}>
      <GameCard {...args} />
    </div>
  )
}

export const promotionalCard: StoryObj<GameCardProps> = {
  render: (args) => (
    <div style={{ width: '30rem' }}>
      <GameCard {...args} />
    </div>
  )
}

promotionalCard.args = {
  promotionPrice: '$ 100,00'
}

export const withRibbon: StoryObj<GameCardProps> = {
  render: (args) => (
    <div style={{ width: '30rem' }}>
      <GameCard {...args} />
    </div>
  )
}

withRibbon.args = {
  hasRibbon: true,
  promotionPrice: '$ 100,00'
}
