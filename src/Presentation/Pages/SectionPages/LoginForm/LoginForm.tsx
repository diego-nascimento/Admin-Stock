import React from 'react'
import {Wrapper, Container, ContainerImage} from './LoginForm.style'
import {Link} from 'react-router-dom'
import Input from '../../../Components/Input/Input'
import { useForm } from "react-hook-form";
import Button from '../../../Components/Button/Button'

import {LoginFactory} from '../../../../Main/Factory/Section/LoginFactory' 

import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'


interface ILogin{
  login: string,
  password: string
}

const schema = yup.object().shape({
  login: yup.string().email().required(),
  password: yup.string().required().min(8)
})

const LoginForm:React.FC = ({history}:any) =>{
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  });
  const [loading, setLoading] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState('')

  const onSubmit = async (data: ILogin) =>{
    setLoading(true)
    try {
      const Login = LoginFactory()
      const response = await Login.login(data)
      console.log(response)
    }catch (error) {
        setErrorMessage('Login or User incorrect')
        setTimeout(()=>{
          setErrorMessage('')
        }, 5000)
    }finally{
      setLoading(false)
    }
  }
  

  return(
    <Wrapper>
      <ContainerImage />
      <Container>
        <h1>Login</h1>
        <form 
        onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            placeholder="Login" 
            name="login" 
            error={errors['login'] ? errors['login'].message: '' } 
            register={register({ required: true, })}
          />
          <Input type="password"
            placeholder="Senha"
            name="password"
            error={errors['password'] ? errors['password'].message : ''}
            register={register({ required: true, minLength: 2 })}
          />
          <Button type='submit' loading={loading}>
            Logar
          </Button>
          <p>{errorMessage}</p>
        </form>
        <Link to="/signup">Criar Conta</Link>
      </Container>
    </Wrapper>
    
  );
}

export default LoginForm