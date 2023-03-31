import '../../../.jest/match-media-mock'
import { renderWithTheme } from '../../utils/tests/helpers'
import { screen } from '@testing-library/react'

import { Game, GameTemplateProps } from '.'

import { GalleryMock } from '../../components/Gallery/mock'
import GameCardSliderMock from '../../components/GameCardSlider/mock'
import HighlighMock from '../../components/Highlight/mock'
import { GameDetailsMock } from '../../components/GameDetails/mock'

const props: GameTemplateProps = {
  cover: 'bg-image.jpg',
  gameInfo: {
    title: 'Cyberpunk 2077',
    price: '59.90',
    description:
      'Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality'
  },
  gallery: GalleryMock,
  description: `<h1>Custom HTML</h1>`,
  details: GameDetailsMock,
  upcomingGames: GameCardSliderMock,
  upcomingHighlight: HighlighMock,
  recommendeGames: GameCardSliderMock
}

jest.mock('../../components/Menu', () => {
  return {
    __esModule: true,
    Menu: () => {
      return <div data-testid="Mock Menu"></div>
    }
  }
})

jest.mock('../../components/Gallery', () => {
  return {
    __esModule: true,
    Gallery: () => {
      return <div data-testid="Mock Gallery"></div>
    }
  }
})

jest.mock('../../components/GameDetails', () => {
  return {
    __esModule: true,
    GameDetails: () => {
      return <div data-testid="Mock GameDetails"></div>
    }
  }
})

jest.mock('../../components/GameInfo', () => {
  return {
    __esModule: true,
    GameInfo: () => {
      return <div data-testid="Mock GameInfo"></div>
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

describe('<Game />', () => {
  it('should render the template with components', () => {
    renderWithTheme(<Game {...props} />)

    expect(screen.getByTestId('Mock Menu')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Gallery')).toBeInTheDocument()
    expect(screen.getByTestId('Mock GameDetails')).toBeInTheDocument()
    expect(screen.getByTestId('Mock GameInfo')).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock ShowCase')).toHaveLength(2)
    expect(screen.getByText(/custom html/i)).toBeInTheDocument()
  })

  it('should not render the gallery if no images', () => {
    renderWithTheme(<Game {...props} gallery={undefined} />)

    expect(screen.queryByTestId('Mock Gallery')).not.toBeInTheDocument()
  })

  it('should not render the gallery on mobile', () => {
    renderWithTheme(<Game {...props} />)

    expect(screen.getByTestId('Mock Gallery').parentElement).toHaveStyle({
      display: 'none'
    })

    expect(screen.getByTestId('Mock Gallery').parentElement).toHaveStyleRule(
      'display',
      'block',
      {
        media: '(min-width: 768px)'
      }
    )
  })

  it('should render cover image', () => {
    renderWithTheme(<Game {...props} />)

    const cover = screen.getByRole('image', { name: /cover/i })

    expect(cover).toHaveStyle({
      backgroundImage: 'url(bg-image.jpg)',
      height: '39.5rem'
    })

    expect(cover).toHaveStyleRule('height', '70rem', {
      media: '(min-width: 768px)'
    })

    expect(cover).toHaveStyleRule(
      'clip-path',
      'polygon(0 0,100% 0,100% 100%,0 85%)',
      {
        media: '(min-width: 768px)'
      }
    )
  })
})
