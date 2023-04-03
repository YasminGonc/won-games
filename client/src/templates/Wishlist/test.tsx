import '../../../.jest/match-media-mock'
import { renderWithTheme } from '../../utils/tests/helpers'
import { screen } from '@testing-library/react'

import { Wishlist, WishlistTemplateProps } from '.'

import HighlighMock from '../../components/Highlight/mock'
import GameCardSliderMock from '../../components/GameCardSlider/mock'

const props: WishlistTemplateProps = {
  games: GameCardSliderMock,
  recomendedGames: GameCardSliderMock,
  recomendedHighlight: HighlighMock
}

jest.mock('../../components/ShowCase', () => {
  return {
    __esModule: true,
    ShowCase: () => {
      return <div data-testid="Mock ShowCase"></div>
    }
  }
})

describe('<Wishlist />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Wishlist {...props} />)

    expect(
      screen.getByRole('heading', { name: /Wishlist/i })
    ).toBeInTheDocument()

    expect(screen.getAllByText(/population zero/i)).toHaveLength(6)
    expect(screen.getByTestId('Mock ShowCase')).toBeInTheDocument()
  })
})
