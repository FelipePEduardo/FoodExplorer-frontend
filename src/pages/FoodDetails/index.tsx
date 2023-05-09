import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Quantity } from "../../components/Quantity";
import { ButtonContainerAdmin, ButtonsContainer, FoodDetailsContainer, FoodDetailsContent, PlateContainer, TagsContainer } from "./styles";
import { CaretLeft, Receipt } from '@phosphor-icons/react'
import FoodImage from '../../assets/foods/ravanello.png'
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { HeaderAdmin } from "../../components/HeaderAdmin";

export function FoodDetails() {
  const navigate = useNavigate()
  const { user } = useAuth()
  
  function handleNavigateBack() {
    navigate(-1)
  }

  function handleNavigate() {
    navigate('/editPlate')
  }

  return (
    <>
      {
        user.is_admin ? <FoodDetailsContainer>
        <HeaderAdmin />
  
        <FoodDetailsContent>
          <button onClick={handleNavigateBack}>
            <CaretLeft />  voltar
          </button>
  
          <PlateContainer>
            <img src={FoodImage} alt="" />
  
            <div>
              <h2>Salada Ravanello</h2>
              <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>
  
              <TagsContainer>
                <span>alface</span>
                <span>cebola</span>
                <span>pão naan</span>
                <span>pepino</span>
                <span>rabanete</span>
                <span>tomate</span>
              </TagsContainer>
  
              <span>R$25,00</span>

              <ButtonContainerAdmin>
                <Button title="Editar prato" onClick={handleNavigate}/>
              </ButtonContainerAdmin>
            </div>
          </PlateContainer>
        </FoodDetailsContent>
  
        <Footer />
      </FoodDetailsContainer>
      : 
      <FoodDetailsContainer>
        <Header />

        <FoodDetailsContent>
          <button onClick={handleNavigateBack}>
            <CaretLeft />  voltar
          </button>

          <PlateContainer>
            <img src={FoodImage} alt="" />

            <div>
              <h2>Salada Ravanello</h2>
              <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>

              <TagsContainer>
                <span>alface</span>
                <span>cebola</span>
                <span>pão naan</span>
                <span>pepino</span>
                <span>rabanete</span>
                <span>tomate</span>
              </TagsContainer>

              <span>R$25,00</span>

              <ButtonsContainer>
                <Quantity />

                <Button title="pedir">
                  <Receipt size={22}/>
                </Button>
              </ButtonsContainer>
            </div>
          </PlateContainer>
        </FoodDetailsContent>

        <Footer />
      </FoodDetailsContainer>
      }
    </>
  )
}