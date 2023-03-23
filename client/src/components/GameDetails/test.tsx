import { renderWithTheme } from '../../utils/tests/helpers'
import { screen } from '@testing-library/react'

import { GameDetails } from '.'

describe('<GameDetails />', () => {
  it('should render 4 columns topics', () => {
    renderWithTheme(<GameDetails />)
  })
})
