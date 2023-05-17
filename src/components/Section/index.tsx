import { ReactNode } from "react";
import { SectionContainer } from "./styles";

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

interface SectionProps {
  children: ReactNode
  title: string
}

export function Section({ children, title }: SectionProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 1.6,
      spacing: 16
    },
    breakpoints: {
      '(min-width: 450px)': {
        slides: {
          perView: 1.9,
          spacing: 16
        },
      },
      '(min-width: 550px)': {
        slides: {
          perView: 2.3,
          spacing: 16
        },
      },
      '(min-width: 650px)': {
        slides: {
          perView: 2.7,
          spacing: 16
        },
      },
      '(min-width: 750px)': {
        slides: {
          perView: 3.2,
          spacing: 16
        },
      },
      '(min-width: 850px)': {
        slides: {
          perView: 3.7,
          spacing: 16
        },
      },
      '(min-width: 950px)': {
        slides: {
          perView: 4,
          spacing: 16
        },
      },
      '(min-width: 1160px)': {
        slides: {
          perView: 3.5,
          spacing: 27
        },
      },
    },
  })

  return (
    <SectionContainer>
      <h2>{title}</h2>
      <div ref={sliderRef} className="keen-slider">
        {children}
      </div>
    </SectionContainer>
  )
}