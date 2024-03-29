import { ReactNode } from 'react'
import '../../../.jest/match-media-mock'
import { renderWithTheme } from '../../utils/tests/helpers'
import { screen } from '@testing-library/react'

import { Profile } from '.'

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({ asPath: '/profile/me' }))
}))

jest.mock('../../components/Heading', () => {
  return {
    __esModule: true,
    Heading: ({ children }: { children: ReactNode }) => {
      return <div data-testid="Mock Heading">{children}</div>
    }
  }
})

jest.mock('../../components/ProfileMenu', () => {
  return {
    __esModule: true,
    ProfileMenu: () => {
      return <div data-testid="Mock ProfileMenu"></div>
    }
  }
})

describe('<Profile />', () => {
  it('should render sections', () => {
    renderWithTheme(<Profile>Lorem Ipsum</Profile>)

    expect(screen.getByText('Lorem Ipsum')).toBeInTheDocument()
    expect(screen.getByText('My profile')).toBeInTheDocument()
    expect(screen.getByTestId('Mock ProfileMenu')).toBeInTheDocument()
  })
})
