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
  Route,
  Redirect
} from 'react-router-dom';
import Sidebar from './Sidebar';

import {REACT_APP_API_KEY} from './config'

import Footer from './Footer';

const api = {
    
  url: `http://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lng}&units=metric&appid=${REACT_APP_API_KEY}`
}
  
 
const location = [{
  address: 'Pueblo Nuevo',
  lat: 14.614766,
  lng: -92.136641,
},
 {
  address: 'La Virgen',
  lat: 14.710178,
  lng: -92.098644,

},{
  address: 'Sintana',
  lat: 14.720622,
  lng: -91.890944,
},{
  address: 'La Playa',
  lat: 14.713706,
  lng: -92.030361,
},
{
  address: 'La Paz',
  lat: 15.67485,
  lng: -90.379311,
},
{
  address: 'Rocja Pontila',
  lat: 15.861075,
  lng: -90.616494,
},
{
  address: 'Entre Rios',
  lat: 15.950753,
  lng: -90.546267,
}

]
 
function App() {
 
  const [data,setData] = useState({results: []})

  const [weather, setWeather] = useState([])
  const [count, setCount] = useState(0)

  const [user, setUser] = useState({userName: ""});  
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  async function addHour (count, station){
    setCount(count+1)
    const resp = await axios.get(`/api/getStationByPeriod/${count}/${station}`);
    console.log(resp)
    if (resp.data.length > 0){setData(resp.data)}
    
    
  }
  async function subtractHour (count, station){
    if (count > 1){
      setCount(count-1)
      }else{
        setCount(count)
      }
    const resp = await axios.get(`/api/getStationByPeriod/${count}/${station}`);
    console.log(resp)
    if (resp.data.length > 0){setData(resp.data)} 
    
  }
  
  async function getDay (day, station){
    setCount(1)
    const resp = await axios.get(`/api/getStationByPeriod/${day}/${station}`);
    console.log(resp)
    if (resp.data.length > 0){setData(resp.data)}
    
  }
  // async function getWeek (params){
  //   const resp = await axios.get(`/api/getWeek/${params}`);
  //   console.log(resp)
  //   setData(resp.data)
  // }
  // async function getMonth (params){
  //   const resp = await axios.get(`/api/getMonth/${params}`);
  //   console.log(resp)
  //   setData(resp.data)
  // }
  async function getStation(params) {
    console.log(params)
    const resp = await axios.get(`/api/getStation/${params}`);
    console.log(resp)
    setData(resp.data)
  }
  async function getRocja(){
    const resp = await axios.get(`/api/rocja`);
    console.log(resp)
    setData(resp.data)
  }
  async function getNaranjo(){
    const resp = await axios.get(`/api/naranjo`);
    console.log(`**************`)
    console.log(resp)
    setData(resp.data)
  }
  
  async function fetchWeather(lat,lng){
  const response = await axios.get(`http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&units=metric&appid=${REACT_APP_API_KEY}`)
  setWeather(response.data)
  //console.log(`**************`)
  //console.log(response.data)
}

function doLogin() {
  console.log('sweet you are logged in now, buddy');
  setIsLoggedIn(true);
}

function doLogout() {
  console.log('all logged out');
  setUser({userName: ""});
  setIsLoggedIn(false);
}

useEffect(()=>{
  fetchWeather(15.950753,-90.546267)
  // setInterval(fetchWeather,1000*60*30)
  //  setInterval(()=>{
    //getRocja()
   getNaranjo()
  //getStation()
  //  getDay()
  // },1000*60*15)
},[])

  return (
   
    <Router>
        {/* <NavbarBootstrap></NavbarBootstrap> */}
        <Route exact path="/">

            <Login 
                  doLogin={doLogin}
                  setUser={setUser}
            />
          </Route>

        
      
      <Switch>
         <div className='container'>
          <Route path="/graphs" exact>
          <Navbar 
                    isLoggedIn={setIsLoggedIn}
                    doLogout={doLogout}
            />
              {/* <NavbarBootstrap></NavbarBootstrap> */}
              <Sidebar
              
              getRocja = {getRocja}
              getNaranjo = {getNaranjo}
              fetchWeather={fetchWeather}
              ></Sidebar>
              <Dashboard
              setCount = {setCount}
              addHour = {addHour}
              subtractHour = {subtractHour}
              count = {count}
              data = {data}
              location = {location}
              fetchWeather={fetchWeather}
              weather = {weather}
              getDay ={getDay}
             
              ></Dashboard>

          </Route>

          <Route path="/home"> 
          <Navbar 
                    isLoggedIn={setIsLoggedIn}
                    doLogout={doLogout}
            />
              <Sidebar></Sidebar>
              
              <Home 
              fetchWeather={fetchWeather}
              weather = {weather}
              getStation = {getStation}
              location = {location}
              
              // getRocja = {getRocja}
              // getNaranjo = {getNaranjo}
              ></Home>
          </Route>
          <Route path="/about">
            <Navbar 
                    isLoggedIn={setIsLoggedIn}
                    doLogout={doLogout}
            />
            <About />
          </Route>
          <Footer></Footer>
         </div>  
      </Switch>
      
     
    </Router>
    
  );
}

export default App;