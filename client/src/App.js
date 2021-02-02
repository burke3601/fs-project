import logo from './logo.svg';
import './App.css';

import axios from 'axios'

import Home from './Home';
import LoginForm from './LoginForm';

import {useState, useEffect} from 'react'

import { 
  BrowserRouter as Router, 
  Link,
  Switch,
  Route
} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="container">
      <header>
     
      </header>
      <div >
        <Switch>

          <Route path="/" exact>
           
            <LoginForm 
           
            />
           
          </Route>
          <Route path="/home" exact>
            <Home>
              <h1>
                Welcome to the Dashboard
              </h1>
            </Home>
          </Route>
         

        </Switch>
    </div>
    </div>
    </Router>
  );
}

export default App;
