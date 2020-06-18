import React from 'react';
import './../App.css';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';

function RecipeThumbnail(props) {

    return (
        <a href={`/recipes/${props.recipe.id}`}>
        <Card >
            <div className="img-gradient">
                {/* <img className="card-img" src={require('./../images/caesar-salad.jpg')} alt="Card image"></img> */}
                <img className="card-img" src={(props.recipe.imageUrl)} alt="Card image"></img>
            </div>
            
            <div className="card-img-overlay">
                <div className = "thumbnail-text">
                <div className="text-light card-text text-small">{props.recipe.preparationTime}</div>
                    <h5 className="card-title text-light text-big">{props.recipe.name}</h5>
                </div>
                
            </div>
        </Card>
        </a>
     

    );
  }
  
export default RecipeThumbnail;
