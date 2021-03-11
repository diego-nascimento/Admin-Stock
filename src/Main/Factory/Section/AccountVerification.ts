import {VerifyAccount, VerifyAccountRequest} from '../protocols'

export const VerifyAccountFactory = () =>{
  const verifyAccountInfra = new VerifyAccountRequest()
  return new VerifyAccount(verifyAccountInfra)
}