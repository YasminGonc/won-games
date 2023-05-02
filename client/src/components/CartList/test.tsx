import { renderWithTheme } from '../../utils/tests/helpers'
import { screen } from '@testing-library/react'

import { CartList } from '.'
import { cartListMock } from './mock'

describe('<Footer />', () => {
  it('should render the cart list', () => {
    const { container } = renderWithTheme(<CartList {...cartListMock} />)

    expect(screen.getAllByRole('heading')).toHaveLength(2)
    expect(screen.getByText(cartListMock.total)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the button', () => {
    renderWithTheme(<CartList {...cartListMock} hasButton />)

    expect(screen.getByText(/buy it now/i)).toBeInTheDocument()
  })

  it('should render empty if there are no games', () => {
    renderWithTheme(<CartList />)

    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument()
    expect(screen.queryByText(/total/i)).not.toBeInTheDocument()
  })
})
