
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css'
import Graph from './Graph'
import axios from 'axios'
import Home from './Home';
import Login from './Login';
import Map from './Map';
import Navbar from './Navbar'
import Api from './Api'
import Dashboard from './Dashboard'
import About from "./pages/About";
import NavbarBootstrap from './NavbarBootstrap';







import {useState, useEffect} from 'react'

import { 
  BrowserRouter as Router, 
  Link,
  Switch,
  Route
} from 'react-router-dom';
import Sidebar from './Sidebar';

import {REACT_APP_API_KEY} from './config'



import Footer from './Footer';

const api = {
    
  url: `http://api.openweathermap.org/data/2.5/onecall?lat=14.365316&lon=-91.81191&units=metric&appid=${REACT_APP_API_KEY}`
}
  
 
 
  






function App() {

  const [data,setData] = useState({results: []})

  const [weather, setWeather] = useState([])
  
  
  async function getRocja(){
    const resp = await axios.get(`/api/rocja`);
    // console.log(resp)
    setData(resp.data)
  }
  async function getNaranjo(){
    const resp = await axios.get(`/api/naranjo`);
    console.log(`**************`)
    console.log(resp)
    setData(resp.data)
  }
  
  async function fetchWeather(lat,lon){
  const response = await axios.get(`${api.url}`)
  setWeather(response.data)
  //console.log(`**************`)
  //console.log(response.data)
}

useEffect(()=>{
  fetchWeather()
  //setInterval(fetchWeather,1000*60*30)
  // setInterval(()=>{
  //   getRocja()
  //   getNaranjo()
  // },1000*60*15)
},[])

  return (
   
    <Router>
        {/* <NavbarBootstrap></NavbarBootstrap> */}
        
       <div className='container'>
      <Switch>
          <Route path="/graphs" exact>
              <Navbar></Navbar>
              {/* <NavbarBootstrap></NavbarBootstrap> */}
              <Sidebar
              getRocja = {getRocja}
              getNaranjo = {getNaranjo}
              ></Sidebar>
              <Dashboard
              data = {data}
              ></Dashboard>

          </Route>
          
          <Route exact path="/">
            <Login />
          </Route>
          

          <Route path="/home"> 
              <Navbar></Navbar>
              <Sidebar></Sidebar>
              <Home />
              
             
              <Home 
              fetchWeather={fetchWeather}
              weather = {weather}
              data = {data}
              // getRocja = {getRocja}
              // getNaranjo = {getNaranjo}
              ></Home>
          </Route>
          <Route path="/about">
            <Navbar />
            <About />
          </Route>
      </Switch>
      <Footer></Footer>
      </div>
    </Router>
    
  );
}

export default App;
