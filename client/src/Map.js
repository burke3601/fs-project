import React from 'react';
import GoogleMapReact from 'google-map-react'
import './map.css'


function Map({ location, zoomLevel}){
    return(
        <div className="map">
       
    
        <div className="google-map">
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyCvftFNGqLrx5cMe_kst6kfYlnG17sJCm8' }}
            defaultCenter={location}
            defaultZoom={zoomLevel}
          >
            {/* <LocationPin
              lat={location.lat}
              lng={location.lng}
              text={location.address}
            /> */}
          </GoogleMapReact>
        </div>
      </div>
    )
    
}


export default Map