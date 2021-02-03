import React from 'react';
import GoogleMapReact from 'google-map-react'
import './map.css'

import locationIcon from '@iconify/icons-mdi/map-marker'
import { Icon } from '@iconify/react'








const LocationPin = ({ text }) => (
    <div className="pin">
      <Icon icon={locationIcon} className="pin-icon" />
      <p className="pin-text">{text}</p>
    </div>
  )
  
  function Map ({ location, locationTwo, zoomLevel }) {
      return (
    <div className="map">
      <h2 className="map-h2">Location Sites</h2>
  
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY_MAP }}
          defaultCenter={location}
          defaultCenterTwo={locationTwo}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
         
        </GoogleMapReact>
      </div>
    </div>
  )
}

export default Map