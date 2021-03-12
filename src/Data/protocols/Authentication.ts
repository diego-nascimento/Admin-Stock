import { User } from "../../Domain/protocols/User/user";

export interface IAuthenticationRequest{
  auth(token: string): Promise<User>
}