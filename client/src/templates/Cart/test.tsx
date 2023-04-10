import { ReactNode } from 'react'
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

jest.mock('../Base', () => {
  return {
    __esModule: true,
    Base: ({ children }: { children: ReactNode }) => {
      return <div data-testid="Mock Base">{children}</div>
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

jest.mock('../../components/CartList', () => {
  return {
    __esModule: true,
    CartList: () => {
      return <div data-testid="Mock Cart"></div>
    }
  }
})

jest.mock('../../components/PaymentOptions', () => {
  return {
    __esModule: true,
    PaymentOptions: () => {
      return <div data-testid="Mock PaymentOptions"></div>
    }
  }
})

describe('<Cart />', () => {
  it('should render sections', () => {
    renderWithTheme(<Cart {...props} />)

    expect(
      screen.getByRole('heading', { name: /my cart/i })
    ).toBeInTheDocument()
    expect(screen.getByTestId('Mock Cart')).toBeInTheDocument()
  })
})
