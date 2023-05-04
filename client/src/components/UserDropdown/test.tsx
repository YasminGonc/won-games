import { renderWithTheme } from '../../utils/tests/helpers'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { UserDropdown } from '.'

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    renderWithTheme(<UserDropdown username="John" />)

    expect(screen.getByText('John')).toBeInTheDocument()
  })

  it('should render the menu', async () => {
    renderWithTheme(<UserDropdown username="John" />)

    userEvent.click(screen.getByLabelText(/toggle dropdown/i))

    await waitFor(() => {
      expect(
        screen.getByRole('link', { name: /My profile/i })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('link', { name: /Wishlist/i })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('link', { name: /Sign out/i })
      ).toBeInTheDocument()
    })
  })
})
