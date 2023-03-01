import { StoryObj, Meta } from '@storybook/react'
import { GameCard, GameCardProps } from '.'

export default {
  title: 'Game Card',
  component: GameCard,
  args: {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: '/img/population-zero.png',
    price: '$ 215,00'
  }
} as Meta<GameCardProps>

export const Default: StoryObj<GameCardProps> = {
  render: (args) => (
    <div style={{ width: '30rem' }}>
      <GameCard {...args} />
    </div>
  )
}

export const PromotionalCard: StoryObj<GameCardProps> = {
  render: (args) => (
    <div style={{ width: '30rem' }}>
      <GameCard {...args} />
    </div>
  )
}

PromotionalCard.args = {
  promotionPrice: '$ 100,00'
}
