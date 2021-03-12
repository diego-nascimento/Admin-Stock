import { ILoginRequest } from '../../../../../../Data/protocols/LoginRequest';
import { ILoginEntry, ILoginReturn} from '../../../../../../Domain/useCases/Section/Login';
import {api} from '../../../services/api'

export class LoginRequest implements ILoginRequest{
  async login({login, password}:ILoginEntry):Promise<ILoginReturn>{
    try {
      const response = await  api.post('signin', {
        login, password
      })
      
      switch(response.status){
        case 200:
          return {
            status: response.status,
            token: response.data.data.token,
            user: {
              email: response.data.data.user.email,
              nome: response.data.data.user.nome
            }
            
          }
        default:
          throw new Error('Login or password')
      }
    } catch (error) {
      
      throw new Error(error.message)
    }
  }
}