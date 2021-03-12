import { ILoginEntry, ILoginReturn } from "../../Domain/useCases/Section/Login";

export interface ILoginRequest{
  login({login, password}: ILoginEntry):Promise<ILoginReturn>
}