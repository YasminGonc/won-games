import { StoryObj, Meta } from '@storybook/react'
import { GameDetails, GameDetailsProps } from '.'

export default {
  title: 'GameDetails',
  component: GameDetails,
  args: {
    platforms: ['linux', 'windowns', 'mac']
  },
  parameters: {
    backgrounds: {
      default: 'won-darh'
    }
  }
} as Meta<GameDetailsProps>

export const Default: StoryObj<GameDetailsProps> = {
  render: (args) => (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <GameDetails {...args} />
    </div>
  )
}
