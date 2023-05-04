import { renderWithTheme } from '../../utils/tests/helpers'
import { fireEvent, screen } from '@testing-library/react'

import { Menu } from '.'

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />)
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument()
  })

  it('should render the open/close menu', () => {
    renderWithTheme(<Menu />)

    const fullMenuElemnt = screen.getByRole('navigation', { hidden: true })
    expect(fullMenuElemnt.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElemnt).toHaveStyle({ opacity: 0 })

    fireEvent.click(screen.getByLabelText(/open menu/i))
    expect(fullMenuElemnt.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElemnt).toHaveStyle({ opacity: 1 })

    fireEvent.click(screen.getByLabelText(/close menu/i))
    expect(fullMenuElemnt.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElemnt).toHaveStyle({ opacity: 0 })
  })

  it('should show register box when logged out', () => {
    renderWithTheme(<Menu />)
    expect(screen.getAllByText(/sign in/i)).toHaveLength(2)
    expect(screen.getByText(/sign up/i)).toBeInTheDocument()
    expect(screen.queryByText(/account/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/wishilist/i)).not.toBeInTheDocument()
  })

  it('should show wishilist and account when logged in', () => {
    renderWithTheme(<Menu username="Yasmin" />)
    expect(screen.queryByText(/sign in/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument()
    expect(screen.getByText(/account/i)).toBeInTheDocument()
    expect(screen.getByText(/wishilist/i)).toBeInTheDocument()
  })
})
