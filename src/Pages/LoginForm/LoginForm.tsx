import React from 'react'
import {Wrapper, Container, ContainerImage} from './LoginForm.style'
import {Link} from 'react-router-dom'
import Input from '../../Components/Input/Input'
import { useForm } from "react-hook-form";
import Button from '../../Components/Button/Button'
import {api} from '../../services/api'


interface ILogin{
  login: string,
  password: string
}

const LoginForm:React.FC = ({history}:any) =>{
  const { register, handleSubmit, errors } = useForm();
  const [loading, setLoading] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState('')

  const onSubmit = async (data: ILogin) =>{
    setLoading(true)
    try {
      const response = await api.post('signin', {
        login: data.login,
        password: data.password
      })
      console.log(response.data)
      localStorage.setItem('token', response.data.data.token)
      history.push('/signup')
    }catch (error) {
        setErrorMessage(error.response.data)
        setTimeout(()=>{
          setErrorMessage('')
        }, 5000)
    }finally{
      setLoading(false)
    }
  }
  

  return(
    <Wrapper>
      <ContainerImage>
        
      </ContainerImage>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input type="text" 
            placeholder="Login" 
            name="login" 
            error={errors['login'] ? 'Campo obrigatorio': '' } 
            register={register({required: true, })}/>
          <Input type="password"placeholder="Senha" name="password" error={errors['password'] ? 'Campo obrigatorio': '' }  register={register({required:true, minLength: 2})}/>
          <Button type='submit' loading={loading}>Logar</Button>
          <p>{errorMessage}</p>
        </form>
        <Link to="/signup">Criar Conta</Link>
      </Container>
    </Wrapper>
    
  );
}

export default LoginForm