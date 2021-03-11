import styled from 'styled-components'
import ImageLeft from  '../../../../assets/login-signup-image.jpg'
import {LeftToRight} from '../../../Global/Keyframes/LeftToRight'

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


export const ContainerImage = styled.div`
  background-image: url(${ImageLeft});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  
  @media(max-width: 1000px){
    display: none;

  }
`;

export const Container = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
  padding: 100px 20px;
  border-radius: 15px;
  animation: ${LeftToRight} .5s forwards;

  @media(max-width: 1000px){
    grid-template-columns: 1fr;
  }

 

  form{
    width: 80%;
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