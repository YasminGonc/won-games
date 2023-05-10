import { renderWithTheme } from '../../utils/tests/helpers'
import { fireEvent, screen } from '@testing-library/react'

import { GameCard } from '.'

const props = {
  slug: 'population-zero',
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

    expect(screen.getByRole('link', { name: props.title })).toHaveAttribute(
      'href',
      `/game/${props.slug}`
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

  it('should render a filled Favorite icon when favorite is true', () => {
    renderWithTheme(<GameCard {...props} favorite />)

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn()
    renderWithTheme(<GameCard {...props} favorite onFav={onFav} />)

    fireEvent.click(screen.getAllByRole('button')[0])

    expect(onFav).toBeCalled()
  })

  it('should render a ribbon', () => {
    renderWithTheme(
      <GameCard
        {...props}
        hasRibbon
        ribbon="20% OFF"
        ribbonColor="primary"
        ribbonSize="small"
      />
    )

    const ribbon = screen.getByText('20% OFF')

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({
      backgroundColor: '#F231A5',
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
