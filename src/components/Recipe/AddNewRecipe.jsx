import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/Form';
import './Recipe.css';
import TextareaAutosize from 'react-textarea-autosize';




function AddNewRecipe() {
    const recipeObj = {
        name: "",
        preparationTime: "",
        ingredients: [{quantity: "", name: ""}],
        description: "",
        preparingSteps: [""],
        image: {name: "Upload recipe image here"},
    }

    const [isEdit, setIsEdit] = useState(false);
    const [recipe, setRecipe] = useState(recipeObj);

    const handleSubmit = () => {
        
        console.log(recipe);
        const data = new FormData() 
        data.append('file', recipe.image)
        
        data.append('json', JSON.stringify(recipe))
        fetch('http://localhost:4000/upload', {
            method: 'POST',
            body: data
          })
    }

    const handleFileUpload = (e) => {
        
        let image = e.target.files[0]
        const types = ['image/png', 'image/jpeg'];
        if (types.every(type => image.type !== type))
            setRecipe({...recipe, image : {name: "Ooops, wrong extension. Upload only image"}})
        else{
            setRecipe({...recipe, image : image})
        }
        
        console.log(image);
    }
    const handleAddStep = () => {
        setRecipe({...recipe, preparingSteps : [...recipe.preparingSteps,""]})
    }

    const handleAddIngredient = () => {
        setRecipe({...recipe, ingredients : [...recipe.ingredients, {quantity: "", name: ""}]})
    }

    const handleStepChange = (index, e) => {
        let tempArr = [...recipe.preparingSteps];
        tempArr[index] = e.target.value
        setRecipe({...recipe, preparingSteps : tempArr})
    }

    const handleIngredientQuantityChange = (index, e) => {
        let tempArr = [...recipe.ingredients];
        tempArr[index].quantity = e.target.value
        setRecipe({...recipe, ingredients : tempArr})
    }
    const handleIngredientNameChange = (index, e) => {
        let tempArr = [...recipe.ingredients];
        tempArr[index].name = e.target.value
        setRecipe({...recipe, ingredients : tempArr})
    }
    const preparingSteps = recipe.preparingSteps.map((step, index) => {
        let placeholder = `Step ${index+1}`
        return (
        <Row>
            <Col>
                <TextareaAutosize class="form-control add-form-input" 
                type="quantity" placeholder={placeholder}
                value = {step} 
                onChange = {e => handleStepChange(index, e)}
                />
            </Col>
        </Row>
        )})

    const ingredients = recipe.ingredients.map((ingredient, index) => {
        let placeholder = `Step ${index+1}`
        return (
        <Row>
            <Col xs={6}>
                <Form.Control className = "add-form-input" type="quantity" placeholder="Quantity"
                value = {ingredient.quantity} 
                onChange = {e => handleIngredientQuantityChange(index, e)} />
            </Col>
            <Col xs={6}>
                <Form.Control className = "add-form-input" type="name" placeholder="Product" 
                value = {ingredient.name} 
                onChange = {e => handleIngredientNameChange(index, e)} />
            </Col>
        </Row>
        )})
    return (
        <Container> 
            <Row > 
            <Col md>
            <h2>Recipe details</h2>

                <Form.Control 
                className = "add-form-input" 
                placeholder="Recipe name" 
                value={recipe.name}
                onChange={ e => setRecipe({...recipe, name : e.target.value})}/>

                <Form.Control  
                className = "add-form-input" 
                placeholder="Preparation time" 
                value={recipe.preparationTime}
                onChange={ e => setRecipe({...recipe, preparationTime : e.target.value})}/>


                <Form.File className = "add-form-input"
                    id="custom-file"
                    label={recipe.image.name}
                    custom  
                    onChange = {e => {handleFileUpload(e)}}/>

                <TextareaAutosize type="description" class="form-control add-form-input"  
                key = "description"
                value={recipe.description}
                onChange={ e => setRecipe({...recipe, description : e.target.value})}
                placeholder="Add description here"
                
                ></TextareaAutosize>

            </Col>
            <Col md>
                <h2>Ingredients</h2> 
                {ingredients}
                <Button variant="outline-warning" onClick = {handleAddIngredient}>Add Ingredient</Button>
            </Col>
            
            </Row>
            <Row>
            <Col md>

                <h2>Preparing</h2>

                {preparingSteps}
                <Button variant="outline-warning" className = "add-form-input"  onClick = { () => handleAddStep()}>Add Step</Button>
                
            </Col>
            </Row>
            <Button submit variant="primary" className = "add-form-input" onClick = {handleSubmit}>Submit</Button>
        </Container>

    );
  }
  
export default AddNewRecipe;
