import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css'
import Graph from './Graph'
import axios from 'axios'
import Home from './Home';
import Login from './Login';
import Logout from './Logout'
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
  Redirect,
  useHistory
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
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [data,setData] = useState({results: []})
 

  const [weather, setWeather] = useState([])
  const [count, setCount] = useState(1)
  const [station, setStation] = useState('')
  const [user, setUser] = useState({userName: ""});  
  
  //adds one hour of data from backend
  useEffect(()=>{
    axios.get(`/api/getStationByPeriod/${count}/${station}`)
    .then(resp=>{
    console.log(resp)
    if (resp.data.length > 0){setData(resp.data)}

    })
    
  },[count])
  async function addHour ( station){
    setStation(station)
    setCount(count+1)
   
  }
  //subtracts one hour of data from backend
  async function subtractHour ( station){
    setStation(station)
    if (count > 1){
      setCount(count-1)
      }else{
        setCount(count)
      }
   
  }
  //needs to be renamed for clarification
  //gets data by day/week/month from buttons on dashboard
  //day = the period station = the station or the river
  //sets the hour count at one but shows period specified(day, week, month)
  async function getDay (day, station){
    setCount(1)
    const resp = await axios.get(`/api/getStationByPeriod/${day}/${station}`);
    console.log(resp)
    if (resp.data.length > 0){setData(resp.data)}
    
  }
  //this function is called from the 'map' (home) page only when the map icons are clicked
  async function getStation(params) {
    console.log(params)
    const resp = await axios.get(`/api/getStation/${params}`);
    console.log(resp)
    setData(resp.data)
  }
  //from the sidebar
  //gets the data for rocja river
  async function getRocja(){
    const resp = await axios.get(`/api/rocja`);
    console.log(resp)
    setData(resp.data)
  }
  //from the sidebar
  //gets the data for naranjo river
  async function getNaranjo(){
    const resp = await axios.get(`/api/naranjo`);
    console.log(`**************`)
    console.log(resp,'139')
    setData(resp.data)
  }
  //fetches weather data--- called at home and dashboard
  //displays data for specific station location in dashboard
  //displays data for guatemala city as default when map is displayed
  async function fetchWeather(lat,lng){
  const response = await axios.get(`http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&units=metric&appid=${REACT_APP_API_KEY}`)
  setWeather(response.data)
}
//executes login
async function doLogin(name, password) {
  
  const loginDetails= {name, password}
  const response = await axios.post(`/api/user/login`,loginDetails)
  console.log('sweet you are logged in now, buddy');
  
 
  setIsLoggedIn(true);
 

}


useEffect(() => {
  async function checkLogin() {
    // see if we're logged in
    try {      
      const resp = await axios.get('/api/users/login-status');
      console.log('you are logged in already');
      setIsLoggedIn(true);
    } catch (e) {
      // an error means that we're not logged in
      console.log('error means not logged in');
      setIsLoggedIn(false);
    }
  }
  checkLogin();    
}, []);
//fetches initial data for weather and Naranjo river by default
useEffect(()=>{
  fetchWeather(15.950753,-90.546267)
  // setInterval(fetchWeather,1000*60*30)
  //  setInterval(()=>{
  getRocja()
  //getNaranjo()
  //getStation()
    //getDay(count, "Rio Rocja Ponitlla")
  // },1000*60*15)
},[])
const [toggle, setToggle]= useState(false)
  return (
   
    <Router>
      <Switch>
        {/* <NavbarBootstrap></NavbarBootstrap> */}
        <Route exact path="/">
        {/* {setIsLoggedIn(true),
        <Redirect to='/home' />} */}
        {isLoggedIn ?  <>
            <Navbar 
                    isLoggedIn={setIsLoggedIn}
                    // doLogout={doLogout}
                    toggle = {toggle}
                    setToggle = {setToggle}
            />
              {/* <NavbarBootstrap></NavbarBootstrap> */}
             
              <Sidebar
              getRocja = {getRocja}
              getNaranjo = {getNaranjo}
              fetchWeather={fetchWeather}
              toggle = {toggle}
              count = {count}
              subtractHour = {subtractHour}
              setCount = {setCount}

              ></Sidebar>
              <Dashboard
              toggle = {toggle}
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
          
          </>: <Login 
                  doLogin={doLogin}
                  setUsername={setUsername}
                  username={username}
                  setPassword={setPassword}
                  password={password}
                  // setUser={setUser}
                  
            /> }
           
          </Route>

        
      
      
         <div className='container'>
          <Route path="/graphs" exact>
          {isLoggedIn ? <>
            <Navbar 
                    isLoggedIn={setIsLoggedIn}
                    // doLogout={()=>doLogout(history)}
                    toggle = {toggle}
                    setToggle = {setToggle}
            />
              {/* <NavbarBootstrap></NavbarBootstrap> */}
             
              <Sidebar
              getRocja = {getRocja}
              getNaranjo = {getNaranjo}
              fetchWeather={fetchWeather}
              toggle = {toggle}
              count = {count}
              subtractHour = {subtractHour}
              setCount = {setCount}

              ></Sidebar>
              <Dashboard
              toggle = {toggle}
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
          
          </>: <Login 
                  doLogin={doLogin}
                  setUsername={setUsername}
                  username={username}
                  setPassword={setPassword}
                  password={password}
                  // setUser={setUser}
                  
            /> }
         <Footer></Footer>

          </Route>

          <Route path="/home">
          {isLoggedIn ?  <>
            <Navbar 
                    isLoggedIn={setIsLoggedIn}
                    // doLogout={()=>doLogout(history)}
                    toggle = {toggle}
                    setToggle = {setToggle}
            />
              <Sidebar
                toggle = {toggle}
                setToggle = {setToggle}
                count = {count}
                setCount = {setCount}
                subtractHour = {subtractHour}
              ></Sidebar>
              
              <Home 
              toggle = {toggle}
              setToggle = {setToggle}
              fetchWeather={fetchWeather}
              weather = {weather}
              getStation = {getStation}
              location = {location}
              ></Home>
              <Footer></Footer></>: <Login 
                  doLogin={doLogin}
                  setUsername={setUsername}
                  username={username}
                  setPassword={setPassword}
                  password={password}
                  // setUser={setUser}
                  
            /> } 
          
          </Route>
          <Route path="/about">
          {isLoggedIn ?  <>
            <Navbar 
                    isLoggedIn={setIsLoggedIn}
                    // doLogout={()=>doLogout(history)}
                    toggle = {toggle}
                    setToggle = {setToggle}
            />
            <About />
            <Footer></Footer>
          </>: <Login 
                  doLogin={doLogin}
                  setUsername={setUsername}
                  username={username}
                  setPassword={setPassword}
                  password={password}
                  // setUser={setUser}
                  
            /> }
           
          </Route>
          
         </div>  
        
      </Switch>
      
     
    </Router>
    
  );
}

export default App;