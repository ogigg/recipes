import React, { useState, useEffect } from 'react';
import './../App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import RecipeThumbnail from './RecipeThumbnail';
import { getAllRecipes } from './misc/api';


function HomePage () {
    const [recipes, setRecipes] = useState(null);

    useEffect(() => { //download all recipes on page load
      getAllRecipes().then(recipes => {
        console.log(recipes)
        setRecipes(recipes)
      });
    }, []);
    
    const RecipesList = () => {
      if(recipes)
        return(recipes.map(recipe => <Col md="auto"><RecipeThumbnail recipe = {recipe}/></Col>))
      else
      return <Col md="auto">No recipes found!</Col>

    }
    

    return (
      <div>
          <Container >
          <h4>Latest recipes</h4>
          <Row className="justify-content-md-center justify-content-lg-start ">
            <RecipesList></RecipesList>
          </Row>
          </Container>
         
      </div>

    );
  }
  
export default HomePage;
//<RecipeThumbnail/>