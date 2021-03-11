import {IVerifyEntry} from '../../Domain/useCases/Section/AccountVerification'


export interface IVerifyAccountRequest{
  verifyAccount(data:IVerifyEntry):Promise<boolean>
}