import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import './Recipe.css';
import { getRecipe, deleteRecipe } from '../misc/api';
import RecipeThumbnail from './../RecipeThumbnail';



function Recipe(props) {

    const [isEdit, setIsEdit] = useState(false);
    const [recipe, setRecipe] = useState({ingredients:[], preparingSteps:[]});


    useEffect(() => { //load recipe on page load
      getRecipe(props.match.params.id).then(recipe => {
        console.log(recipe)
        setRecipe(recipe)
      });
    }, [props]);
    

    const ingredients = recipe.ingredients.map((ingredient) => 
    <Row>
        <Col xs={2}>{ingredient.quantity}</Col>
        <Col xs={10}>{ingredient.name}</Col>
    </Row>)


    const preparingSteps = recipe.preparingSteps.map((step, index) => 
    <Row>
        <Col><p>{`${index+1}\t ${step}`}</p></Col>
    </Row>)


    const handleDelete = () => {
        deleteRecipe(props.match.params.id).then(alert("Deleted!")).then(window.location.href = "/");
        console.log("Delete");
    }

 
    return (
        <Container> 
            <Row >
            <Col md>
                <RecipeThumbnail size = {'100%'} recipe = {recipe}></RecipeThumbnail>
               <div>{recipe.description}</div>
            </Col>
            <Col md>

                <Button variant="outline-warning" className = "recipe-button" onClick = { () => setIsEdit(!isEdit)}>Edit</Button>
                <Button variant="outline-danger" className = "recipe-button" onClick = { () => handleDelete()}>Delete</Button>

                <h2>Ingredients</h2>
                {ingredients}
            </Col>
            
            </Row>
            <Row>
            <Col md>
                <h2>Preparing</h2>
                {preparingSteps}
            </Col>
            </Row>
        </Container>

    );
  }
  
export default Recipe;
