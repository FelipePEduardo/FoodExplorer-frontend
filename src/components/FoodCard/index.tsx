import { CardContainer } from "./styles";
import { Heart, CaretRight } from "@phosphor-icons/react"
import { Quantity } from "../Quantity";
import { Button } from "../Button";
import { NavLink } from "react-router-dom";
import { api } from "../../services/api";
import { useState } from "react";

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
  const [quantity, setQuantity] = useState(1)

  function handleIncreaseQuantity() {
    if(quantity < 9) {
      setQuantity(state => state + 1)
    }
  }

  function handleDecreaseQuantity() {
    if(quantity > 1) {
      setQuantity(state => state - 1)
    }
  }

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
        <Quantity 
          onIncrease={handleIncreaseQuantity}
          onDecrease={handleDecreaseQuantity}
          quantity={quantity}
        />
        <Button 
          title="incluir"
        />
      </div>
    </CardContainer>
  )
}