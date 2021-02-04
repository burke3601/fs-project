import React from 'react';
import GoogleMapReact from 'google-map-react'
import { Link } from 'react-router-dom'
import './map.css'

import locationIcon from '@iconify/icons-mdi/map-marker'
import { Icon } from '@iconify/react'









const LocationPin = ({ text }) => (
    <div className="pin">
      <Icon icon={locationIcon} className="pin-icon" style={{transform: 'scale(0.8)'}} />
      <p className="pin-text">{text}</p>
    </div>
  )
  
  function Map ({ location, locationTwo, zoomLevel }) {
      return (

    <div >
      

  
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY_MAP }}
          defaultCenter={location}
          defaultCenterTwo={locationTwo}
          defaultZoom={zoomLevel}
        >
         <Link to='/graphs'>
            <LocationPin
              lat={location.lat}
              lng={location.lng}
              text={location.address}
            />
          </Link>
          <Link to='/graphs'>
            <LocationPin
              lat={locationTwo.lat}
              lng={locationTwo.lng}
              text={locationTwo.address}
            />
          </Link>
         
        </GoogleMapReact>
      </div>
    </div>
  )
}

export default Map