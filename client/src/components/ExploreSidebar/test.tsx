import { renderWithTheme } from '../../utils/tests/helpers'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { css } from 'styled-components'

import { ExploreSidebar } from '.'
import { Overlay } from './styles'
import { exploreSideBarMock } from './mock'

describe('<ExploreSidebar />', () => {
  it('should render headings', () => {
    renderWithTheme(
      <ExploreSidebar items={exploreSideBarMock.items} onFilter={jest.fn} />
    )

    expect(screen.getByRole('heading', { name: /price/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /sort by/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /system/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /genre/i })).toBeInTheDocument()
  })

  it('should render inputs', () => {
    renderWithTheme(
      <ExploreSidebar items={exploreSideBarMock.items} onFilter={jest.fn} />
    )

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
    renderWithTheme(
      <ExploreSidebar items={exploreSideBarMock.items} onFilter={jest.fn} />
    )

    expect(screen.getByRole('button', { name: /filter/i })).toBeInTheDocument()
  })

  it('should check initial values that are passed', () => {
    renderWithTheme(
      <ExploreSidebar
        items={exploreSideBarMock.items}
        initialValues={{ windows: true, sort_by: 'Low to high' }}
        onFilter={jest.fn}
      />
    )

    expect(screen.getByRole('checkbox', { name: /windows/i })).toBeChecked()
    expect(screen.getByRole('radio', { name: /low to high/i })).toBeChecked()
  })

  it('should filter with initial values', async () => {
    const onFilter = jest.fn()

    renderWithTheme(
      <ExploreSidebar
        items={exploreSideBarMock.items}
        initialValues={{ windows: true, sort_by: 'Low to high' }}
        onFilter={onFilter}
      />
    )

    userEvent.click(screen.getByRole('button', { name: /filter/i }))

    await waitFor(() => {
      expect(onFilter).toBeCalledWith({ windows: true, sort_by: 'Low to high' })
    })
  })

  it('should filter with checked values', async () => {
    const onFilter = jest.fn()

    renderWithTheme(
      <ExploreSidebar items={exploreSideBarMock.items} onFilter={onFilter} />
    )

    userEvent.click(screen.getByLabelText(/windows/i))
    userEvent.click(screen.getByLabelText(/low to high/i))

    userEvent.click(screen.getByRole('button', { name: /filter/i }))

    await waitFor(() => {
      expect(onFilter).toBeCalledWith({ windows: true, sort_by: 'Low to high' })
    })
  })

  it('should altern between radio options', async () => {
    const onFilter = jest.fn()

    renderWithTheme(
      <ExploreSidebar items={exploreSideBarMock.items} onFilter={onFilter} />
    )

    userEvent.click(screen.getByLabelText(/low to high/i))
    userEvent.click(screen.getByLabelText(/high to low/i))

    userEvent.click(screen.getByRole('button', { name: /filter/i }))

    await waitFor(() => {
      expect(onFilter).toBeCalledWith({ sort_by: 'High to low' })
    })
  })

  it('should open/close sidebar when filtering on mobile', () => {
    const { container } = renderWithTheme(
      <ExploreSidebar items={exploreSideBarMock.items} onFilter={jest.fn} />
    )

    const variant = {
      media: '(max-width:768px)',
      modifier: css`
        ${Overlay}
      `
    }

    const Element = container.firstChild

    expect(Element).not.toHaveStyleRule('opacity', '1', variant)

    // userEvent.click(screen.getByLabelText(/Open filters/))

    // expect(Element).toHaveStyleRule('opacity', '1', variant)

    // userEvent.click(screen.getByLabelText(/Close filters/))

    // expect(Element).not.toHaveStyleRule('opacity', '1', variant)
  })
})
