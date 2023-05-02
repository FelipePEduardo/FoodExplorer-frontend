import { List, Receipt, MagnifyingGlass, SignOut } from "@phosphor-icons/react";
import { Logo } from "../Logo";
import { HeaderContainer, HeaderContent, InputContainer, LogoContainer, MenuButton, RequestsButton, SignOutContainer } from "./styles";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate()

  function handleNavigate() {
    navigate('/menu')
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <MenuButton onClick={handleNavigate}>
          <List size={24}/>
        </MenuButton>

        <LogoContainer>
          <Logo />
        </LogoContainer>

        <InputContainer>
          <MagnifyingGlass size={24}/>
          <input type="text" placeholder="Busque por pratos ou ingredientes"/>
        </InputContainer>

        <RequestsButton>
          <span>0</span>
          <Receipt size={24}/>
          <span>Pedidos &#40;0&#41;</span>
        </RequestsButton>

        <SignOutContainer>
          <SignOut size={24}/>
        </SignOutContainer>
      </HeaderContent>
    </HeaderContainer>
  )
}