import { User } from "../../protocols/User/user";


export interface ISignUpEntry{
  nome: string,
  email: string,
  password: string
}



export interface ISignUp{
  signup({nome, email, password}:ISignUpEntry):Promise<User>
}