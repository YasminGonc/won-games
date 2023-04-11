import { renderWithTheme } from '../../utils/tests/helpers'
import { screen } from '@testing-library/react'

import { CardsList } from '.'
import { paymentOptionsMock } from '../PaymentOptions/mock'

describe('<CardsList />', () => {
  it('should render 4 columns topics', () => {
    const { container } = renderWithTheme(
      <CardsList cards={paymentOptionsMock} />
    )

    expect(
      screen.getByRole('heading', { name: /my cards/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/4325/)).toBeInTheDocument()
    expect(screen.getByText(/4326/)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
