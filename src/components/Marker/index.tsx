import { MarkersContainer } from "./styles"
import { Plus, X } from '@phosphor-icons/react'
import { ChangeEvent } from "react";

interface MarkersProps {
  isNew?: boolean
  placeholder?: string
  value: string
  onChange?: (e:ChangeEvent<HTMLInputElement>) => void
  onClick?: () => void
}

export function Markers({ isNew, placeholder, value, onChange, onClick }: MarkersProps) {
  return (
    <MarkersContainer isNew={isNew}>
      <input 
        type="text"
        placeholder={placeholder}
        value={value}
        readOnly={!isNew}
        onChange={onChange}
      />
    
      <button type="button" onClick={onClick}>
        { isNew ? <Plus size={16} /> : <X size={16} /> }
      </button>
    </MarkersContainer>
  )
}