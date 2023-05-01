import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { Form, SignUpContainer, SignUpContent } from "./styles";

import { NavLink } from 'react-router-dom'


export function SignUp() {
  return (
    <SignUpContainer>
      <SignUpContent>
        <Logo />

        <Form>
          <h2>Crie sua conta</h2>

          <div>
            <label htmlFor="">Seu nome</label>
            <Input type="text" placeholder="Exemplo: Maria da Silva"/>
          </div>
          
          <div>
            <label htmlFor="">Email</label>
            <Input type="email" placeholder="Exemplo: exemplo@exemplo.com.br"/>
          </div>

          <div>
            <label htmlFor="">Senha</label>
            <Input type="password" placeholder="No mínimo 6 caracteres"/>
          </div>

          <Button type="submit" title="Criar conta"/>

          <NavLink to="/">Já tenho uma conta</NavLink>
        </Form>
      </SignUpContent>
    </SignUpContainer>
  )
}