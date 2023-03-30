import { renderWithTheme } from '../../utils/tests/helpers'
import { screen } from '@testing-library/react'

import { GameDetails } from '.'
import { GameDetailsMock } from './mock'

describe('<GameDetails />', () => {
  it('should render the blocks', () => {
    renderWithTheme(<GameDetails {...GameDetailsMock} />)

    expect(
      screen.getByRole('heading', { name: 'Developer' })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: 'Release date' })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: 'Platforms' })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: 'Publisher' })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: 'Rating' })).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: 'Genres' })).toBeInTheDocument()
  })

  it('should render platform icons', () => {
    renderWithTheme(<GameDetails {...GameDetailsMock} />)

    expect(screen.getByLabelText(/linux/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/windowns/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/mac/i)).toBeInTheDocument()
  })

  it('should render the developer', () => {
    renderWithTheme(<GameDetails {...GameDetailsMock} />)

    expect(screen.getByText(/Gearbox Software/i)).toBeInTheDocument()
  })

  it('should render the publisher', () => {
    renderWithTheme(<GameDetails {...GameDetailsMock} />)

    expect(screen.getByText(/2K/i)).toBeInTheDocument()
  })

  it('should render a formated date', () => {
    renderWithTheme(<GameDetails {...GameDetailsMock} />)

    expect(screen.getByText('Nov 21, 2020')).toBeInTheDocument()
  })

  it('should render free when rating is BR0', () => {
    renderWithTheme(<GameDetails {...GameDetailsMock} />)

    expect(screen.getByText(/free/i)).toBeInTheDocument()
  })

  it('should render free when rating is BR12', () => {
    renderWithTheme(<GameDetails {...GameDetailsMock} rating="BR12" />)

    expect(screen.getByText(/12\+/i)).toBeInTheDocument()
  })

  it('should render free when rating is BR14', () => {
    renderWithTheme(<GameDetails {...GameDetailsMock} rating="BR14" />)

    expect(screen.getByText(/14\+/i)).toBeInTheDocument()
  })

  it('should render free when rating is BR16', () => {
    renderWithTheme(<GameDetails {...GameDetailsMock} rating="BR16" />)

    expect(screen.getByText(/16\+/i)).toBeInTheDocument()
  })

  it('should render free when rating is BR18', () => {
    renderWithTheme(<GameDetails {...GameDetailsMock} rating="BR18" />)

    expect(screen.getByText(/18\+/i)).toBeInTheDocument()
  })

  it('should render a list of genres', () => {
    renderWithTheme(<GameDetails {...GameDetailsMock} rating="BR18" />)

    expect(screen.getByText('Role-playing / Narrative')).toBeInTheDocument()
  })
})
