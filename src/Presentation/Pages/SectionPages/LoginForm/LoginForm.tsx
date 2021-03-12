import React from 'react'
import {Wrapper, Container, ContainerImage} from './LoginForm.style'
import {Link} from 'react-router-dom'
import Input from '../../../Components/Input/Input'
import { useForm } from "react-hook-form";
import Button from '../../../Components/Button/Button'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { UserContext } from '../../../../Main/Context/userContext'

const schema = yup.object().shape({
  login: yup.string().email().required(),
  password: yup.string().required().min(8)
})

const LoginForm:React.FC<any> = () =>{
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  });
  const { login, loading, errorMessage } = React.useContext(UserContext)
  
  return(
    <Wrapper>
      <ContainerImage />
      <Container>
        <h1>Login</h1>
        <form 
        onSubmit={handleSubmit(login)}>
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