import React from 'react'
import { Container} from './Header.style'
import {UserContext} from '../../../Main/Context/userContext'
import { Dropdown } from 'react-bootstrap'
import Menu from '../Menu/Menu'


const Header: React.FC = () => {
  const { logout, user } = React.useContext(UserContext)

  return (
    <Container>
      <Menu />
      <Dropdown>
        <Dropdown.Toggle variant="dark" id="dropdown-basic">
          {user?.nome}
        </Dropdown.Toggle>
        <Dropdown.Menu>
        <Dropdown.Item  onClick={() => logout()}>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      
     
    </Container>
  )
}

export default Header
