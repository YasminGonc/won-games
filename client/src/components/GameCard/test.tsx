import { renderWithTheme } from '../../utils/tests/helpers'
import { screen } from '@testing-library/react'

import { GameCard } from '.'

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: '/img/population-zero.png',
  price: '$215,00'
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('should render prince in label', () => {
    renderWithTheme(<GameCard {...props} />)

    const price = screen.getByText(props.price)

    expect(price).toHaveStyle({
      backgroundColor: '#3CD3C1'
    })
    expect(price).not.toHaveStyle({ textDecoration: 'line-through' })
  })

  it('should render promotional price', () => {
    renderWithTheme(<GameCard {...props} promotionPrice="$ 100,00" />)

    expect(screen.getByText('$ 100,00')).toHaveStyle({
      backgroundColor: '#3CD3C1'
    })

    expect(screen.getByText(props.price)).toHaveStyle({
      textDecoration: 'line-through'
    })
  })
})
