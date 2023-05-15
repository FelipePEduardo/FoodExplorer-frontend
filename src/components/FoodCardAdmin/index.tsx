import { CardContainer } from "./styles";
import { PencilSimple, CaretRight } from "@phosphor-icons/react"
import { NavLink, useNavigate } from "react-router-dom";
import { api } from "../../services/api";

interface FoodCardAdminProps {
  meal: {
    id: number
    image: string
    name: string
    price:  string
    description: string
  }
}

export function FoodCardAdmin({ meal }: FoodCardAdminProps) {
  const navigate = useNavigate()
  const imageURl = `${api.defaults.baseURL}/files/${meal.image}`

  function handleNavigate() {
    navigate(`/editPlate/${meal.id}`)
  }

  return (
    <CardContainer className="keen-slider__slide">
      <button onClick={handleNavigate}>
        <PencilSimple size={24}/>
      </button>

      <img src={imageURl} alt="" />

      <NavLink to={`/foodDetails/${meal.id}`}>{meal.name} <CaretRight /></NavLink>

      <p>{meal.description}</p>

      <span>R$ {meal.price}</span>
    </CardContainer>
  )
}