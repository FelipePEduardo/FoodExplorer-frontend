import { MagnifyingGlass, X } from "@phosphor-icons/react";
import { Footer } from "../../components/Footer";
import { HeaderContainer, InputContainer, MenuContainer, MenuContent } from "./styles";
import { useNavigate } from "react-router-dom";

export function Menu() {
  const navigate = useNavigate()

  function handleNavigate() {
    navigate(-1)
  }

  return (
    <MenuContainer>
      <HeaderContainer>
        <button onClick={handleNavigate}>
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

        {/* <button>
          Novo prato
        </button> */}

        <button>
          Sair
        </button>
      </MenuContent>

      <Footer />
    </MenuContainer>
  )
}