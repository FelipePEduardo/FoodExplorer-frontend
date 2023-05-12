import { List, Receipt, MagnifyingGlass, SignOut } from "@phosphor-icons/react";
import { Logo } from "../Logo";
import { HeaderContainer, HeaderContent, InputContainer, LogoContainer, MenuButton, RequestsButton, SignOutContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

interface HeaderProps {
  setSearch?: (value: string) => void
}

export function Header({ setSearch }: HeaderProps) {
  const navigate = useNavigate()
  const { signOut } = useAuth()

  function handleNavigate() {
    navigate('/menu')
  }

  function handleSignOut() {
    signOut()
    navigate('/')
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
          <input 
            type="text" 
            placeholder="Busque por pratos ou ingredientes"
            onChange={e => setSearch!(e.target.value)}
          />
        </InputContainer>

        <RequestsButton>
          <span>0</span>
          <Receipt size={24}/>
          <span>Pedidos &#40;0&#41;</span>
        </RequestsButton>

        <SignOutContainer onClick={handleSignOut}>
          <SignOut size={24}/>
        </SignOutContainer>
      </HeaderContent>
    </HeaderContainer>
  )
}