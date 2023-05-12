import { CardContainer } from "./styles";
import { Heart, CaretRight } from "@phosphor-icons/react"
import { Quantity } from "../Quantity";
import { Button } from "../Button";
import { NavLink } from "react-router-dom";
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


export function FoodCard({ meal }: FoodCardAdminProps) {
  const imageURl = `${api.defaults.baseURL}/files/${meal.image}`

  return (
    <CardContainer className="keen-slider__slide">
      <button>
        <Heart size={24}/>
      </button>

      <img src={imageURl} alt="" />

      <NavLink to={`/foodDetails/${meal.id}`}>{meal.name} <CaretRight /></NavLink>

      <p>{meal.description}</p>

      <span>R$ {meal.price}</span>

      <div>
        <Quantity />
        <Button title="incluir"/>
      </div>
    </CardContainer>
  )
}