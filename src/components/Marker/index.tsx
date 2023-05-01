import { MarkersContainer } from "./styles"
import { Plus, X } from '@phosphor-icons/react'

interface MarkersProps {
  isNew?: boolean
}

export function Markers({ isNew }: MarkersProps) {
  return (
    <MarkersContainer isNew={isNew}>
      <input 
        type="text"
        placeholder="Adicionar"
        readOnly={!isNew}
      />
    
      <button type="button">
      { isNew ? <Plus size={16} /> : <X size={16} /> }
      </button>
    </MarkersContainer>
  )
}