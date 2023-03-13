import { renderWithTheme } from '../../utils/tests/helpers'
import { screen } from '@testing-library/react'

import { Auth } from '.'

describe('<Auth />', () => {
  it('should render all components and children', () => {
    renderWithTheme(
      <Auth title="Auth title">
        <input type="text" />
      </Auth>
    )

    // check logos
    expect(screen.getAllByLabelText(/Won Games/i)).toHaveLength(2)

    // check banner's heading
    expect(
      screen.getByRole('heading', {
        name: /All your favorite games in one place/i
      })
    )

    // check subtitle
    expect(
      screen.getByRole('heading', {
        name: /WON is the best and most complete gaming platform./i
      })
    )

    // check footer
    expect(screen.getByText('Won Games 2023 © Todos os Direitos Reservados'))

    // check title
    expect(
      screen.getByRole('heading', {
        name: /Auth title/i
      })
    )

    // check children
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
