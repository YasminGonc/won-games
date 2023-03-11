import { renderWithTheme } from '../../utils/tests/helpers'
import { screen } from '@testing-library/react'

import { TextField } from '.'
import { UserCircle } from 'phosphor-react'

describe('<TextField />', () => {
  it('should render placeholder by default', () => {
    renderWithTheme(<TextField placeholder="Name" />)

    expect(screen.getByLabelText('Name input')).toBeInTheDocument()
    expect(screen.getByLabelText('Name input')).toHaveAttribute('type', 'text')
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument()
  })

  it('should render a label when it is passed', () => {
    renderWithTheme(<TextField placeholder="Name" label="Name" />)

    expect(screen.getByText(/name/i)).toBeInTheDocument()
  })

  it('should render with an icon', () => {
    renderWithTheme(
      <TextField
        placeholder="Name"
        label="Name"
        icon={<UserCircle data-testid="icon" />}
      />
    )

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
})
