import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/Form';
import './Recipe.css';
import TextareaAutosize from 'react-textarea-autosize';
import { getRecipe, deleteRecipe } from './../api';








function Recipe(props) {
    const recipeObj = {
        name: "Caesar salad",
        preparationTime: "45min",
        ingredients: [{quantity: '1', name: 'bread'},
        {quantity: '50g', name: 'sugar'},
        {quantity: '1kg', name: 'flour'},
        {quantity: '100g', name: 'butter'}],
    
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est. Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget neque. Phasellus ornare, ante vitae consectetuer consequat, purus sapien ultricies dolor, et mollis pede metus eget nisi. Praesent sodales velit quis augue. Cras suscipit, urna at aliquam rhoncus, urna quam viverra nisi, in interdum massa nibh nec erat.",
    }

    const [isEdit, setIsEdit] = useState(false);
    const [recipe, setRecipe] = useState({ingredients:[], preparingSteps:[]});


    useEffect(() => {
      getRecipe(props.match.params.id).then(recipes => {
        console.log(recipes)
        setRecipe(recipes)
      });
    }, []);
    

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
                <Card className="card-recipe" >
                    <div class="img-gradient ">
                        <img class="card-img recipe-image" src={recipe.imageUrl} alt="Card image"></img>
                    </div>
                    
                    <div class="card-img-overlay">
                        <div className = "thumbnail-text">
                            <div class="text-light card-text text-small">{recipe.preparationTime}</div>
                            <h5 class="card-title text-light text-big">{recipe.name}</h5>
                        </div>
                        
                    </div>
                </Card>
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
