import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Quantity } from "../../components/Quantity";
import { ButtonContainerAdmin, ButtonsContainer, FoodDetailsContainer, FoodDetailsContent, PlateContainer, TagsContainer } from "./styles";
import { CaretLeft, Receipt } from '@phosphor-icons/react'
import { Button } from "../../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { HeaderAdmin } from "../../components/HeaderAdmin";
import { useEffect, useState } from "react"
import { api } from "../../services/api";

interface Meal {
  id: number
  image: string
  name: string
  category: string
  ingredients: {
    id: number
    name: string
  }[]
  price:  string
  description: string
}

export function FoodDetails() {
  const [meal, setMeal] = useState({} as Meal)

  const navigate = useNavigate()
  const { id } = useParams()
  const { user } = useAuth()

  const imageURl = `${api.defaults.baseURL}/files/${meal.image}`
  
  function handleNavigateBack() {
    navigate(-1)
  }

  function handleNavigate() {
    navigate(`/editPlate/${meal.id}`)
  }

  useEffect(() => {
    async function fetchMeal() {
      const response = await api.get(`/meals/${id}`)

      setMeal(response.data)
    }

    fetchMeal()
  }, [])

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
            <img src={imageURl} alt="" />
  
            <div>
              <h2>{meal.name}</h2>
              <p>{meal.description}</p>
  
              <TagsContainer>
                {
                  meal.ingredients?.map( item => <span key={item.id}>{item.name}</span>)
                }
              </TagsContainer>
  
              <span>R$ {meal.price}</span>

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
            <img src={imageURl} alt="" />

            <div>
              <h2>{meal.name}</h2>
              <p>{meal.description}</p>

              <TagsContainer>
                {
                  meal.ingredients?.map( item => <span key={item.id}>{item.name}</span>)
                }
              </TagsContainer>

              <span>R$ {meal.price}</span>

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