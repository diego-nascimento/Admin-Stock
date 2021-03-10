import styled, { keyframes } from 'styled-components'
import ImageLeft from '../../assets/login-signup-image.jpg'

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;


  @media(max-width: 1000px){
    justify-content: center;
    align-items: center;
    grid-template-columns: 1fr;
  }
`;

const show = keyframes`
  from{
    opacity: 0;
    transform: translateY(20px)
  }to{
    opacity: 1;
    transform: translateY(0px)
  }
`;

export const ContainerImage = styled.div`
  background-image: url(${ImageLeft});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  
  @media(max-width: 1000px){
    background: none;
  }
`;

export const Container = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 100px 20px;
  border: 1px solid #111;
  border-radius: 15px;
  animation: ${show} .5s forwards;

  @media(max-width: 1000px){
    grid-template-columns: 1fr;
  }

  form{
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  input{
    margin-top: 20px;
  }

  button{
    margin-top: 20px;
  }

  a{
    font-size: 1.2rem;
    justify-self: flex-start;
    margin-top: 20px;
  }
`;