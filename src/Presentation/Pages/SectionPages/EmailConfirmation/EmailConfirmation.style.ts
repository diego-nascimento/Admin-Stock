import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
`;

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  a{
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    text-decoration: none;
  }
`;