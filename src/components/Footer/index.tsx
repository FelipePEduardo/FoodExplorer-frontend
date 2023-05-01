import { Logo } from "../Logo";
import { FooterContainer, FooterContent } from "./styles";

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <Logo />
        <p>© 2023 - Todos os direitos reservados.</p>
      </FooterContent>
    </FooterContainer>
  )
}