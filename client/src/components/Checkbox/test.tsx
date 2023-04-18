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

  it('should dispatch onCheck when status change', async () => {
    const onCheck = jest.fn()

    renderWithTheme(<Checkbox label="Under $50" onCheck={onCheck} />)

    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByRole('checkbox'))

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })
    expect(onCheck).toHaveBeenCalledWith(true)
  })

  it('should call onCheck with false if Checkbox is already checked', async () => {
    const onCheck = jest.fn()

    renderWithTheme(<Checkbox label="Under $50" onCheck={onCheck} isChecked />)

    userEvent.click(screen.getByRole('checkbox'))

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })
    expect(onCheck).toHaveBeenCalledWith(false)
  })
})
