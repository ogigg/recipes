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









function Recipe() {
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
    const [recipe, setRecipe] = useState(recipeObj);

    const ingredients = recipe.ingredients.map((ingredient) => {
    if(isEdit) return (
        
    <Row>
        <Col xs={4}>
            <Form.Control type="quantity" placeholder="Enter email" value={ingredient.quantity} />
        </Col>
        <Col xs={4}>
            <Form.Control type="name" placeholder="Enter email" value={ingredient.name} />
        </Col>

    </Row>
    )
    else return (
    <Row>
        <Col xs={4}>{ingredient.quantity}</Col>
        <Col xs={8}>{ingredient.name}</Col>
    </Row>)
    }
    )
    const handleChange = (e) => {

        console.log(e.target.value);
        setRecipe({...recipe, description : e.target.value});
    }

    const description = () => {return <TextareaAutosize type="description" class="form-control" value={recipe.description} 
    key = "description"
    onChange={ e => setRecipe({...recipe, description : e.target.value})}
    placeholder="Add description here"
    
    ></TextareaAutosize>}
    const Description = () => {
        if(isEdit)
            return (
                <Form>
                <TextareaAutosize type="description" class="form-control" value={recipe.description} 
                key = "description"
                onChange={ e => setRecipe({...recipe, description : e.target.value})}
                placeholder="Add description here"
                
                ></TextareaAutosize>
                </Form>
                )
        

        else return (<div>{recipe.description}</div>)
        }
    
            
    

    return (
        <Container> 
            <Row >
            <Col md>
                <Card className="card-recipe" >
                    <div class="img-gradient ">
                        <img class="card-img recipe-image" src={require('./../../images/caesar-salad.jpg')} alt="Card image"></img>
                    </div>
                    
                    <div class="card-img-overlay">
                        <div className = "thumbnail-text">
                            <div class="text-light card-text text-small">{recipe.preparationTime}</div>
                            <h5 class="card-title text-light text-big">{recipe.name}</h5>
                        </div>
                        
                    </div>
                </Card>
               <Description></Description>
               {description}
            </Col>
            <Col md>
                <Button variant="outline-warning" onClick = { () => setIsEdit(!isEdit)}>Edit</Button>
                <h2>Ingredients</h2>
                {ingredients}
            </Col>
            
            </Row>
            <Row>
            <Col md>
                <h2>Preparing</h2>
                <Row>
                    <Col xs={2}>1</Col>
                    <Col xs={10}>Włącz piekarnik</Col>
                </Row>
            </Col>
            </Row>
            {/* <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form> */}
        </Container>

    );
  }
  
export default Recipe;
