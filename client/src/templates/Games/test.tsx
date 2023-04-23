import '../../../.jest/match-media-mock'
import { renderWithTheme } from '../../utils/tests/helpers'
import { screen } from '@testing-library/react'

import { GamesTemplate, GamesTemplateProps } from '.'
import { exploreSideBarMock } from '../../components/ExploreSidebar/mock'
import gameCardMock from '../../components/GameCardSlider/mock'

const props: GamesTemplateProps = {
  filterItems: exploreSideBarMock.items,
  games: gameCardMock
}

jest.mock('../../components/ExploreSidebar', () => {
  return {
    __esModule: true,
    ExploreSidebar: () => {
      return <div data-testid="Mock ExploreSidebar"></div>
    }
  }
})

jest.mock('../../components/GameCard', () => {
  return {
    __esModule: true,
    GameCard: () => {
      return <div data-testid="Mock GameCard"></div>
    }
  }
})

describe('<GamesTemplate />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GamesTemplate {...props} />)

    expect(screen.getByTestId('Mock ExploreSidebar')).toBeInTheDocument()
    expect(screen.queryAllByTestId('Mock GameCard')).toHaveLength(6)
    expect(
      screen.getByRole('button', { name: /show more/i })
    ).toBeInTheDocument()
  })
})
