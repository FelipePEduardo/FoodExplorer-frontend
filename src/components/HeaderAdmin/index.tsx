import { List, MagnifyingGlass, SignOut } from "@phosphor-icons/react";
import { HeaderAdminContainer, HeaderAdminContent, InputContainer, LogoContainer, MenuButton, RequestsButton, SignOutContainer } from "./styles";
import { Logo } from "../Logo";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { ChangeEvent } from "react"

interface HeaderAdminProps {
  onSearch?: (e: ChangeEvent<HTMLInputElement>) => void
}
export function HeaderAdmin({ onSearch }: HeaderAdminProps) {
  const navigate = useNavigate()
  const { signOut } = useAuth()

  function handleNavigateToCreatePlate() {
    navigate('/createPlate')
  }

  function handleNavigateToMenu() {
    navigate('/menu')
  }

  function handleSignOut() {
    signOut()
    navigate('/')
  }

  return (
    <HeaderAdminContainer>
      <HeaderAdminContent>
        <MenuButton onClick={handleNavigateToMenu}>
          <List size={24}/>
        </MenuButton>

        <LogoContainer>
          <Logo />
          <span>admin</span>
        </LogoContainer>

        <InputContainer>
          <MagnifyingGlass size={24}/>
          <input 
            type="text" 
            placeholder="Busque por pratos ou ingredientes"
            onChange={onSearch}  
          />
        </InputContainer>

        <RequestsButton onClick={handleNavigateToCreatePlate}>
          <span>Novo prato</span>
        </RequestsButton>

        <SignOutContainer onClick={handleSignOut}>
          <SignOut size={24}/>
        </SignOutContainer>
      </HeaderAdminContent>
    </HeaderAdminContainer>
  )
}