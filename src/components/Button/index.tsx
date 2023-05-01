import { ButtonContainer } from "./styles";
import { ButtonHTMLAttributes } from "react";


/* interface ButtonProps {
  title: string
  type?: 'submit' | 'reset' | 'button'
  children?: ReactNode
} */

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ title, type, children, disabled }:ButtonProps) {
  return (
    <ButtonContainer type={type} disabled={disabled}>
      {children}
      {title}
    </ButtonContainer>
  )
}