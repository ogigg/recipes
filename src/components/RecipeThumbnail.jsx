import React from 'react';
import './../App.css';
import Card from 'react-bootstrap/Card';

function RecipeThumbnail(props) {
    let style = {}
    if(props.size){
        style = {width: props.size, height: 'auto'}
    }
    return (
        <a href={`/recipes/${props.recipe.id}`}>
        <Card style = {style}>
            <div className="img-gradient">
                <img className="card-img" src={(props.recipe.imageUrl)} alt="Card"></img>
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
