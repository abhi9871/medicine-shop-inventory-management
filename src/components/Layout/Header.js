import {Container, Nav, Navbar} from 'react-bootstrap';
import React from 'react';
import HeaderCartButton from './HeaderCartButton';
import './Header.css';

const Header = () => {
  return (
    <React.Fragment>
      <header>
    <Navbar expand="lg" className="shadow z-10 sticky-top top-0 left-0 p-3 w-100 mb-4 bg-body-secondary">
      <Container>
        <Navbar.Brand href="#" className='fw-bold text-dark bg-body-tertiary shadow border rounded-pill px-3 py-2 fs-6'>Medicine Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <HeaderCartButton />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
    </React.Fragment>
  );
};

export default Header;
