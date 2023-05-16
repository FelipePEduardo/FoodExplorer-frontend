import { List, Receipt, MagnifyingGlass, SignOut } from "@phosphor-icons/react";
import { Logo } from "../Logo";
import { HeaderContainer, HeaderContent, InputContainer, LogoContainer, MenuButton, RequestsButton, SignOutContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { ChangeEvent } from "react"

interface HeaderProps {
  onSearch?: (e: ChangeEvent<HTMLInputElement>) => void
  productsInCart?: number
}

export function Header({ onSearch, productsInCart }: HeaderProps) {
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
            onChange={onSearch}
          />
        </InputContainer>

        <RequestsButton>
          <span>{productsInCart}</span>
          <Receipt size={24}/>
          <span>Pedidos &#40;{productsInCart}&#41;</span>
        </RequestsButton>

        <SignOutContainer onClick={handleSignOut}>
          <SignOut size={24}/>
        </SignOutContainer>
      </HeaderContent>
    </HeaderContainer>
  )
}