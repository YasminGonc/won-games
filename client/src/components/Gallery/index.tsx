import { useState, useRef, useEffect } from 'react'
import { CaretLeft, CaretRight, X } from 'phosphor-react'
import SlickSlider from 'react-slick'
import Slider, { SliderSettings } from '../Slider'
import * as S from './styles'

export type GalleryImageProps = {
  src: string
  label: string
}

export type GalleryProps = {
  items: GalleryImageProps[]
}

const commonSettings: SliderSettings = {
  arrows: true,
  infinite: false,
  lazyLoad: 'ondemand',
  nextArrow: <CaretRight aria-label="Next image" />,
  prevArrow: <CaretLeft aria-label="Previous image" />
}

const settings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 4,
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

const modalSettings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 1
}

export function Gallery({ items }: GalleryProps) {
  const slider = useRef<SlickSlider>(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      key === 'Escape' && setIsOpen(false)
    }

    window.addEventListener('keyup', handleKeyUp)
    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [])

  return (
    <S.Wrapper>
      <Slider ref={slider} settings={settings}>
        {items.map((item, index) => (
          <img
            role="button"
            src={item.src}
            alt={`Thumb - ${item.label}`}
            key={`thumb-${index}`}
            onClick={() => {
              setIsOpen(true)
              slider.current!.slickGoTo(index, true)
            }}
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

        <S.Content>
          <Slider ref={slider} settings={modalSettings}>
            {items.map((item) => (
              <img
                src={item.src}
                alt={item.label}
                key={`Gallery-${item.src}`}
              />
            ))}
          </Slider>
        </S.Content>
      </S.Modal>
    </S.Wrapper>
  )
}
