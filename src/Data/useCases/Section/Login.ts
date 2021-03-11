import { ILogin, ILoginEntry } from "../../../Domain/useCases/Section/Login";
import { ILoginRequest } from "../../protocols/LoginRequest";


export class LoginData implements ILogin{
  private readonly LoginRequest: ILoginRequest

  constructor(loginRequest:ILoginRequest){
    this.LoginRequest = loginRequest
  }

  async login({login, password}:ILoginEntry):Promise<string>{
    const Request: ILoginEntry = {
      login, password
    }
    return await this.LoginRequest.login(Request)
  }
}