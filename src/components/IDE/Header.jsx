import React from 'react';
import Nav from 'react-bootstrap/Nav';

import Navbar from 'react-bootstrap/Navbar'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function Header() {
    return (
        <Navbar bg="light" variant="light">
    <Navbar.Brand href="">JsLeo.ru</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="">Сейчас : Что такое переменная</Nav.Link>
    </Nav>
  </Navbar>

    );
}

export default Header;