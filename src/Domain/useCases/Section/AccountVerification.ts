

export interface IVerifyEntry{
  code: string
}

export interface IAccountVerification{
  verifyAccount(data: IVerifyEntry):Promise<boolean>
}