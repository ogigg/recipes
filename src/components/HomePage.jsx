import React, { useState, useEffect } from 'react';
import './../App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import RecipeThumbnail from './RecipeThumbnail';
import { getAllRecipes } from './api';


function HomePage () {
    const [recipes, setRecipes] = useState([{}]);
    useEffect(() => {
      getAllRecipes().then(recipes => {
        console.log(recipes)
        setRecipes(recipes)
      });
    }, []);
    

    const recipesList = recipes.map( recipe => <Col md="auto"><RecipeThumbnail recipe = {recipe}/></Col>)

    return (
      <div>
          
          <Container >
          <h4>Latest recipes</h4>

          <Row className="justify-content-md-center justify-content-lg-start ">
            {recipesList}
            

          </Row>
          </Container>
         
      </div>

    );
  }
  
export default HomePage;
//<RecipeThumbnail/>