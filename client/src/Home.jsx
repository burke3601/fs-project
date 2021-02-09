import React, {useState} from 'react'


import Map from './Map'
import Api from './Api'
import Weather from './Weather'


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
// const location = {
//     address: 'Pueblo Nuevo',
//     lat: 14.365316,
//     lng: -92.81191,
//   }
  
//   const locationTwo = {
//     address: 'La Virgen',
//     lat: 14.423664,
//     lng: -92.55512,
  
//   }
  const center = {
    lat: 15.4651,
    lng: -90.3843
  }

function Home(props){
    console.log(props.getStation)
    return(
        <div className="map">


            <Weather 
            weather={props.weather}
            />
              


            <Map
            getStation = {props.getStation}
            location={location} zoomLevel={8}
            
            center = {center}
            
            />


        </div>
    )
}


export default Home