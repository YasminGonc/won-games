import '../../../.jest/match-media-mock'
import { renderWithTheme } from '../../utils/tests/helpers'
import { screen } from '@testing-library/react'

import bannersMock from '../../components/BannerSlider/mock'
import gamesMock from '../../components/GameCardSlider/mock'
import highlightMock from '../../components/Highlight/mock'

import { Home, HomeTemplateProps } from '.'

const props: HomeTemplateProps = {
  banners: bannersMock,
  newGames: gamesMock,
  newGamesTitle: 'New games',
  mostPopularHighlight: highlightMock,
  mostPopularGames: gamesMock,
  mostPopularGamesTitle: 'Most popular games',
  upcomingGames: gamesMock,
  upcomingHighlight: highlightMock,
  upcomingGamesTitle: 'Upcoming games',
  freeGames: gamesMock,
  freeHighlight: highlightMock,
  freeGamesTitle: 'Free games'
}

jest.mock('../../components/ShowCase', () => {
  return {
    __esModule: true,
    ShowCase: () => {
      return <div data-testid="Mock ShowCase"></div>
    }
  }
})

jest.mock('../../components/BannerSlider', () => {
  return {
    __esModule: true,
    BannerSlider: () => {
      return <div data-testid="Mock BannerSlider"></div>
    }
  }
})

describe('<Home />', () => {
  it('should render banner and show cases', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByTestId('Mock BannerSlider')).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock ShowCase')).toHaveLength(4)
  })
})
