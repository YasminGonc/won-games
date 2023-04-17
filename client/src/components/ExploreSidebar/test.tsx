import { renderWithTheme } from '../../utils/tests/helpers'
import { screen } from '@testing-library/react'

import { ExploreSidebar } from '.'
import { exploreSideBarMock } from './mock'

describe('<ExploreSidebar />', () => {
  it('should render headings', () => {
    renderWithTheme(<ExploreSidebar {...exploreSideBarMock} />)

    expect(screen.getByRole('heading', { name: /price/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /sort by/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /system/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /genre/i })).toBeInTheDocument()
  })

  it('should render inputs', () => {
    renderWithTheme(<ExploreSidebar {...exploreSideBarMock} />)

    expect(
      screen.getByRole('checkbox', { name: /under \$50/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('radio', { name: /low to high/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('checkbox', { name: /windows/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('checkbox', { name: /simulation/i })
    ).toBeInTheDocument()
  })

  it('should render filter button', () => {
    renderWithTheme(<ExploreSidebar {...exploreSideBarMock} />)

    expect(screen.getByRole('button', { name: /filter/i })).toBeInTheDocument()
  })
})