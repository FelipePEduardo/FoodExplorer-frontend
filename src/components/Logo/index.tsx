import { NavLink } from 'react-router-dom'
import logoFoodExplorer from '../../assets/logoFoodExplorer.svg'
import { LogoContainer } from './styles'

export function Logo() {
  return (
    <LogoContainer>
      <NavLink to="/">
        <img src={logoFoodExplorer} alt="" />
        <span>food explorer</span>
      </NavLink>
    </LogoContainer>
  )
}