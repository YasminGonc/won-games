import '../../../.jest/match-media-mock'
import { renderWithTheme } from '../../utils/tests/helpers'
import { screen } from '@testing-library/react'

import { Cart, CartProps } from '.'

import GameCardSliderMock from '../../components/GameCardSlider/mock'
import HighlighMock from '../../components/Highlight/mock'
import { cartListMock } from '../../components/CartList/mock'
import { paymentOptionsMock } from '../../components/PaymentOptions/mock'

const props: CartProps = {
  recomendedGames: GameCardSliderMock,
  recomendedHighlight: HighlighMock,
  items: cartListMock.items,
  total: cartListMock.total,
  cards: paymentOptionsMock
}

jest.mock('../../components/ShowCase', () => {
  return {
    __esModule: true,
    ShowCase: () => {
      return <div data-testid="Mock ShowCase"></div>
    }
  }
})

jest.mock('../../components/PaymentOptions', () => {
  return {
    __esModule: true,
    PaymentOption: () => {
      return <div data-testid="Mock Payment"></div>
    }
  }
})

jest.mock('../../components/CartList', () => {
  return {
    __esModule: true,
    CartList: () => {
      return <div data-testid="Mock CartList"></div>
    }
  }
})

jest.mock('../../components/Empty', () => {
  return {
    __esModule: true,
    Empty: () => {
      return <div data-testid="Mock Empty"></div>
    }
  }
})

describe('<Cart />', () => {
  it('should render sections', () => {
    renderWithTheme(<Cart {...props} />)

    expect(
      screen.getByRole('heading', { name: /my cart/i })
    ).toBeInTheDocument()

    expect(screen.queryAllByTestId('Mock CartList')).toHaveLength(2)
    expect(screen.getByTestId('Mock Payment')).toBeInTheDocument()
    expect(screen.getByTestId('Mock ShowCase')).toBeInTheDocument()
  })

  it('should render empty section if there are no items', () => {
    renderWithTheme(<Cart {...props} items={[]} />)

    expect(screen.getByTestId('Mock Empty')).toBeInTheDocument()
  })
})
