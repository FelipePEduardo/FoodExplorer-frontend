import { ReactNode, createContext, useContext, useEffect, useState, ChangeEvent } from "react";
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
  signOut: () => void
  user: UserProps
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [data, setData] = useState({} as DataProps)

  async function signIn({ email, password }: SignInProps) {
    try {
      const response = await api.post('/sessions', { email, password })
      const { user, token }: DataProps = response.data
      
      localStorage.setItem('@foodexplorer:user', JSON.stringify(user))
      localStorage.setItem('@foodexplorer:token', token)

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
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

  function signOut() {
    localStorage.removeItem('@foodexplorer:token')
    localStorage.removeItem('@foodexplorer:user')

    setData({} as DataProps)
  }

  useEffect(() => {
    const token = localStorage.getItem('@foodexplorer:token')
    const user = localStorage.getItem('@foodexplorer:user')

    if(token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({
        token, 
        user: JSON.parse(user)
      })
    }
  }, [])

  return (
    <AuthContext.Provider value={{ signIn, signOut, user: data.user }}>
      { children }
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  return context
}