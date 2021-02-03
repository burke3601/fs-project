
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Graph from './Graph'
import axios from 'axios'
import Home from './Home';
import LoginForm from './LoginForm';
import Map from './Map';


import {useState, useEffect} from 'react'

import { 
  BrowserRouter as Router, 
  Link,
  Switch,
  Route
} from 'react-router-dom';
import Sidebar from './Sidebar';

const location = {
  address: 'Pueblo Nuevo',
  lat: 14.365316,
  lng: -91.81191,
}

const locationTwo = {
  address: 'Location 2',
  lat: 16.365316,
  lng: -91.81191,


}



function App() {
  return (

    <Router>
     
    <div className="container">
      <header>
     
      </header>
      <div >
        <Switch>

          <Route path="/" exact>
           
         
          <Map
           location={location} zoomLevel={8}
           
              
          />
          <Map
           location={locationTwo} zoomLevel={8}
           
              
          />
           
        
          </Route>
          
          <Route path="/home" exact>
            <Home>
            

              
           

             
              
              
            </Home>
          </Route>
          <Route path="/graph">
            <Graph />

          </Route>

          
          
            <Map path="map"
            
            
            
            />

         
         

        </Switch>
    </div>

    </div>
    </Router>
  );
}

export default App;
