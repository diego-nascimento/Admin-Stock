import { User } from '../../../Domain/protocols/User/user';
import {IAuthentication} from '../../../Domain/useCases/Section/Authentication'
import { IAuthenticationRequest } from '../../protocols/Authentication';

export class Authentication implements IAuthentication{
  private readonly AuthRequest: IAuthenticationRequest

  constructor(authRequest: IAuthenticationRequest) {
    this.AuthRequest = authRequest
  }

  async auth(token: string): Promise<User>{
    const response = await this.AuthRequest.auth(token)
    return response
  }
}