import { renderWithTheme } from '../../utils/tests/helpers'
import { screen } from '@testing-library/react'

import { Banner } from '.'

describe('<Banner />', () => {
  it('should render banner correctly', () => {
    const { container } = renderWithTheme(
      <Banner
        img="https://source.unsplash.com/user/willianjusten/1042x580"
        title="Defy death"
        subtitle="<p>Play the new <strong>CrashLands</strong> season"
        buttonLink="Buy now"
        buttonLabel="/games/defy-death"
      />
    )

    expect(screen.getByRole('img', { name: /Defy death/i })).toHaveAttribute(
      'src',
      'https://source.unsplash.com/user/willianjusten/1042x580'
    )

    expect(
      screen.getByRole('heading', { name: /Defy death/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Play the new/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
