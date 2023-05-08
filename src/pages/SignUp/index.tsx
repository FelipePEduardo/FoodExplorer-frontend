import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { Form, SignUpContainer, SignUpContent } from "./styles";

import { NavLink, useNavigate } from 'react-router-dom'
import { useState, FormEvent } from 'react'
import { api } from "../../services/api";

interface Error {
  response: {
    data: {
      message: string
    }
  }
}

export function SignUp() {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const navigate = useNavigate()

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if(!name || !email || !password) {
      return alert("Preencha todos os campos!")
    }

    api.post("/users", {name, email, password})
      .then(() => {
        alert("Usuário cadastrado com sucesso!")
        navigate('/')
      })
      .catch((err: Error) => {
        if(err.response) {
          alert(err.response.data.message)
        } else {
          alert("Não foi possível cadastrar")
        }
      })
  }

  return (
    <SignUpContainer>
      <SignUpContent>
        <Logo />

        <Form onSubmit={handleSubmit}>
          <h2>Crie sua conta</h2>

          <div>
            <label htmlFor="">Seu nome</label>
            <Input 
              type="text" 
              placeholder="Exemplo: Maria da Silva"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          
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

          <Button type="submit" title="Criar conta"/>

          <NavLink to="/">Já tenho uma conta</NavLink>
        </Form>
      </SignUpContent>
    </SignUpContainer>
  )
}