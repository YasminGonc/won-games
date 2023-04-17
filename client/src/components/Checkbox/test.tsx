import { renderWithTheme } from '../../utils/tests/helpers'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Checkbox } from '.'

describe('<Checkbox />', () => {
  it('should render with label', () => {
    renderWithTheme(<Checkbox label="Under $50" labelFor="check" />)

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByLabelText('Under $50')).toBeInTheDocument()
    expect(screen.getByText('Under $50')).toHaveAttribute('for', 'check')
  })

  it('should render with black label', () => {
    renderWithTheme(
      <Checkbox label="Under $50" labelFor="Under $50" labelColor="black" />
    )

    expect(screen.getByText('Under $50')).toHaveStyle({ color: '#030517' })
  })

  it('should change the checked state when clicked', async () => {
    renderWithTheme(<Checkbox label="Under $50" />)

    expect(screen.getByRole('checkbox')).not.toBeChecked()

    userEvent.click(screen.getByRole('checkbox'))

    await waitFor(() => {
      expect(screen.getByRole('checkbox')).toBeChecked()
    })

    userEvent.click(screen.getByRole('checkbox'))

    await waitFor(() => {
      expect(screen.getByRole('checkbox')).not.toBeChecked()
    })
  })
})
