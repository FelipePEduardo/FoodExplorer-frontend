import { CardContainer } from "./styles";
import { PencilSimple, CaretRight } from "@phosphor-icons/react"
import parmaImg from '../../assets/foods/parma.png'
import { NavLink } from "react-router-dom";

export function FoodCardAdmin() {
  return (
    <CardContainer className="keen-slider__slide">
      <button>
        <PencilSimple size={24}/>
      </button>

      <img src={parmaImg} alt="" />

      <NavLink to={`/foodDetails`}>Salada Ravanello <CaretRight /></NavLink>

      <p>Presunto de parma e rúcula em um pão com fermentação natural.</p>

      <span>R$ 49,97</span>
    </CardContainer>
  )
}