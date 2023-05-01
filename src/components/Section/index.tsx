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
    slides : {
      perView: 1,
      spacing: 40
    },
    breakpoints: {
      '(min-width: 424px)': {
        slides : {
          perView: 2
        },
      },

      '(min-width: 612px)': {
        slides : {
          perView: 3
        },
      },

      '(min-width: 800px)': {
        slides : {
          perView: 4
        },
      }
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