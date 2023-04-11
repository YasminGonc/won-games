import { StoryObj, Meta } from '@storybook/react'
import { CardsList, CardsListProps } from '.'

import { paymentOptionsMock } from '../PaymentOptions/mock'

export default {
  title: 'CardsList',
  component: CardsList,
  args: {
    cards: paymentOptionsMock
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta<CardsListProps>

export const Default: StoryObj<CardsListProps> = {
  render: (args) => (
    <div style={{ maxWidth: 850, margin: 'auto' }}>
      <CardsList {...args} />
    </div>
  )
}
