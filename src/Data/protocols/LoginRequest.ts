import { ILoginEntry } from "../../Domain/useCases/Section/Login";

export interface ILoginRequest{
  login({login, password}: ILoginEntry):Promise<string>
}