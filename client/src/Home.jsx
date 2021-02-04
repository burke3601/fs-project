import React, {useState} from 'react'


import Map from './Map'
import Api from './Api'


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

function Home(props){
    
    return(
        <div className="map">
            <Map
            location={location} zoomLevel={6}
            locationTwo={locationTwo}
            />
            <Api
            fetchWeather = {props.fetchWeather}
            weather = {props.weather}></Api>
        </div>
    )
}


export default Home