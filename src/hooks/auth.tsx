import { ReactNode, createContext, useContext, useState } from "react";
import { api } from "../services/api";

interface AuthContextProviderProps {
  children: ReactNode
}

interface Error {
  response: {
    data: {
      message: string
    }
  }
}

interface SignInProps {
  email: string
  password: string
}

interface UserProps {
  id: number
  name: string
  email: string
  password: string
  is_admin: boolean
  created_at: string
}

interface DataProps {
  user: UserProps
  token: string
}

interface AuthContextType {
  signIn: ({ email, password }: SignInProps) => void
  user: UserProps
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [data, setData] = useState({} as DataProps)

  async function signIn({ email, password }: SignInProps) {
    try {
      const response = await api.post('/sessions', { email, password })
      const { user, token }: DataProps = response.data

      api.defaults.headers.authorization = `Bearer ${token}`
      setData({ user, token })

    }catch(err) {
      const typedError = err as Error
      if(typedError.response) {
        alert(typedError.response.data.message)
      } else {
        alert("Não foi possível entrar")
      }
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, user: data.user }}>
      { children }
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  return context
}