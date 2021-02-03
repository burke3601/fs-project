import React from 'react'

function LocationPin(){

    return(
        <div className="pin">
        <Icon icon={locationIcon} className="pin-icon" />
        <p className="pin-text">{text}</p>
      </div>
    )
}


export default LocationPin