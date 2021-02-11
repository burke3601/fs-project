import React, {useEffect,useState} from 'react'


import Map from './Map'
import Api from './Api'
import Weather from './Weather'


  const center = {
    lat: 15.4651,
    lng: -90.3843
  }

function Home(props){
  //useEffect(()=>props.fetchWeather(15.4651,-90.3843),[])
    console.log(props.location)
    return(
        <div className="dashboard" style={props.toggle ? {gridColumn: '4/13'}:{gridColumn: '1/13'}}>


            <Weather 
            
            weather={props.weather}
            />
              


            <Map
            getStation = {props.getStation}
            location={props.location} zoomLevel={8}
            fetchWeather = {props.fetchWeather}
            weather={props.weather}
            center = {center}
            
            />


        </div>
    )
}


export default Home