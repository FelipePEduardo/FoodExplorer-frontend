import { CardContainer } from "./styles";
import { Heart,CaretRight } from "@phosphor-icons/react"
import { Quantity } from "../Quantity";
import { Button } from "../Button";
import { NavLink } from "react-router-dom";
import { api } from "../../services/api";
import { useState } from "react";

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


interface FoodCardAdminProps {
  meal: Meal
  onAddToCart: (meal: Meal) => void
}

export function FoodCard({ meal, onAddToCart }: FoodCardAdminProps) {
  const [quantity, setQuantity] = useState<number>(1)
  const [favorite, setFavorite] = useState<boolean>(false)

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
  
  function handleAddFavorite() {
    setFavorite(state => !state)
  }

  const imageURl = `${api.defaults.baseURL}/files/${meal.image}`

  return (
    <CardContainer className="keen-slider__slide">
      <button onClick={handleAddFavorite}>
        {
          favorite == false ? <Heart size={24}/> : <Heart weight="fill" size={24}/>
        }
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
          onClick={() => onAddToCart(meal)}
        />
      </div>
    </CardContainer>
  )
}