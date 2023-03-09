import { renderWithTheme } from '../../utils/tests/helpers'
import { screen } from '@testing-library/react'

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
      <Checkbox label="Under $50" labelFor="check" labelColor="black" />
    )

    expect(screen.getByText('Under $50')).toHaveStyle({ color: '#030517' })
  })
})
