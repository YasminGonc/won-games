import { renderWithTheme } from '../../utils/tests/helpers'
import { screen } from '@testing-library/react'

import { FormSignUp } from '.'

describe('<FormSignUp />', () => {
  it('should render the form', () => {
    const { container } = renderWithTheme(<FormSignUp />)

    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Confirm password')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /Sign up now/i })
    ).toBeInTheDocument()

    expect(container.parentElement).toMatchSnapshot()
  })

  it('should render the text and link to sign in', () => {
    renderWithTheme(<FormSignUp />)

    expect(screen.getByText('Already have an account?')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sign in/i })).toBeInTheDocument()
  })
})
