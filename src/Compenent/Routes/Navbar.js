import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

function NavScrollExample( ) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#" className='brand'>CC</Navbar.Brand>
        <Navbar.Toggle className='btnTog' aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="nav me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link className='TP' as={Link} to="/">Home</Nav.Link>
            <Nav.Link className='TP' as={Link} to="/ImageSlider">Slider</Nav.Link>
           
            <Nav.Link className='TP' as={Link} to="/Calc">Calculator</Nav.Link>
            <Nav.Link className='TP' as={Link} to="/Form_task">TO DO List</Nav.Link>
            <Nav.Link className='TP' as={Link} to="/Api">Paginated</Nav.Link>
           
            <Nav.Link className='TP' as={Link} to="/Langs">MultiLanguage</Nav.Link>
           
           
          </Nav>
  
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
