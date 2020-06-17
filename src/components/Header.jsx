import React from 'react';
import './../App.css';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { GiKitchenKnives } from "react-icons/gi";
function HomePage() {
    return (
      <div>
          <Navbar collapseOnSelect expand="md" variant="light" bg="warning">
          <Navbar.Brand href="/home"><GiKitchenKnives></GiKitchenKnives></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">

              </Nav>
              <Nav>
              <Nav.Link href="/add">Add new recipe</Nav.Link>
              <Nav.Link href="/random">Get random recipe</Nav.Link>
              <Nav.Link href="/last">Last recipe</Nav.Link>
              </Nav>
          </Navbar.Collapse>
          </Navbar>
      </div>
    );
  }
  
export default HomePage;
