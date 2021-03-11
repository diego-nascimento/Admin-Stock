import { User } from "../../../Domain/protocols/User/user";
import { ISignUp, ISignUpEntry } from "../../../Domain/useCases/Section/SignUp";
import { ISignUpRequest } from "../../protocols/SignUpRequest";

export class SignUpData implements ISignUp{
  private readonly SignUPRequest: ISignUpRequest

  constructor(signUPRequest: ISignUpRequest){
    this.SignUPRequest = signUPRequest
  }
  
  async signup(data:ISignUpEntry):Promise<User>{
    return await this.SignUPRequest.signup(data)
  }
}