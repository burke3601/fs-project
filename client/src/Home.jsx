import React, {useState} from 'react'
import Dashboard from './Dashboard'
import Header from './Header'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Api from './Api'
import {REACT_APP_API_KEY} from './config'
import axios from 'axios'
const lat = ''
const lon = ''
const api = {
    
    url: `http://api.openweathermap.org/data/2.5/onecall?lat=14.365316&lon=-91.81191&units=metric&appid=${REACT_APP_API_KEY}`
}
// const [weather, setWeather] = useState([])
// async function fetchWeather(){
    
//     const response = await axios.get(`${api.url}`)
    
//     console.log(response);}
//     setWeather(response)
//     console.log(weather)
    //const {weat} = data
    // if (weat) {
    //     const getWeather = weat.map((w) =>{
    //         const {
    //             temp,
    //             feels_like,
    //             temp_min,
    //             temp_max,
    //             humidity,
    //             main,
    //             description,
    //             icon
    //         } = weather

    //         return {
    //             temp: temp,
    //             feels_like: feels_like,
    //             temp_min: temp_min,
    //             temp_max: temp_max,
    //             humidity: humidity,
    //             main: main,
    //             description: description,
    //             icon: icon,
    //         }
    //     })
        
        
//     }
// }
//setWeather(getWeather)


function Home(){
    const [weather, setWeather] = useState([])
    async function fetchWeather(){
    
    const response = await axios.get(`${api.url}`)
     
    console.log(response.data.current);
    setWeather(response)
    
}
    console.log(weather)
    return(
        <div className='container'>
            
           <Navbar></Navbar>
            <Sidebar>
                
            </Sidebar>
            <Dashboard>

            </Dashboard>
            <Api fetchWeather = {fetchWeather} />
            <div>
               
            </div>
        </div>
    )
}


export default Home