import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import './Recipe.css';

function Recipe() {
    return (
        <Container> 
            <Row >
            <Col md>
                <img  class="recipe-image" src={require('./../../images/caesar-salad.jpg')} alt="Card image cap"/>
                <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est. Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget neque. Phasellus ornare, ante vitae consectetuer consequat, purus sapien ultricies dolor, et mollis pede metus eget nisi. Praesent sodales velit quis augue. Cras suscipit, urna at aliquam rhoncus, urna quam viverra nisi, in interdum massa nibh nec erat.
                </div>
            </Col>
            <Col md>
                <Button variant="outline-warning">Edit</Button>
                <h2>Ingredients</h2>
                <Row>
                    <Col xs={4}>50g</Col>
                    <Col xs={8}>kokainy</Col>
                </Row>
            </Col>
            
            </Row>
            <Row>
            <Col md>
                <h2>Preparing</h2>
                <Row>
                    <Col xs={4}>50g</Col>
                    <Col xs={8}>kokainy</Col>
                </Row>
            </Col>
            </Row>
            
        </Container>

    );
  }
  
export default Recipe;
