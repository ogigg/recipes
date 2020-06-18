import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './components/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Recipe from './components/Recipe/Recipe'
import AddNewRecipe from './components/Recipe/AddNewRecipe'


function App() {
  return (
    <div>
    <Header/>
    <Router>
      <div>
        <Switch>
          <Route path="/add">
            <AddNewRecipe/>
          </Route>
          <Route path="/recipes/:id" component={Recipe}>
            
          </Route>
          <Route path="/">
            <HomePage/>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
