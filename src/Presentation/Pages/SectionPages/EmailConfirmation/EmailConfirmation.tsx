import React from 'react'
import queryString from 'querystring'
import {VerifyAccountFactory} from '../../../../Main/Factory/Section/AccountVerification'
import {Wrapper, Container} from './EmailConfirmation.style'
import { Link } from 'react-router-dom'
import Button  from '../../../Components/Button/Button'

const EmailConfirmation:React.FC = ({location}:any) =>{
  const [Verificationcode, setVerificationCode] = React.useState<any>(null)
  const [verified, setVerified] = React.useState<boolean | null>(false)
  
  React.useEffect(()=>{
    const UrlQueryString = location.search
    const queryValues = queryString.decode(UrlQueryString)
    setVerificationCode(queryValues['?code'])
  }, [location.search])

  React.useEffect(()=>{
    const verify = async ()=>{
      
      try {
        const verify = VerifyAccountFactory()
        const response = await verify.verifyAccount({code: Verificationcode})
        if(response){
          setVerified(true)
        }
      } catch (error) {
        setVerified(false)
      }
      
    }
    if(verified){
      return 
    }
    if(Verificationcode !== null){
      verify()
    }
  }, [Verificationcode, verified])


  return (
    <Wrapper>
      <h1>Confirmação de Email</h1>
      {verified? <Container>
          <h2>Conta Verificada com Sucesso!</h2>
          <Link to="/"><Button type="button">Ir para Login</Button></Link>
        </Container>: 
        <Container>
          <h2>Erro ao validar conta!</h2>
          <Link to="/"><Button type="button">Ir para Login</Button></Link>
        </Container>}
    </Wrapper>
    
  )
}

export default EmailConfirmation