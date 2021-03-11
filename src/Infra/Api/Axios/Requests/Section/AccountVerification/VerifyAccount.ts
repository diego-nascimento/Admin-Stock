import {IVerifyAccountRequest} from '../../../../../../Data/protocols/VerifyAccount'
import { IVerifyEntry } from '../../../../../../Domain/useCases/Section/AccountVerification';
import {api} from '../../../services/api'

export class VerifyAccountRequest implements IVerifyAccountRequest{
  async verifyAccount(data:IVerifyEntry):Promise<boolean>{
    try {

      const response = await api.get(`/email_confirmation/?code=${data.code}`)
      if(response.status === 200){
        return true
      }else{
        return false
      }

    } catch (error) {
      throw new Error('Fail to verify account')
    }
  }
}