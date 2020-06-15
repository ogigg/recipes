import React from 'react';
import './../App.css';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';

function RecipeThumbnail() {
    return (
        <a href="/recipes/1">
        <Card >
            <div class="img-gradient">
                <img class="card-img" src={require('./../images/caesar-salad.jpg')} alt="Card image"></img>
            </div>
            
            <div class="card-img-overlay">
                <div className = "thumbnail-text">
                    <div class="text-light card-text text-small">50 min</div>
                    <h5 class="card-title text-light text-big">Cezar</h5>
                </div>
                
            </div>
        </Card>
        </a>
     

    );
  }
  
export default RecipeThumbnail;
{/* <div>
          <img className = "thumbnail-image" src={require('./images/caesar-salad.jpg')}></img>
         miniaturka
      </div> */}