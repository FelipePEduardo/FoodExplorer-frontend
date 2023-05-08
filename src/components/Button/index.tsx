import { ButtonContainer } from "./styles";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ title, type, children, disabled, onClick }:ButtonProps) {
  return (
    <ButtonContainer type={type} disabled={disabled} onClick={onClick}>
      {children}
      {title}
    </ButtonContainer>
  )
}