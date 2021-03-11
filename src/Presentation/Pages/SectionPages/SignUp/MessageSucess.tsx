import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { User } from '../../../../Domain/protocols/User/user'
import {Container} from './SignUp.style'

interface IMessageSuccess{
  data: User
}

const MessageSuccess: React.FC<IMessageSuccess> = ({data})=>{
  return(
    <Container>
      <div className="back">
        <Link to="/"><BiArrowBack /><h2>Login</h2></Link>
        </div>
        <h1>Sucesso</h1>
      <div className="success">
        <h2>Obrigado por se cadastrar!!!!</h2>
        <p>{data.nome}</p>

        <p>Um email foi enviado para {data.email}.</p>
      </div>  
    </Container>
  )
}

export default MessageSuccess