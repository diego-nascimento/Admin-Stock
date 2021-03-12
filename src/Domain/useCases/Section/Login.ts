import { User } from "../../protocols/User/user";

export interface ILoginEntry{
  login: string,
  password: string
}


export interface ILoginReturn{
  token?: string
  status: number
  user?: User
}

export interface ILogin{
  login({login, password}:ILoginEntry):Promise<ILoginReturn>
}