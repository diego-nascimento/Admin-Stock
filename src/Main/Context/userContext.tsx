import React from 'react'
import { User } from '../../Domain/protocols/User/user'
import { ILoginEntry } from '../../Domain/useCases/Section/Login'
import { LoginFactory } from '../../Main/Factory/Section/LoginFactory'
import { useHistory } from 'react-router-dom'
import {SignUpFactory} from '../../Main/Factory/Section/SignUpFactory'
import { ISignUpEntry } from '../../Domain/useCases/Section/SignUp';
import {authFactory} from '../Factory/Section/AuthenticationFactory'

interface userContext {
  login: any,
  logout: any
  signupMethod: any,
  loading: boolean,
  errorMessage: string
  user: User | null
}


export const UserContext = React.createContext<userContext>({
  errorMessage: '',
  loading: false,
  login: () => { },
  logout: () => { },
  signupMethod: () => { },
  user: null,
})



export const UserStorage: React.FC = ({ children }) => {
  const [loading, setLoading] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState('')
  const [user, setUser] = React.useState<User | null>(null)
  const history = useHistory()

  
  React.useEffect(() => {
    autoLogin()
  }, [])
  

  const autoLogin = async () => {
        const token = localStorage.getItem('token')
        if (token) {
          const auth = authFactory()
          console.log(token)
          const response = await auth.auth(token)
          setUser(response)
          history.push('/estoque/produtos')
        } else {
          history.push('/')
        }
    }

  const login = async (data: ILoginEntry) =>{
    setLoading(true)
    try {
      const Login = LoginFactory()
      const response = await Login.login(data)
      
      if (response.user) {
        localStorage.setItem('user', JSON.stringify(response.user))
        setUser(response.user)
      }
      if (response.token) {
        localStorage.setItem('token', response.token)
        
        history.push('/estoque/produtos')
      }
    } catch (error) {
        setErrorMessage('Usuario ou senha Incorretos')
        setTimeout(()=>{
          setErrorMessage('')
        }, 5000)
    }finally{
      setLoading(false)
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    history.push('/')
  }

  const signupMethod = async (data: ISignUpEntry, setUserMessage: any) =>{
    setLoading(true)
    try {
      const signUp = SignUpFactory()
      const response = await signUp.signup(data)
      const usuario:User = {
        email: response.email,
        nome: response.nome
      }
      setUserMessage(usuario)
    } catch (error) {
        setErrorMessage(error.response)
        setTimeout(()=>{
        setErrorMessage('')
        }, 5000)
    }finally{
      setLoading(false)
    }
  }

  return (
    <UserContext.Provider value={{login, signupMethod, logout, loading, errorMessage, user}}>
      {children}
    </UserContext.Provider>
  )
}