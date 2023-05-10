import '../../../.jest/match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import { GameCardSlider } from '.'
import gameCardItems from './mock'

describe('<GameCardSlider />', () => {
  it('should render with four active item', () => {
    const { container } = renderWithTheme(
      <GameCardSlider items={gameCardItems} />
    )

    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })

  it('should render white arrows if color passed', () => {
    renderWithTheme(<GameCardSlider items={gameCardItems} color="black" />)

    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: '#030517'
    })

    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: '#030517'
    })
  })
})
