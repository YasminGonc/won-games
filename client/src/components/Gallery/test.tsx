import '../../../.jest/match-media-mock'
import { renderWithTheme } from '../../utils/tests/helpers'
import { fireEvent, screen } from '@testing-library/react'

import { Gallery } from '.'
import { GalleryMock } from './mock'

describe('<Gallery />', () => {
  it('should render thumbnails as buttons', () => {
    renderWithTheme(<Gallery items={GalleryMock.slice(0, 2)} />)

    expect(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    ).toHaveAttribute('src', GalleryMock[0].src)

    expect(
      screen.getByRole('button', { name: /Thumb - Gallery Image 2/i })
    ).toHaveAttribute('src', GalleryMock[1].src)
  })

  it('should handle open modal', () => {
    renderWithTheme(<Gallery items={GalleryMock.slice(0, 2)} />)

    const modal = screen.getByLabelText('modal')

    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0 })

    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    )
    expect(modal.getAttribute('aria-hidden')).toBe('false')
    expect(modal).toHaveStyle({ opacity: 1 })
  })

  it('should handle open modal with selected image', async () => {
    renderWithTheme(<Gallery items={GalleryMock.slice(0, 2)} />)

    // clicar na thumbnail
    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 2/i })
    )

    // espero que a imagem da thumbnail esteja aberta
    const img = await screen.findByRole('img', { name: /Gallery Image 2/i })
    expect(img.parentElement?.parentElement).toHaveClass('slick-active')
  })

  it('should handle close modal when overlay or button clicked', () => {
    renderWithTheme(<Gallery items={GalleryMock.slice(0, 2)} />)

    const modal = screen.getByLabelText('modal')

    // clicar no botão de abrir o modal e verificar se ele abriu
    fireEvent.click(screen.getByRole('button', { name: /Gallery Image 1/i }))

    // clicar para fechar o modal
    fireEvent.click(screen.getByRole('button', { name: /close modal/i }))
    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0 })
  })

  it('should handle close modal when esc is pressed', () => {
    const { container } = renderWithTheme(
      <Gallery items={GalleryMock.slice(0, 2)} />
    )

    const modal = screen.getByLabelText('modal')

    // clicar no botão de abrir o modal e verificar se ele abriu
    fireEvent.click(screen.getByRole('button', { name: /Gallery Image 1/i }))

    // clicar para fechar o modal
    fireEvent.keyUp(container, { key: 'Escape' })
    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0 })
  })
})
