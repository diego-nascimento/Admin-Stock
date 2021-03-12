import { User } from "../../protocols/User/user";


export interface IAuthentication{
  auth(token: string): Promise<User>
}