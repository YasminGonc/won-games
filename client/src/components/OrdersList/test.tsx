import { ReactNode } from 'react'
import { renderWithTheme } from '../../utils/tests/helpers'
import { screen } from '@testing-library/react'

import { OrdersList } from '.'
import { ordersListMock } from './mock'

jest.mock('../GameItem', () => {
  return {
    __esModule: true,
    GameItem: ({ children }: { children: ReactNode }) => {
      return <div data-testid="Mock GameItem">{children}</div>
    }
  }
})

jest.mock('../Empty', () => {
  return {
    __esModule: true,
    Empty: () => {
      return <div data-testid="Mock Empty"></div>
    }
  }
})

describe('<OrdersList />', () => {
  it('should render the game items', () => {
    renderWithTheme(<OrdersList {...ordersListMock} />)

    expect(
      screen.getByRole('heading', { name: /my orders/i })
    ).toBeInTheDocument()

    expect(screen.getAllByTestId('Mock GameItem')).toHaveLength(2)
  })

  it('should render empty state', () => {
    renderWithTheme(<OrdersList />)

    expect(screen.getByTestId('Mock Empty')).toBeInTheDocument()
  })
})
