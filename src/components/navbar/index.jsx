import React from 'react'
import {Container, SearchBar} from "./styled"

const Navbar = () => {
  return (
    <nav>
        <Container>
          <div className="logo">Logo</div>
          <div className="search-bar">
            <SearchBar type="text" placeholder="Pesquisar" />
            <button>Buscar</button>
             </div>
          <div className="login-button">
            <button>Login</button>
          </div>
        </Container>
      </nav>
  )
}

export default Navbar





