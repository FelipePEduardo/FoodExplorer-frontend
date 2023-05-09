import { Form, SignInContainer, SignInContent } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { NavLink } from 'react-router-dom'
import { Logo } from "../../components/Logo";
import { useAuth } from "../../hooks/auth";
import { FormEvent, useState } from "react";

export function SignIn() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const { signIn } = useAuth()

  function handleSignIn(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    signIn({ email, password })
  }

  return (
    <SignInContainer>
      <SignInContent>
        <Logo />

        <Form onSubmit={handleSignIn}>
          <h2>Faça login</h2>
          
          <div>
            <label htmlFor="">Email</label>
            <Input 
              type="email" 
              placeholder="Exemplo: exemplo@exemplo.com.br"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div>
            <label htmlFor="">Senha</label>
            <Input 
              type="password"
              placeholder="No mínimo 6 caracteres"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button type="submit" title="Entrar"/>

          <NavLink to="register">Criar uma conta</NavLink>
        </Form>
      </SignInContent>
    </SignInContainer>
  )
}