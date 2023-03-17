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
  mostPopularHighlight: highlightMock,
  mostPopularGames: gamesMock,
  upcomingGames: gamesMock,
  upcomingHighlight: highlightMock,
  upcomingMoreGames: gamesMock,
  freeGames: gamesMock,
  freeHighlight: highlightMock
}

jest.mock('../../components/Menu', () => {
  return {
    __esModule: true,
    Menu: () => {
      return <div data-testid="Mock Menu"></div>
    }
  }
})

jest.mock('../../components/Footer', () => {
  return {
    __esModule: true,
    Footer: () => {
      return <div data-testid="Mock Footer"></div>
    }
  }
})

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
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByTestId('Mock Menu')).toBeInTheDocument()
    expect(screen.getByTestId('Mock BannerSlider')).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock ShowCase')).toHaveLength(5)
    expect(screen.getByTestId('Mock Footer')).toBeInTheDocument()
  })
})
