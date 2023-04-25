import { renderWithTheme } from '../../utils/tests/helpers'
import { fireEvent, screen } from '@testing-library/react'

import { Dropdown, DropdownProps } from '.'

const props: DropdownProps = {
  title: 'Click here',
  children: 'content'
}

describe('<Dropdown />', () => {
  it('should render open/close dropdown', () => {
    renderWithTheme(
      <Dropdown title={props.title}>
        <span>{props.children}</span>
      </Dropdown>
    )

    const content = screen.getByText(/content/i).parentElement!

    expect(content.getAttribute('aria-hidden')).toBe('true')
    expect(content).toHaveStyle({ opacity: 0 })

    fireEvent.click(screen.getByLabelText(/toggle dropdown/i))

    expect(content.getAttribute('aria-hidden')).toBe('false')
    expect(content).toHaveStyle({ opacity: 1 })

    fireEvent.click(screen.getByLabelText(/toggle dropdown/i))
    expect(content.getAttribute('aria-hidden')).toBe('true')
    expect(content).toHaveStyle({ opacity: 0 })
  })
})
