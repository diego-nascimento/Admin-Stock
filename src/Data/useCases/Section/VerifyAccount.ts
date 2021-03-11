
import { IAccountVerification, IVerifyEntry } from "../../../Domain/useCases/Section/AccountVerification";
import { IVerifyAccountRequest } from "../../protocols/VerifyAccount";


export class VerifyAccount implements IAccountVerification{
  private readonly verifyAccountRequest: IVerifyAccountRequest

  constructor(verifyRequets: IVerifyAccountRequest){
    this.verifyAccountRequest = verifyRequets
  }

  async verifyAccount(data:IVerifyEntry):Promise<boolean>{
    return await this.verifyAccountRequest.verifyAccount(data)
  }
}