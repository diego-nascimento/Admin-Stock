import React from 'react'

import {Container, InputForm} from './Input.style'


interface IInput{
  type: string,
  placeholder: string
  register: any
  name: string,
  error: string
}

const Input: React.FC<IInput> = ({type, placeholder, register, name, error}) =>{
  return(
    <Container>
      <InputForm type={type} placeholder={placeholder} name={name} ref={register}/>
      <p style={{color: '#f00'}}>{error}</p>
    </Container>
  );
}

export default Input