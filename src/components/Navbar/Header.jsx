import React, { useRef, useState } from 'react';

import { Link } from 'react-router-dom';

import './Header.modules.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { FaConnectdevelop } from "react-icons/fa";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  const navRef = useRef()
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleNavbar = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeNavbar = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <Navbar data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">
            <FaConnectdevelop />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/habilidades">Habilidades</Nav.Link>
            <Nav.Link href="/projetos">Projetos</Nav.Link>
            <Nav.Link href="/contato">Contato</Nav.Link>
          </Nav>
            <button className="hamburger" onClick={toggleNavbar}></button>
        </Container>
      </Navbar>
      <div className={`hidden-navbar ${isMenuOpen ? 'active' : ''}`} ref={navRef}>
          <div className="navbar_dropdown-link"><Link to='/' onClick={closeNavbar}>Home</Link></div>
          <div className="navbar_dropdown-link"><Link to="/habilidades" onClick={closeNavbar}>Habilidades</Link></div>
          <div className="navbar_dropdown-link"><Link to="#projetos" onClick={closeNavbar}>Projetos</Link></div>
          <div className="navbar_dropdown-link"><Link to="/contato" onClick={closeNavbar}>Contato</Link></div>
      </div>
    </>
  )
}

export default Header