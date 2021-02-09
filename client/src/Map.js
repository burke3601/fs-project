import React from 'react';
import GoogleMapReact from 'google-map-react'
import { Link } from 'react-router-dom'


import locationIcon from '@iconify/icons-mdi/map-marker'
import { Icon } from '@iconify/react'



const LocationPin = ({ text, getStation, fetchWeather,location }) => (
  
    <div className="pin">
      <Link to='/graphs' >
      <Icon  icon={locationIcon} className="pin-icon" style={{transform: 'scale(0.8)'}} 
      onClick={(e)=>{console.log(e);
                    getStation(e.target.id);
                    fetchWeather(e.target.lat,e.target.lng)}}
                     id={text} />
      <p className="pin-text" onClick={(e)=>{
        console.log(e.target.innerHTML)
        let sta = location.find(el => el.address === e.target.innerHTML)
      console.log(sta);
      getStation(e.target.id);
      fetchWeather(sta.lat,sta.lng)}}
       id={text}>{text}</p>
      </Link>
      
    </div>
  )
  
  function Map ({center, location, zoomLevel, getStation, fetchWeather }) {
   
     
      // console.log(location)
      // console.log(location[0])
     
      return (

    <div >
      

      <h2 className="map-h2">Elija marcador para ver datos</h2>
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY_MAP }}
          defaultCenter={center}
          location = {location}
          defaultZoom={zoomLevel}
        >
            {/* {location &&<>  */}
            <LocationPin
             text = {location[0].address}
             lat = {location[0].lat}
             lng = {location[0].lng}
             getStation = {getStation}
             location = {location}
             fetchWeather = {fetchWeather}
            />
             <LocationPin
             text = {location[1].address}
             lat = {location[1].lat}
             lng = {location[1].lng}
             getStation = {getStation}
             location = {location}
             fetchWeather = {fetchWeather}
            />
             <LocationPin
             text = {location[2].address}
             lat = {location[2].lat}
             lng = {location[2].lng}
             getStation = {getStation}
             location = {location}
             fetchWeather = {fetchWeather}
            />
              <LocationPin
             text = {location[3].address}
             lat = {location[3].lat}
             lng = {location[3].lng}
             getStation = {getStation}
             location = {location}
             fetchWeather = {fetchWeather}
            />
             <LocationPin
             text = {location[4].address}
             lat = {location[4].lat}
             lng = {location[4].lng}
             getStation = {getStation}
             location = {location}
             fetchWeather = {fetchWeather}
            />
             <LocationPin
             text = {location[5].address}
             lat = {location[5].lat}
             lng = {location[5].lng}
             getStation = {getStation}
             location = {location}
             fetchWeather = {fetchWeather}
            />        
             <LocationPin
             text = {location[6].address}
             lat = {location[6].lat}
             lng = {location[6].lng}
             getStation = {getStation}
             location = {location}
             fetchWeather = {fetchWeather}
            />      
          {/* </>}   */}
          {/* <Link to='/graphs'> */}
            {/* <LocationPin */}
       
            {/* /> */}
          {/* </Link> */}
         
        </GoogleMapReact>
      </div>
    </div>
  )

}

export default Map