import '../../../.jest/match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import { GameCardSlider } from '.'
import { GameCardProps } from '../GameCard'

const items: GameCardProps[] = [
  {
    title: 'Population Zero 1',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: '$ 215,00',
    promotionPrice: '$ 100,00',
    hasRibbon: true,
    ribbon: '20% OFF',
    ribbonSize: 'small',
    ribbonColor: 'primary'
  },
  {
    title: 'Population Zero 2',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x141',
    price: '$ 215,00'
  },
  {
    title: 'Population Zero 3',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x142',
    price: '$ 215,00'
  },
  {
    title: 'Population Zero 4',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x143',
    price: '$ 215,00'
  },
  {
    title: 'Population Zero 5',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x144',
    price: '$ 215,00'
  },
  {
    title: 'Population Zero 6',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x145',
    price: '$ 215,00'
  }
]

describe('<GameCardSlider />', () => {
  it('should render with four active item', () => {
    const { container } = renderWithTheme(<GameCardSlider items={items} />)

    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })

  it('should render white arrows if color passed', () => {
    renderWithTheme(<GameCardSlider items={items} color="black" />)

    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: '#030517'
    })

    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: '#030517'
    })
  })
})
