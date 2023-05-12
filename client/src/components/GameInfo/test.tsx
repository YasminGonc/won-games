import { renderWithTheme } from '../../utils/tests/helpers'
import { screen } from '@testing-library/react'

import { GameInfo } from '.'

const props = {
  title: 'My Game Title',
  description: 'Game description',
  price: 210
}

describe('<GameInfo />', () => {
  it('should render game informations', () => {
    const { container } = renderWithTheme(<GameInfo {...props} />)

    expect(
      screen.getByRole('heading', { name: /My Game Title/i })
    ).toBeInTheDocument()
    expect(screen.getByText('Game description')).toBeInTheDocument()
    expect(screen.getByText(/\$210/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render buttons', () => {
    renderWithTheme(<GameInfo {...props} />)

    expect(
      screen.getByRole('button', { name: /Add to cart/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /wishlist/i })
    ).toBeInTheDocument()
  })
})
