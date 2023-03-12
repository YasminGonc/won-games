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

  it('should render with an icon at the left position', () => {
    renderWithTheme(
      <TextField
        placeholder="Name"
        label="Name"
        icon={<UserCircle data-testid="icon" />}
      />
    )

    expect(screen.getByTestId('icon')).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toHaveStyle('order: 0')
  })

  it('should render with an icon in the right position when it passed', () => {
    renderWithTheme(
      <TextField
        placeholder="Name"
        label="Name"
        icon={<UserCircle data-testid="icon" />}
        iconPosition="right"
      />
    )

    expect(screen.getByTestId('icon')).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toHaveStyle('order: 1')
  })

  it('should render disabled', () => {
    renderWithTheme(<TextField placeholder="Name" disabled />)

    expect(screen.getByRole('textbox')).toBeDisabled()
  })

  it('should render an error', () => {
    const { container } = renderWithTheme(
      <TextField placeholder="Name" label="Name" error="Something wrong" />
    )

    expect(screen.getByText('Something wrong')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
