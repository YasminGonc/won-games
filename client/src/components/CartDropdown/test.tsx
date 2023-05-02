import { renderWithTheme } from '../../utils/tests/helpers'
import { screen } from '@testing-library/react'

import { CartDropdown } from '.'
import { cartListMock } from '../CartList/mock'

describe('<CartDropdown />', () => {
  it('should render <CartIcon /> and its badge>', () => {
    renderWithTheme(<CartDropdown {...cartListMock} />)

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.getByText(`${cartListMock.items.length}`)).toBeInTheDocument()
  })

  it('should render Dropdown content with cart items and total', () => {
    renderWithTheme(<CartDropdown {...cartListMock} />)

    expect(screen.getByText('$ 430,00')).toBeInTheDocument()
    expect(
      screen.getByText(`${cartListMock.items[0].title}`)
    ).toBeInTheDocument()
    expect(
      screen.getByText(`${cartListMock.items[1].title}`)
    ).toBeInTheDocument()
  })
})
