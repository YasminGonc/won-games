import { StoryObj, Meta } from '@storybook/react'
import { ShowCase, ShowCaseProps } from '.'

import highlightMock from '../../components/Highlight/mock'
import gamesMock from '../../components/GameCardSlider/mock'

export default {
  title: 'ShowCase',
  component: ShowCase,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto' }}>
        <Story />
      </div>
    )
  ]
} as Meta<ShowCaseProps>

export const Default: StoryObj<ShowCaseProps> = {}

Default.args = {
  title: 'Most Popular',
  highlight: highlightMock,
  games: {
    items: gamesMock
  }
}

export const WithoutTitle: StoryObj<ShowCaseProps> = {}

WithoutTitle.args = {
  highlight: highlightMock,
  games: {
    items: gamesMock
  }
}

export const WithoutHighlight: StoryObj<ShowCaseProps> = {}

WithoutHighlight.args = {
  title: 'Most Popular',
  games: {
    items: gamesMock
  }
}

export const WithoutGames: StoryObj<ShowCaseProps> = {}

WithoutGames.args = {
  title: 'Most Popular',
  highlight: highlightMock
}
