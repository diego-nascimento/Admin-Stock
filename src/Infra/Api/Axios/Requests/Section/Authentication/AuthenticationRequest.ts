import { IAuthenticationRequest } from '../../../../../../Data/protocols/Authentication';
import { User } from '../../../../../../Domain/protocols/User/user';
import { api } from '../../../services/api'

export class AuthenticationRequest implements IAuthenticationRequest{
  async auth(token: string): Promise<User>{
    try {
      const response = await api.get('/auth', {
        headers: {
          "x-access-token": token
        }
      })

      return {
        email: response.data.data.email,
        nome: response.data.data.nome
      }
    } catch (error) {
      throw new Error('Validation Fails')
    }
  }
}