
export interface ILoginEntry{
  login: string,
  password: string
}

export interface ILogin{
  login({login, password}:ILoginEntry):Promise<string>
}