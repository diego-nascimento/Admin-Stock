import React from 'react'
import { Wrapper, Container } from './Layout.style'
import { Route, Switch } from 'react-router-dom'
import Header from '../'

import ListProdutos from '../../Pages/ProdutosPages/produtos/ListProdutos/ListProdutos'

const Layout: React.FC = () => {
  return (
    <Wrapper>
      <Container>
          <Header />
          <main>
            <Switch>
              <Route path="/"  component={ListProdutos} />
            </Switch>
          </main>
      </Container>
      
    </Wrapper>
  )
}

export default Layout