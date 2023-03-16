import '../../../.jest/match-media-mock'
import { renderWithTheme } from '../../utils/tests/helpers'
import { screen } from '@testing-library/react'

import { ShowCase, ShowCaseProps } from '.'

import highlightMock from '../../components/Highlight/mock'
import gamesMock from '../../components/GameCardSlider/mock'

const props: ShowCaseProps = {
  title: 'Most Popular',
  highlight: highlightMock,
  games: {
    items: gamesMock.slice(0, 1)
  }
}

describe('<ShowCase />', () => {
  it('should render full showcase', () => {
    renderWithTheme(<ShowCase {...props} />)

    expect(
      screen.getByRole('heading', { name: 'Most Popular' })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: highlightMock.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: gamesMock[0].title })
    ).toBeInTheDocument()
  })

  it('should render without title', () => {
    renderWithTheme(
      <ShowCase games={props.games} highlight={props.highlight} />
    )

    expect(
      screen.queryByRole('heading', { name: 'Most Popular' })
    ).not.toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: highlightMock.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: gamesMock[0].title })
    ).toBeInTheDocument()
  })

  it('should render without highlight', () => {
    renderWithTheme(<ShowCase games={props.games} />)

    expect(
      screen.queryByRole('heading', { name: 'Most Popular' })
    ).not.toBeInTheDocument()

    expect(
      screen.queryByRole('heading', { name: highlightMock.title })
    ).not.toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: gamesMock[0].title })
    ).toBeInTheDocument()
  })

  it('should render without games', () => {
    renderWithTheme(<ShowCase />)

    expect(
      screen.queryByRole('heading', { name: 'Most Popular' })
    ).not.toBeInTheDocument()

    expect(
      screen.queryByRole('heading', { name: highlightMock.title })
    ).not.toBeInTheDocument()

    expect(
      screen.queryByRole('heading', { name: gamesMock[0].title })
    ).not.toBeInTheDocument()
  })
})
