import { renderWithTheme } from '../../utils/tests/helpers'
import { screen } from '@testing-library/react'

import { RadioGroup } from '.'

const items = ['Comfortable']

describe('<Checkbox />', () => {
  it('should render with label', () => {
    renderWithTheme(<RadioGroup items={items} />)

    expect(screen.getByRole('radio')).toBeInTheDocument()
    expect(screen.getByLabelText('Comfortable')).toBeInTheDocument()
    // expect(screen.getByText('Comfortable')).toHaveAttribute('for', 'check')
  })

  it('should render with black label', () => {
    renderWithTheme(<RadioGroup items={items} labelColor="black" />)

    expect(screen.getByText('Comfortable')).toHaveStyle({ color: '#030517' })
  })
})
