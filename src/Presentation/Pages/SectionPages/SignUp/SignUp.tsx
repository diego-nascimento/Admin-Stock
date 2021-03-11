import React from 'react'
import {Wrapper, Container, ContainerImage} from './SignUp.style'
import {Link} from 'react-router-dom'
import Input from '../../../Components/Input/Input'
import { useForm } from "react-hook-form";
import Button from '../../../Components/Button/Button'
import {BiArrowBack} from 'react-icons/bi'
import {SignUpFactory} from '../../../../Main/Factory/Section/SignUpFactory'
import { ISignUpEntry } from '../../../../Domain/useCases/Section/SignUp';
import { User } from '../../../../Domain/protocols/User/user';
import MessageSuccess from './MessageSucess'

import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'


const schema = yup.object().shape({
  nome: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).required()
})



const SignUp:React.FC = ({history}:any) =>{
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  });
  const [loading, setLoading] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState('')
  const [user, setUser] = React.useState<null | User>(null)


  const onSubmit = async (data: ISignUpEntry) =>{
    setLoading(true)
    try {
      const signUp = SignUpFactory()
      const response = await signUp.signup(data)
      const usuario:User = {
        email: response.email,
        nome: response.nome
      }
      setUser(usuario)
    }catch (error) {
        setErrorMessage(error.message)
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
      {user?
        <MessageSuccess data={user}/>
        :<Container>
          <div className="back">
            <Link to="/"><BiArrowBack /><h2>Login</h2></Link>
            </div>
          <h1>Cadastro</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input type="text" 
              placeholder="nome" 
              name="nome" 
              error={errors['nome'] ? errors['nome'].message: '' } 
              register={register({required: true, })}
            />
            <Input type="text" 
              placeholder="email" 
              name="email" 
              error={errors['email'] ? errors['email'].message: '' } 
              register={register({required: true, })}
            />
            <Input type="password"placeholder="Senha" name="password" error={errors['password'] ? errors['password'].message: '' }  register={register({required:true, minLength: 2})}/>
            <Button type='submit' loading={loading}>Criar Conta</Button>
            <p>{errorMessage}</p>
          </form>
        </Container>}
      
    </Wrapper>
    
  );
}

export default SignUp