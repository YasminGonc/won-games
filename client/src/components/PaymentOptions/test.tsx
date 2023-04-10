import { renderWithTheme } from '../../utils/tests/helpers'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { PaymentOption } from '.'
import { paymentOptionsMock } from './mock'

describe('<PaymentCard />', () => {
  it('should render the saved card options and the new card button', () => {
    renderWithTheme(
      <PaymentOption cards={paymentOptionsMock} handlePayment={jest.fn} />
    )

    expect(screen.getByText(/4325/)).toBeInTheDocument()
    expect(screen.getByText(/4326/)).toBeInTheDocument()
    expect(screen.getByText(/Add a new credit card/i)).toBeInTheDocument()
  })

  it('should not call handlePayment when button is disabled', () => {
    const handlePayment = jest.fn()

    renderWithTheme(
      <PaymentOption cards={paymentOptionsMock} handlePayment={handlePayment} />
    )

    userEvent.click(screen.getByRole('button', { name: /buy now/i }))
    expect(handlePayment).not.toHaveBeenCalled()
  })

  it('should call handlePayment when credit card is selected', async () => {
    const handlePayment = jest.fn()

    renderWithTheme(
      <PaymentOption cards={paymentOptionsMock} handlePayment={handlePayment} />
    )

    userEvent.click(screen.getByText(/4325/))
    userEvent.click(screen.getByRole('button', { name: /buy now/i }))

    await waitFor(() => {
      expect(handlePayment).toHaveBeenCalled()
    })
  })
})
