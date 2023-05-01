import { CardContainer } from "./styles";
import { Heart, CaretRight } from "@phosphor-icons/react"
import parmaImg from '../../assets/foods/parma.png'
import { Quantity } from "../Quantity";
import { Button } from "../Button";
import { NavLink } from "react-router-dom";

export function FoodCard() {
  return (
    <CardContainer className="keen-slider__slide">
      <button>
        <Heart size={24}/>
      </button>

      <img src={parmaImg} alt="" />

      <NavLink to={`/foodDetails`}>Salada Ravanello <CaretRight /></NavLink>

      <p>Presunto de parma e rúcula em um pão com fermentação natural.</p>

      <span>R$ 49,97</span>

      <div>
        <Quantity />
        <Button title="incluir"/>
      </div>
    </CardContainer>
  )
}