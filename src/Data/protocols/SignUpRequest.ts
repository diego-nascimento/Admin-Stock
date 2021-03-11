import { User } from "../../Domain/protocols/User/user";
import { ISignUpEntry } from "../../Domain/useCases/Section/SignUp";


export interface ISignUpRequest{
  signup({nome, email, password}:ISignUpEntry):Promise<User>
}