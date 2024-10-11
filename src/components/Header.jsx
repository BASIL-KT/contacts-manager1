import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
    <Navbar className="bg-primary">
        <Container>
          <Navbar.Brand href="#home">
            <i className="fa-solid fa-address-book fa-2xl" style={{color: "#dd6503",}} />
            <span className='text-warning'>Contacts</span>
            {' '}
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header