import { Form, SignInContainer, SignInContent } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { NavLink } from 'react-router-dom'
import { Logo } from "../../components/Logo";

export function SignIn() {
  return (
    <SignInContainer>
      <SignInContent>
        <Logo />

        <Form>
          <h2>Faça login</h2>
          
          <div>
            <label htmlFor="">Email</label>
            <Input type="email" placeholder="Exemplo: exemplo@exemplo.com.br"/>
          </div>
          
          <div>
            <label htmlFor="">Senha</label>
            <Input type="password" placeholder="No mínimo 6 caracteres"/>
          </div>

          <Button type="submit" title="Entrar"/>

          <NavLink to="/register">Criar uma conta</NavLink>
        </Form>
      </SignInContent>
    </SignInContainer>
  )
}