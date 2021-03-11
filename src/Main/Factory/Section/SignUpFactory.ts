import {SignUpData, signUpRequest} from '../protocols'

export const SignUpFactory = ()=>{
  const signUpInfra = new signUpRequest()
  return new SignUpData(signUpInfra)
}