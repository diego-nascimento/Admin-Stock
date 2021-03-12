import React from 'react'
import {ButtonForm} from './Button.style'
import {Spinner} from 'react-bootstrap'

interface IButton{
  children: any,
  type?: 'submit' |'button'
  loading?: boolean 
}

const Button: React.FC<IButton> = ({children, type, loading = false})=>{
  return <ButtonForm type={type} disabled={loading} >{loading ? <Spinner animation="border" variant="white"/>: children }</ButtonForm>
}

export default Button