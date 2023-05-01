import { Minus, Plus } from "@phosphor-icons/react";
import { QuantityContainer } from "./styles";

export function Quantity() {
  return (
    <QuantityContainer>
      <button>
        <Minus size={24}/>
      </button>

      <span>01</span>

      <button>
        <Plus size={24}/>
      </button>   
    </QuantityContainer>
  )
}