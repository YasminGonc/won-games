import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { render, RenderResult } from '@testing-library/react'

import { defaultTheme } from '../../styles/theme/defaultTheme'

export const renderWithTheme = (children: ReactNode): RenderResult =>
  render(<ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>)
