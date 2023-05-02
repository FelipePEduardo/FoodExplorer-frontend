import { List, MagnifyingGlass, SignOut } from "@phosphor-icons/react";
import { HeaderAdminContainer, HeaderAdminContent, InputContainer, LogoContainer, MenuButton, RequestsButton, SignOutContainer } from "./styles";
import { Logo } from "../Logo";
import { useNavigate } from "react-router-dom";

export function HeaderAdmin() {
  const navigate = useNavigate()

  function handleNavigate() {
    navigate('/createPlate')
  }

  return (
    <HeaderAdminContainer>
      <HeaderAdminContent>
        <MenuButton>
          <List size={24}/>
        </MenuButton>

        <LogoContainer>
          <Logo />
          <span>admin</span>
        </LogoContainer>

        <InputContainer>
          <MagnifyingGlass size={24}/>
          <input type="text" placeholder="Busque por pratos ou ingredientes"/>
        </InputContainer>

        <RequestsButton onClick={handleNavigate}>
          <span>Novo prato</span>
        </RequestsButton>

        <SignOutContainer>
          <SignOut size={24}/>
        </SignOutContainer>
      </HeaderAdminContent>
    </HeaderAdminContainer>
  )
}