import React from 'react'
import Map from './Map'
import Weather from './Weather'


  const center = {
    lat: 15.4651,
    lng: -90.3843
  }

function Home(props){
  //useEffect(()=>props.fetchWeather(15.4651,-90.3843),[])
    //console.log(props.location)
    return(
        <div className="dashboard">


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