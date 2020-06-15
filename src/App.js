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


function App() {
  return (
    <div>
    <Header/>
    <Router>
      <div>
        <Switch>
          <Route path="/about">
            aaa
          </Route>
          <Route path="/recipes/1">
            <Recipe></Recipe>
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
