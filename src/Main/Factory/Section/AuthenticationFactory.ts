import { Authentication, AuthenticationRequest } from '../protocols'

export const authFactory = () => {
  const AuthenticationInfra = new AuthenticationRequest()
  return new Authentication(AuthenticationInfra)
}