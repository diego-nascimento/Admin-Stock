import { ISignUpRequest } from '../../../../../../Data/protocols/SignUpRequest';
import { User } from '../../../../../../Domain/protocols/User/user';
import { ISignUpEntry } from '../../../../../../Domain/useCases/Section/SignUp';

import {api} from '../../../services/api'

export class signUpRequest implements ISignUpRequest{
  async signup(data:ISignUpEntry):Promise<User>{
    try {
      const response = await api.post('signup', {
        nome: data.nome,
        email: data.email,
        password: data.password
      })
      const user:User = {
        email: response.data.data.email,
        nome: response.data.data.nome
      }
      return user
    } catch (error) {
      throw new Error(error.response.data)
    }
  }
}
