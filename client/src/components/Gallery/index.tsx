import { KeyboardEvent, useEffect, useState } from 'react'
import { CaretLeft, CaretRight, X } from 'phosphor-react'
import { Slider, SliderSettings } from '../Slider'
import * as S from './styles'

export type GalleryImageProps = {
  src: string
  label: string
}

export type GalleryProps = {
  items: GalleryImageProps[]
}

const settings: SliderSettings = {
  arrows: true,
  infinite: false,
  lazyLoad: 'ondemand',
  slidesToShow: 4,
  nextArrow: <CaretRight aria-label="Next image" />,
  prevArrow: <CaretLeft aria-label="Previous image" />,
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
        draggable: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1.2,
        draggable: true
      }
    }
  ]
}

export function Gallery({ items }: GalleryProps) {
  const [isOpen, setIsOpen] = useState(false)

  // useEffect(() => {
  //   const handleKeyUp = (e: KeyboardEvent) => {
  //     e.key === 'Escape' && setIsOpen(false)
  //   }

  //   window.addEventListener('keyup', handleKeyUp)
  //   return () => window.removeEventListener('keyup', handleKeyUp)
  // }, [])

  return (
    <S.Wrapper>
      <Slider settings={settings}>
        {items.map((item) => (
          <img
            role="button"
            src={item.src}
            alt={item.label}
            key={item.src}
            onClick={() => setIsOpen(true)}
          />
        ))}
      </Slider>

      <S.Modal isOpen={isOpen} aria-label="modal" aria-hidden={!isOpen}>
        <S.Close
          role="button"
          aria-label="close modal"
          onClick={() => setIsOpen(false)}
        >
          <X size={40} />
        </S.Close>
      </S.Modal>
    </S.Wrapper>
  )
}
