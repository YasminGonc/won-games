import { StoryObj, Meta } from '@storybook/react'
import { GameDetails, GameDetailsProps } from '.'

import { GameDetailsMock } from './mock'

export default {
  title: 'GameDetails',
  component: GameDetails,
  args: GameDetailsMock,
  argTypes: {
    platforms: {
      control: {
        type: 'inline-check',
        options: ['linux', 'windowns', 'mac']
      }
    },
    genres: {
      control: {
        type: 'inline-check',
        options: ['Role-playing', 'Narrative']
      }
    }
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
