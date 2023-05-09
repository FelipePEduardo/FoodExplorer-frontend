import { MagnifyingGlass, X } from "@phosphor-icons/react";
import { Footer } from "../../components/Footer";
import { HeaderContainer, InputContainer, MenuContainer, MenuContent } from "./styles";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

export function Menu() {
  const navigate = useNavigate()
  const { user, signOut } = useAuth()

  function handleNavigateBack() {
    navigate(-1)
  }

  function handleNavigate() {
    navigate('/createPlate')
  }

  function handleSignOut() {
    navigate('/')
    signOut()
  }

  return (
    <>
      {
        user.is_admin ? <MenuContainer>
        <HeaderContainer>
          <button onClick={handleNavigateBack}>
            <X size={24}/>
          </button>
          <span>Menu</span>
        </HeaderContainer>
  
        <MenuContent>
          <form action="">
            <InputContainer>
              <MagnifyingGlass size={24}/>
              <input type="text" placeholder="Busque por pratos ou ingredientes"/>
            </InputContainer>
          </form>
  
          <button onClick={handleNavigate}>
            Novo prato
          </button>
  
          <button onClick={handleSignOut}>
            Sair
          </button>
        </MenuContent>
  
        <Footer />
      </MenuContainer>
      : 
      <MenuContainer>
        <HeaderContainer>
          <button onClick={handleNavigateBack}>
            <X size={24}/>
          </button>
          <span>Menu</span>
        </HeaderContainer>

        <MenuContent>
          <form action="">
            <InputContainer>
              <MagnifyingGlass size={24}/>
              <input type="text" placeholder="Busque por pratos ou ingredientes"/>
            </InputContainer>
          </form>

          <button onClick={handleSignOut}>
            Sair
          </button>
        </MenuContent>

        <Footer />
      </MenuContainer>
      }
    </>
  )
}