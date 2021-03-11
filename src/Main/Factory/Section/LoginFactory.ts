import {LoginData, LoginRequest} from '../protocols'

export const LoginFactory = ()=>{
  const LoginInfra = new LoginRequest()
  return new LoginData(LoginInfra)
}