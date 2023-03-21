import { StoryObj, Meta } from '@storybook/react'
import { GameInfo, GameInfoProps } from '.'

export default {
  title: 'GameInfo',
  component: GameInfo,
  args: {
    title: 'Borderlands 3',
    description:
      'Experience the epic space strategy games that redefined the RTS genre. Control your fleet and build an armada across more than 30 single-player missions.',
    price: '215,00'
  },
  parameters: {
    backgrounds: {
      default: 'won-darh'
    }
  }
} as Meta<GameInfoProps>

export const Default: StoryObj<GameInfoProps> = {
  render: (args) => (
    <div style={{ maxWidth: '144rem', padding: '1.5rem', margin: 'auto' }}>
      <GameInfo {...args} />
    </div>
  )
}
