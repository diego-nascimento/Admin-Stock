import React from 'react'
import {Header, Container} from './Menu.style'
import {FiMenu} from 'react-icons/fi'

const Menu: React.FC = () => {
  return (
    <Container>
      <Header>
          <FiMenu />
          <h1>Marca</h1>
      </Header>
    </Container>
  )
}

export default Menu