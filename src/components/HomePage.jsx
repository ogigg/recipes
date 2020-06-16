import React from 'react';
import './../App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import RecipeThumbnail from './RecipeThumbnail'



function HomePage() {
    return (
      <div>
          
          <Container >
          <h4>Latest recipes</h4>

          <Row className="justify-content-md-center">
            <Col md="auto"><RecipeThumbnail/></Col>
            <Col md="auto"><RecipeThumbnail/></Col>
            <Col md="auto"><RecipeThumbnail/></Col>
            <Col md="auto"><RecipeThumbnail/></Col>
            <Col md="auto"><RecipeThumbnail/></Col>
            <Col md="auto"><RecipeThumbnail/></Col>
            <Col md="auto"><RecipeThumbnail/></Col>
            <Col md="auto"><RecipeThumbnail/></Col>
            <Col md="auto"><RecipeThumbnail/></Col>
            <Col md="auto"><RecipeThumbnail/></Col>
            <Col md="auto"><RecipeThumbnail/></Col>
            <Col md="auto"><RecipeThumbnail/></Col>
            

          </Row>
          </Container>
         
      </div>

    );
  }
  
export default HomePage;
//<RecipeThumbnail/>