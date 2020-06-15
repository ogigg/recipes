import React from 'react';
import './../App.css';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function HomePage() {
    return (
      <div>
          <Navbar collapseOnSelect expand="md" variant="light" bg="warning">
          <Navbar.Brand href="/home">Logo.svg</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              
              </Nav>
              <Nav>
              <Nav.Link href="/about">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                  Dank memes
              </Nav.Link>
              </Nav>
          </Navbar.Collapse>
          </Navbar>
      </div>

    );
  }
  
export default HomePage;
