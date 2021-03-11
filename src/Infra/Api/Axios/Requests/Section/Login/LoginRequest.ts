import { ILoginRequest } from '../../../../../../Data/protocols/LoginRequest';
import { ILoginEntry } from '../../../../../../Domain/useCases/Section/Login';
import {api} from '../../../services/api'

export class LoginRequest implements ILoginRequest{
  async login({login, password}:ILoginEntry):Promise<string>{
    try {
      const response = await  api.post('signin', {
        login, password
      })
      switch(response.status){
        case 200:
          return response.data.data.token
        default:
          throw new Error('Login or password')
      }
    } catch (error) {
      
      throw new Error(error.message)
    }
  }
}