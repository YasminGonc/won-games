import { StoryObj, Meta } from '@storybook/react'
import { GameCardSlider, GameCardSliderProps } from '.'
import items from './mock'

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
      default: 'won-dark'
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
