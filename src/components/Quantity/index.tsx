import { Minus, Plus } from "@phosphor-icons/react";
import { QuantityContainer } from "./styles"

interface QuantityProps {
  onIncrease: () => void
  onDecrease:  () => void
  quantity: number
}

export function Quantity({ onDecrease, onIncrease, quantity }: QuantityProps) {
  return (
    <QuantityContainer>
      <button onClick={onDecrease}>
        <Minus size={24}/>
      </button>

      <span>{quantity}</span>

      <button onClick={onIncrease}>
        <Plus size={24}/>
      </button>   
    </QuantityContainer>
  )
}